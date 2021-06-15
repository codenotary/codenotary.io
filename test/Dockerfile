FROM python:3
COPY ./tests/requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt
RUN pip install --upgrade requests[security]
RUN pip install --upgrade httpie
CMD sleep 20 && ping -c 5 selenium-hub && cd /tests && SITE_URL=${SITE_URL} behave --junit --no-capture ${BEHAVE_OPTS}
