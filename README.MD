# DOCS

## start server
`uvicorn app.main:app --reload `

## Data bases 
http://127.0.0.1:53692/browser/

using virtual env 
python3 -m venv venv

installing dependencys

pip install -r requirements.txt

## making DB change

alembic upgrade <number of version>
alembic revision -m 'create updated ... '
alembic upgrade head is the lastest
alembic revision --autogenerate -m "SOME MESSAGE FOR THE UPDATE"
the auto generate will create an update from the model.py

docs for alembic
https://alembic.sqlalchemy.org/en/latest/