# GenMate Backend

The backend service for GenMate, an intergenerational mentorship platform connecting teenagers with senior citizens for skill-sharing and companionship.

## Features

- User authentication and authorization
- Profile management for teens and seniors
- Session scheduling and management
- Skill matching algorithm
- Points and badges system
- Feedback and rating system
- Virtual and in-person session support

## Tech Stack

- Node.js with Express
- TypeScript
- MongoDB with Mongoose
- JWT for authentication
- RESTful API architecture

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd genmate/backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/genmate
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
NODE_ENV=development
```

4. Start the development server:
```bash
npm run dev
```

## API Endpoints

### Authentication
- POST `/api/users/register` - Register a new user
- POST `/api/users/login` - Login user

### User Management
- GET `/api/users/profile` - Get user profile
- PATCH `/api/users/profile` - Update user profile
- GET `/api/users/search` - Search users
- PATCH `/api/users/points` - Update user points
- POST `/api/users/badges` - Add badge to user

### Session Management
- POST `/api/sessions` - Create a new session
- GET `/api/sessions` - Get user's sessions
- PATCH `/api/sessions/:id/status` - Update session status
- POST `/api/sessions/:id/feedback` - Submit session feedback
- GET `/api/sessions/stats` - Get session statistics

## Development

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the TypeScript code
- `npm start` - Start the production server
- `npm test` - Run tests

## Deployment

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the ISC License. 