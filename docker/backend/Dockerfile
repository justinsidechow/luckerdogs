# docker/backend/Dockerfile

FROM python:3.10.0-alpine

WORKDIR /luckerdogs
ADD ./backend/requirements.txt /luckerdogs/backend/

RUN pip install --upgrade pip
RUN pip install gunicorn
RUN pip install -r backend/requirements.txt

ADD ./docker /luckerdogs/docker
ADD ./backend /luckerdogs/backend