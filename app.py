import streamlit as st
from ai_agent import analyze_email
from email_reader import read_emails
from notifier import send_notification

st.title("AI Email Handling Agent")

if st.button("Check New Emails"):

    emails = read_emails()

    if len(emails) == 0:
        st.write("No new emails")

    for mail in emails:

        st.subheader("New Email")

        st.write("Sender:", mail["sender"])
        st.write("Subject:", mail["subject"])

        analysis = analyze_email(mail["subject"])

        st.write("AI Analysis:")
        st.write(analysis)

        send_notification("New Email from " + mail["sender"], mail["subject"])