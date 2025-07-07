# Self-Hosting TensorBlock Forge

This guide provides a simple and reliable method for self-hosting TensorBlock Forge and all its components using Docker.

## Prerequisites

-   [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/) must be installed.
-   `git` must be installed to clone the repository.
-   You will need API keys for any AI providers you wish to use with Forge.

## How It Works

This setup uses Docker Compose to run three separate services in their own containers:

1.  **The Forge Application**: The core API gateway.
2.  **PostgreSQL Database**: Used for storing all user and key information.
3.  **Redis**: Provides a high-speed cache to improve performance.

Using Docker Compose is the recommended way to get started, as it handles the setup and networking of all three components for you.

## Installation Steps

### 1. Clone the Repository

First, get the source code from GitHub.

```bash
git clone https://github.com/TensorBlock/forge.git
cd forge
```

### 2. Configure Your Environment

Forge is configured using environment variables. An example file is provided, which you should copy to create your own configuration.

```bash
cp .env.example .env
```

Now, open the new `.env` file in an editor and configure the following required variables:

-   `API_KEY_ENCRYPTION_KEY`: A secret key used to encrypt provider API keys in the database.
-   `JWT_SECRET_KEY`: A secret key for signing user session tokens.

You can generate secure values for these keys by running the following commands:

```bash
echo "API_KEY_ENCRYPTION_KEY=$(openssl rand -base64 32)" >> .env
echo "JWT_SECRET_KEY=$(openssl rand -base64 32)" >> .env
```

### 3. Start the Services

With the configuration in place, you can start all the services using Docker Compose.

```bash
docker-compose up -d
```

This command will download the necessary images, build the Forge application container, and start everything in the background (`-d`). The first time you run this, it may take a few minutes.

## Accessing Your Forge Instance

Once the startup is complete, you can access the services:

-   **API Endpoint**: `http://localhost:8000`
-   **Interactive API Docs (Swagger UI)**: `http://localhost:8000/docs`

The database will be running on port `5432`, but it is only accessible to the other containers, not to your host machine by default.

## Basic Management

Here are the essential commands for managing your self-hosted instance:

-   **View Logs**: See the real-time output from all services.
    ```bash
    docker-compose logs -f
    ```
-   **Restart Services**:
    ```bash
    docker-compose restart
    ```
-   **Stop Services**: Stop and remove the containers. Your database data will be preserved in a Docker volume.
    ```bash
    docker-compose down
    ```

## Managing Your Instance with the CLI

Once your Forge instance is running, you use the command-line interface (CLI) to create users and manage provider keys. To run the CLI, you execute commands inside the running `app` container.

The basic format is `docker-compose exec app python forge-cli.py [COMMAND]`.

### Create Your First User

This is the very first thing you should do. This command will create your admin user and generate your first Forge API key.

```bash
docker-compose exec app python forge-cli.py register
```

Follow the prompts to set your username, email, and password. **Save the Forge API key that is printed at the end.**

### Add a Provider Key

Next, add the API key for a provider like OpenAI or Anthropic.

```bash
docker-compose exec app python forge-cli.py add-key
```

This will launch an interactive prompt where you can select the provider and paste in your key.

### List Your Provider Keys

To see which providers you have successfully connected, run:

```bash
docker-compose exec app python forge-cli.py list-keys
```

### Explore All Commands

The Forge CLI has many other features. To see a full list of commands and options, use the `--help` flag:

```bash
docker-compose exec app python forge-cli.py --help
```
