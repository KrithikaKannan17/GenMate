# GenMate - Intergenerational Mentorship Platform

A web application that connects teenagers with senior citizens for mentorship, skill-sharing, and companionship. Teens can seek guidance in areas like academics, cooking, gardening, career advice, or life skills, while seniors can share their wisdom, experiences, and enjoy meaningful interactions.

## Features

- User Profiles for teens and seniors
- AI-powered skill matching algorithm
- Virtual and in-person session options
- Safety features with verified profiles
- Skill exchange marketplace
- Companionship mode with rewards
- Community forum
- Gamification with badges and points
- Feedback and rating system

## Tech Stack

### Frontend
- React with TypeScript
- Tailwind CSS for styling
- Vite for build tooling
- React Router for navigation

### Backend
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
cd genmate
```

2. Install dependencies for both frontend and backend:
```bash
npm run install-all
```

3. Set up environment variables:
   - Create `.env` file in the backend directory (see backend/README.md for details)

4. Start the development servers:
```bash
npm run dev
```

This will start:
- Frontend server at http://localhost:5173
- Backend server at http://localhost:5001

## Project Structure

```
genmate/
├── frontend/           # React frontend application
│   ├── src/           # Source files
│   ├── public/        # Static files
│   └── ...
├── backend/           # Node.js backend application
│   ├── src/          # Source files
│   ├── dist/         # Compiled files
│   └── ...
└── package.json      # Root package.json
```

## Development

- `npm run frontend` - Start frontend development server
- `npm run backend` - Start backend development server
- `npm run dev` - Start both frontend and backend servers
- `npm run build` - Build both frontend and backend
- `npm start` - Start production server

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the ISC License. 