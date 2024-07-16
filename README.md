# Sample API using Docker Compose

This repository contains a sample Express API and PostgreSQL setup that can be run using Docker Compose.

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- Docker: [Install Docker](https://docs.docker.com/get-docker/)
- Docker Compose: [Install Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

Follow these steps to run the API locally using Docker Compose:

1. **Clone the repository:**

```bash
git clone https://<username>:<password>@github.com/edmharfabros/adaca-api
cd adaca-api
```

2. **Build and run the Docker containers:**

```bash
docker-compose up --build
```

2. **Access the API:**

```bash
CURL http://localhost:3000
```

## Run Test

```bash
pnpm test
```
