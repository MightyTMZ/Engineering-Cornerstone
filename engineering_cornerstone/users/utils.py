import secrets
from django.utils import timezone

def generate_verification_code():
    code = secrets.token_hex(3).upper()  # Generating a 6-character hexadecimal code
    timestamp = timezone.now()
    return code, timestamp
