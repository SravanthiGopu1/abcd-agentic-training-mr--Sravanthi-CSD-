import requests

def analyze_email(email_text):

    prompt = f"""
    Analyze the email and provide:
    Category
    Priority
    Summary
    Suggested Reply

    Email:
    {email_text}
    """

    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": "llama3",
            "prompt": prompt,
            "stream": False
        }
    )

    result = response.json()

    return result["response"]