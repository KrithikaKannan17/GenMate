# GenMate - Bridging Generations Through Mentorship

📌 **Objective**

GenMate is a web application designed to foster meaningful connections between teenagers and senior citizens. The platform enables skill-sharing, mentorship, and companionship, creating an enriching intergenerational experience.

## 🔹 Key Features

- **User Profiles**
  - Teens and seniors create profiles with their interests, skills, and preferences
  - Example: A teen interested in learning gardening can match with a senior who has gardening expertise

- **AI-Powered Skill Matching**
  - Matches users based on shared interests, skills, and availability
  - Intelligent recommendation system for optimal connections

- **Virtual and In-Person Sessions**
  - Choose between video calls, chat, or in-person meetups (if geographically close)
  - Safety features with verified profiles and parental consent for teens

- **Skill Exchange Marketplace**
  - Seniors can list skills they want to teach (e.g., knitting, storytelling, cooking)
  - Teens can request sessions or offer tech help and companionship in return

- **Companionship Mode**
  - Meaningful social interactions between generations
  - Earn "companionship points" redeemable for rewards

- **Community Forum**
  - Share stories, ask questions, and join group activities
  - Book clubs, cooking challenges, and gardening workshops

- **Gamification**
  - Badges and points for completing sessions and sharing skills
  - Recognition system for active community members

- **Feedback and Rating**
  - Session ratings and reviews
  - Trust-building through transparent feedback

## 🛠 Tech Stack

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

## 🚀 Setup

1. Clone the repository:
```bash
git clone https://github.com/KrithikaKannan17/GenMate.git
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

## 📂 Project Structure

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

## Development Commands

- `npm run frontend` - Start frontend development server
- `npm run backend` - Start backend development server
- `npm run dev` - Start both frontend and backend servers
- `npm run build` - Build both frontend and backend
- `npm start` - Start production server

## 📈 Future Improvements

- Expanding AI-based recommendations for better matching
- Enhancing security and verification processes
- Implementing a mobile-friendly design
- Adding real-time chat and video call integration

## 🏆 Industry Relevance

- **For Teens:** Gain valuable life skills, mentorship, and community service opportunities
- **For Seniors:** Share knowledge, combat loneliness, and build meaningful relationships

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the ISC License.
