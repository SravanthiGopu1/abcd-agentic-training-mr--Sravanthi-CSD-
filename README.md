        AI Email Handling Agent (Agentic AI Project)
---------------------------------------------------------------
1. Business Problem

Modern users receive a large number of emails every day. Manually checking, prioritizing, and responding to emails can be time-consuming and inefficient. Important emails may be missed, and users may struggle to quickly understand the purpose or urgency of incoming messages.

Organizations and individuals need an automated system that can analyze emails, identify important information, and notify users in real time.

2. Possible Solution:

An AI-based solution can be developed to automatically:
Read incoming emails from the inbox
Analyze the email content using a Large Language Model (LLM)
Extract important information such as sender, subject, and priority
Notify the user about important emails
Suggest possible replies

This reduces manual effort and improves productivity.

3. Implemented Solution:

In this project, an AI Email Handling Agent was developed.

The system:

Reads emails from the inbox using Gmail IMAP.
Uses an LLM to analyze email content.
Extracts useful insights such as summary and priority.
Displays results in a web dashboard.
Sends notifications to the user's mobile device.

The system behaves like an AI agent because it:

Observes incoming emails
Reasons about their content using AI
Acts by notifying the user

4. Tech Stack Used:
   Component	           Technology
    Backend	               Python
    Web Interface	         Streamlit  
    AI Model	             Ollama
    Email Access	         Gmail IMAP
    Notifications	         Pushbullet
    Version Control	       Git
    Code Hosting	         GitHub

5. Architecture Diagram:

              Gmail Inbox
                │
                ▼
        Email Reader (Python)
                │
                ▼
      LLM Analysis (Ollama)
                │
                ▼
        Streamlit Dashboard
                │
                ▼
        Mobile Notification

6. How to Run Locally:
   
Step 1 – Clone Repository
git clone https://github.com/https://github.com/SravanthiGopu1/abcd-agentic-training-mr--Sravanthi-CSD-
Step 2 – Open Project
cd ai_email_agent
Step 3 – Create Virtual Environment
python -m venv venv
Activate environment:
venv\Scripts\activate
Step 4 – Install Dependencies
pip install -r requirements.txt
Step 5 – Start LLM
Run Ollama:
ollama run llama3
Step 6 – Run Application
Start Streamlit:
streamlit run app.py
Open browser:
http://localhost:8501

7. References and Resources:
   
Ollama documentation
Streamlit documentation
Gmail IMAP documentation
Python official documentation
Pushbullet API documentation

9. Screenshots
Dashboard:
<img width="1360" height="724" alt="Screenshot (20)" src="https://github.com/user-attachments/assets/04d1ebaa-3986-417a-98ce-378e4bb1cfc2" />

mobile notification:
![WhatsApp Image 2026-04-09 at 10 45 49 PM](https://github.com/user-attachments/assets/ffb51b6c-41fd-448e-8dd0-e1590cad2c3f)

10. Formatting and Structure

This README follows:

Clear headings
Organized sections
Architecture visualization
Proper Markdown formatting
Readable structure for project evaluation

11. Problems Faced and Solutions:

Problem                                   	Solution
Git authentication error	                  Reconfigured GitHub credentials
Merge conflicts while pushing	              Resolved conflicts in .gitignore
Email authentication issues	                Used Gmail App Password
LLM integration errors	                    Verified Ollama server connection
Pushbullet notification issues	            Correct API key configuration

Future Enhancements:

Automatic AI email replies
Email priority classification
Calendar scheduling integration
Spam detection using AI
Multi-agent architecture for advanced automation

Project Summary:

This project demonstrates how Agentic AI systems can automate email management by combining:

Natural language understanding
AI decision making
automated notifications
real-time monitoring

The system acts as a smart AI assistant for managing emails efficiently.

Repository Link:
https://github.com/SravanthiGopu1/abcd-agentic-training-mr--Sravanthi-CSD-
