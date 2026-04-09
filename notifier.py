from pushbullet import Pushbullet

API_KEY = "o.OnPZYoohBxnHGpe2CfuoxdKSH37aWSkS"

def send_notification(title,message):

    pb = Pushbullet(API_KEY)

    pb.push_note(title,message)