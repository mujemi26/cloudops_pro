# CloudOps Pro

A modern DevOps services website built with Next.js, TypeScript, and Tailwind CSS.

## 🐳 Docker Setup

### Production Build

```bash
# Build the image
docker build -t cloudops-pro .

# Run the container
docker run -p 3000:3000 cloudops-pro

# Run in detached mode
docker run -d -p 3000:3000 cloudops-pro
```

### Docker Commands

```bash
# Build the image
docker build -t cloudops-pro .

# Run the container
docker run -p 3000:3000 cloudops-pro

# Run in detached mode
docker run -d -p 3000:3000 cloudops-pro

# Stop the container
docker stop $(docker ps -q --filter ancestor=cloudops-pro)

# View logs
docker logs $(docker ps -q --filter ancestor=cloudops-pro)

# Shell into the container
docker exec -it $(docker ps -q --filter ancestor=cloudops-pro) sh
```

## 🚀 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 📁 Project Structure

```
cloudops_pro/
├── app/                    # Next.js app directory
├── components/             # React components
├── lib/                    # Utilities
├── public/                 # Static assets
├── Dockerfile              # Production Dockerfile
└── .dockerignore           # Docker ignore file
```

## 🌐 Access

- **Local Development**: http://localhost:3000
- **Docker Production**: http://localhost:3000

## 🔧 Environment Variables

The application uses the following environment variables:

- `NODE_ENV`: Set to `production` or `development`
- `PORT`: Server port (default: 3000)

## 📦 Features

- Modern, responsive design
- Dark/light theme toggle
- Interactive components
- Contact form
- Chat widget
- Smooth animations
- Mobile-friendly layout 