# InnovationHub
A Fullstack project made using MERN stack with Next.js, TypeScript, and DaisyUI.

## Tech Stack
- **Frontend**: Next.js 14, TypeScript, Tailwind CSS, DaisyUI
- **Backend**: Node.js, Express, TypeScript, MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Form Handling**: React Hook Form with Zod validation

## Prerequisites
- Node.js (v18 or higher)
- MongoDB (v6 or higher)
- npm or yarn package manager

## Project Structure
```
innovationhub/
├── frontend/          # Next.js frontend application
└── backend/          # Express backend application
```

## Setup Instructions

### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd innovationhub
```

### 2. Backend Setup
```bash
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.bak .env
# Edit .env with your configuration:
# PORT=5000
# MONGODB_URI=mongodb://localhost:27017/innovationhub
# JWT_SECRET=your-secret-key
# NODE_ENV=development

# Start development server
npm run dev
```

### 3. Frontend Setup
```bash
cd frontend

# Install dependencies
npm install

# Create .env.local file
cp .env.example .env.local
# Edit .env.local with your configuration:
# NEXT_PUBLIC_API_URL=http://localhost:5000/api

# Start development server
npm run dev
```

## Running the Application

1. Start MongoDB:
```bash
# Make sure MongoDB is running on your system
# On Linux/Mac:
sudo service mongodb start
# or
mongod
```

2. Start the Backend:
```bash
cd backend
npm run dev
# Server will run on http://localhost:5000
```

3. Start the Frontend:
```bash
cd frontend
npm run dev
# Application will run on http://localhost:3000
```

## Available Scripts

### Backend
- `npm run dev`: Start development server with hot reload
- `npm run build`: Build the TypeScript code
- `npm start`: Start the production server
- `npm test`: Run tests

### Frontend
- `npm run dev`: Start development server
- `npm run build`: Build the Next.js application
- `npm start`: Start the production server
- `npm run lint`: Run ESLint

## Features
- User Authentication (Register/Login)
- Protected Routes
- JWT-based Authentication
- Responsive UI with DaisyUI
- Form Validation
- TypeScript Support
- MongoDB Integration

## API Endpoints

### Authentication
- `POST /api/auth/register`: Register a new user
- `POST /api/auth/login`: Login user
- `GET /api/users/profile`: Get user profile (Protected)
- `PUT /api/users/profile`: Update user profile (Protected)

## Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/innovationhub
JWT_SECRET=your-secret-key
NODE_ENV=development
```

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.
