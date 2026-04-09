import imaplib
import email

EMAIL = "sravanthigopu1@gmail.com"
PASSWORD = "xqdg kbja qjoq vehz"

def read_emails():

    mail = imaplib.IMAP4_SSL("imap.gmail.com")

    mail.login(EMAIL, PASSWORD)

    mail.select("inbox")

    status, messages = mail.search(None, 'UNSEEN')

    email_list = []

    for num in messages[0].split():

        status, data = mail.fetch(num, "(RFC822)")

        msg = email.message_from_bytes(data[0][1])

        sender = msg["from"]
        subject = msg["subject"]

        email_list.append({
            "sender": sender,
            "subject": subject
        })

    return email_list