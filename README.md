# 🐳 Docker Tutorial: Hello from the Other Side!

A simple containerized application to learn Docker basics with a backend API and frontend.

## What This App Does

- **Backend**: Express.js API that serves the message "Hello from the other side!"
- **Frontend**: Next.js web app that displays the message from the backend
- **Docker**: Both parts run in separate containers that work together

## Project Structure

```
Docker/
├── backend/                 # Express.js API
│   ├── server.js           # Main server file
│   ├── package.json        # Dependencies
│   └── Dockerfile          # Container instructions for backend
├── frontend/                # Next.js web app
│   ├── src/app/            # App pages and components
│   ├── package.json        # Dependencies
│   └── Dockerfile          # Container instructions for frontend
├── docker-compose.yml       # Orchestrates both containers
└── README.md               # This file
```

## How to Run

### Prerequisites
- Install [Docker](https://docs.docker.com/get-docker/)
- Install [Docker Compose](https://docs.docker.com/compose/install/)

### Steps to Run

1. **Navigate to the project directory:**
   ```bash
   cd /home/rabia/Documents/Docker
   ```

2. **Build and start all containers:**
   ```bash
   docker-compose up --build
   ```

3. **Open your browser and visit:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001/api/hello

4. **To stop the application:**
   ```bash
   docker-compose down
   ```

## What Happens When You Run It

1. Docker builds two separate containers:
   - One for the backend (Express.js on port 3001)
   - One for the frontend (Next.js on port 3000)

2. The containers can communicate with each other through Docker's internal network

3. The frontend makes an API call to the backend to get the message

4. You see "Hello from the other side!" displayed beautifully in your browser!

## Screenshots

### Application Running
![Frontend Interface](https://i.postimg.cc/c48CLwrL/Docker-frontend.png)
*The beautiful frontend displaying the message from the backend*

### Docker Containers
![Docker Containers Running](https://i.postimg.cc/bNQGR18x/Screenshot-from-2025-10-18-11-19-40.png)
*Both containers running successfully with docker-compose*

### API Response
![Backend API Response](https://i.postimg.cc/xjXMLkcK/docker-backend.png)
*The raw JSON response from the backend API endpoint*

## Key Docker Concepts Demonstrated

- **Containerization**: Each part of the app runs in its own isolated environment
- **Multi-container Application**: Frontend and backend in separate containers
- **Docker Compose**: Orchestrating multiple containers together
- **Container Communication**: How containers talk to each other
- **Port Mapping**: Exposing container ports to your host machine

## Useful Commands

```bash
# Build and run containers
docker-compose up --build

# Run in background (detached mode)
docker-compose up -d

# Stop containers
docker-compose down

# View running containers
docker ps

# View logs
docker-compose logs

# Rebuild just one service
docker-compose build backend
```

## Next Steps to Learn More

1. Try modifying the message in `backend/server.js`
2. Change the styling in `frontend/src/app/page.js`
3. Add more API endpoints
4. Experiment with environment variables
5. Learn about Docker volumes for persistent data

Happy containerizing! 🚢
