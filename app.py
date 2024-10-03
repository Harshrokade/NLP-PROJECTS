from flask import Flask, request, jsonify, send_from_directory, render_template
from io import BytesIO
import re
from pdfminer.high_level import extract_text
import spacy
from spacy.matcher import Matcher
import os

# Define the static and template folder paths correctly
static_folder = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'assets')
template_folder = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'templates')

app = Flask(__name__, static_folder=static_folder, template_folder=template_folder)

# Load spaCy model
nlp = spacy.load('en_core_web_sm')

# Extract Name
def extract_name(resume_text):
    matcher = Matcher(nlp.vocab)
    patterns = [[{'POS': 'PROPN'}, {'POS': 'PROPN'}]]
    matcher.add('NAME', patterns=patterns)
    doc = nlp(resume_text)
    matches = matcher(doc)
    for _, start, end in matches:
        return doc[start:end].text
    return None

# Extract Contact Number
def extract_contact_number_from_resume(text):
    pattern = r"\b(?:\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}\b"
    match = re.search(pattern, text)
    return match.group() if match else None

# Extract Email
def extract_email_from_resume(text):
    pattern = r"\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b"
    match = re.search(pattern, text)
    return match.group() if match else None

# Extract Skills
def extract_skills_from_resume(text, skills_list):
    return [skill for skill in skills_list if re.search(rf"\b{re.escape(skill)}\b", text, re.IGNORECASE)]

# Define a skills-to-job-role dictionary
skills_to_job_roles = {
    'Python': ['Data Scientist', 'Python Developer', 'Machine Learning Engineer'],
    'Data Analysis': ['Data Analyst', 'Business Analyst'],
    'Machine Learning': ['Machine Learning Engineer', 'Data Scientist'],
    'Web Development': ['Frontend Developer', 'Full Stack Developer', 'Backend Developer'],
    'SQL': ['Database Administrator', 'Data Analyst', 'Business Intelligence Analyst'],
    'Project Management': ['Project Manager', 'Product Manager'],
    'Deep Learning': ['AI Researcher', 'Deep Learning Engineer'],
    'Tableau': ['Data Analyst', 'Business Intelligence Analyst']
}

# Suggest job roles based on skills
def suggest_job_roles(skills):
    suggested_roles = set()
    for skill in skills:
        if skill in skills_to_job_roles:
            suggested_roles.update(skills_to_job_roles[skill])
    return list(suggested_roles) if suggested_roles else ["No job roles found"]

# Home Route
@app.route('/')
def home():
    return render_template('service-details.html')

@app.route('/quiz')
def quiz():
    return render_template('quiz.html')

@app.route('/index')
def index():
    return render_template('index.html')

# Static Assets Route
@app.route('/assets/<path:path>')
def send_static(path):
    return send_from_directory(static_folder, path)

# File Upload and Parsing Route
@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'})
    try:
        file = request.files['file']
        text = extract_text(BytesIO(file.read()))
        response_data = {
            'Name': extract_name(text) or "Name not found",
            'Contact Number': extract_contact_number_from_resume(text) or "Contact Number not found",
            'Email': extract_email_from_resume(text) or "Email not found",
        }

        # Extract and suggest job roles
        skills_list = ['Python', 'Data Analysis', 'Machine Learning', 'Web Development', 'SQL', 'Project Management', 'Deep Learning', 'Tableau']
        extracted_skills = extract_skills_from_resume(text, skills_list)
        response_data['Skills'] = extracted_skills if extracted_skills else "No skills found"
        response_data['Suggested Job Roles'] = suggest_job_roles(extracted_skills)

        return jsonify(response_data)
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)