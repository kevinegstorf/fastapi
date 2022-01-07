from passlib.context import CryptContext
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash(string: str):
    return pwd_context.hash(string)

def verifyHash(plain_string, hashed_string):
    return pwd_context.verify(plain_string, hashed_string)