FROM python:3.10

WORKDIR /app

COPY requirements.txt requirements.txt

RUN pip install --upgrade pip && pip3 install -r requirements.txt

#If you don't define gunicorn in requirements.txt then
#RUN pip3 install gunicorn

COPY . .

EXPOSE 8000

RUN pip3 install gunicorn

CMD ["gunicorn", "--bind=0.0.0.0" , "--timeout", "600", "-w", "4", "-k", "uvicorn.workers.UvicornWorker", "main:app"]