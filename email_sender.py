import smtplib

def send_email(receiver,subject,message):

    sender = "sravanthigopu1@gmail.com"
    password = "xqdg kbja qjoq vehz"

    email = f"Subject: {subject}\n\n{message}"

    server = smtplib.SMTP("smtp.gmail.com",587)

    server.starttls()

    server.login(sender,password)

    server.sendmail(sender,receiver,email)

    server.quit()