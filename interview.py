from flask import Flask, request, jsonify, render_template
import pyttsx3
import speech_recognition as sr
from fpdf import FPDF
import os
from flask import Flask, send_file
from gtts import gTTS
import threading


app = Flask(__name__, static_folder="assets", static_url_path="/assets")

# Load questions from a text file
def load_questions(filename):
    with open(filename, 'r') as file:
        questions = file.readlines()
    return [q.strip() for q in questions]

# Convert text to speech
def speak(text):
    engine = pyttsx3.init()
    engine.say(text)
    engine.runAndWait()

# Record audio and convert to text
def listen():
    recognizer = sr.Recognizer()
    with sr.Microphone() as source:
        print("Listening...")
        audio = recognizer.listen(source)
        try:
            return recognizer.recognize_google(audio)
        except sr.UnknownValueError:
            return "Sorry, I did not understand that."
        except sr.RequestError as e:
            return f"Could not request results; {e}"

@app.route('/')
def index():
    return render_template('service-details-2.html')  # Change to your template name

@app.route('/start-interview', methods=['POST'])
def start_interview():
    try:

        # Generate the speech using gTTS and play the audio file
        audio_file = 'instructions.mp3'
        

        # Play the audio file in a separate thread
        threading.Thread(target=os.system, args=(f"start {audio_file},",)).start()  # For Windows
        # threading.Thread(target=os.system, args=(f"afplay {audio_file},",)).start()  # For macOS
        # threading.Thread(target=os.system, args=(f"xdg-open {audio_file},",)).start()  # For Linux

    except FileNotFoundError:
        return jsonify({"status": "error", "message": "Instructions file not found."}), 404
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

    # Load questions from a text file
    questions = load_questions('questions.txt')  # Ensure this file exists in the same directory
    answers = []

    if not questions:
        return jsonify({"status": "error", "message": "No questions found."}), 400

    for question in questions:
        speak(question)  # Ask the question
        answer = listen()  # Wait for the user to respond
        answers.append(answer)

    # Create PDF to store answers
    pdf = FPDF()
    pdf.add_page()
    pdf.set_font("Arial", size=12)

    for i, answer in enumerate(answers):
        pdf.cell(200, 10, txt=f"Q: {questions[i]}", ln=True)
        pdf.cell(200, 10, txt=f"A: {answer}", ln=True)

    pdf.output("answers.pdf")

    return jsonify({"status": "completed"})



if __name__ == '__main__':
    # Only remove 'answers.pdf' if it exists
    if os.path.exists('answers.pdf'):
        os.remove('answers.pdf')
    app.run(debug=True)

