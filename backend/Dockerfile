FROM python:3.12-slim-bookworm as base

# Dependencies Image
FROM base as deps
WORKDIR /app

RUN pip3 install --no-cache-dir poetry==1.8.3
COPY pyproject.toml poetry.lock /app/
RUN poetry export -f requirements.txt --output requirements.txt --without-hashes

# Production Image
FROM base as prod
WORKDIR /app

COPY --from=deps /app/requirements.txt /app
RUN pip3 install --no-cache-dir --upgrade -r /app/requirements.txt
COPY ./app /app/app

CMD uvicorn app.main:app --proxy-headers --host 0.0.0.0 --port 80 --reload
