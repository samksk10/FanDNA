# FanDNA - Your Bundesliga Identity 🧬⚽

A modern, AI-powered web application that analyzes football fans and generates personalized Bundesliga identities inspired by Spotify Wrapped.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- AWS Account (for production deployment)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd fandna

# Install dependencies
npm install

# Setup environment variables (optional for development)
cp .env.example .env.local

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the application.

## 📋 Features

### 🎯 Core Functionality
- **Fan Questionnaire**: Beautiful multi-step form collecting fan preferences
- **AI Analysis**: Uses Amazon Bedrock to generate personalized insights
- **Identity Reveal**: Premium card showing your unique football personality
- **Wrapped Experience**: Spotify Wrapped-style vertical storytelling
- **Share Cards**: Shareable identity cards for social media

### 🎨 Design
- **Cinematic Dark Theme**: Black and dark blue primary colors
- **Neon Gradients**: Electric cyan and purple accents
- **Glassmorphism**: Modern frosted glass UI elements
- **Smooth Animations**: Framer Motion for cinematic transitions
- **Mobile-First**: Fully responsive design

### 🤖 AI Integration Ready
- **Amazon Bedrock**: LLM-powered narrative generation
- **DynamoDB**: Fan profile persistence
- **AWS Lambda**: Optional serverless processing
- **AWS Amplify**: Ready for deployment

## 📁 Project Structure

```
fandna/
├── app/
│   ├── page.tsx                 # Landing page
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles
│   ├── journey/                 # Questionnaire page
│   ├── analyzing/               # AI analysis loading page
│   ├── result/                  # Identity reveal page
│   ├── wrapped/                 # Wrapped experience page
│   ├── share/                   # Share card page
│   └── api/                     # API routes
│       ├── analyze/             # Analysis endpoint
│       └── profile/             # Profile management
├── components/
│   ├── Navbar.tsx               # Navigation bar
│   ├── Hero.tsx                 # Hero section
│   ├── AnimatedBackground.tsx   # Animated particles & gradients
│   ├── ProgressBar.tsx          # Question progress indicator
│   ├── QuestionCard.tsx         # Question display component
│   ├── AIAnalyzer.tsx           # Loading animation
│   ├── IdentityCard.tsx         # Identity display card
│   ├── WrappedSlide.tsx         # Wrapped story slide
│   ├── ShareCard.tsx            # Shareable identity card
│   └── Footer.tsx               # Footer component
├── lib/
│   ├── aws.ts                   # AWS configuration
│   ├── bedrock.ts               # Bedrock AI integration
│   ├── dynamodb.ts              # DynamoDB integration
│   └── utils.ts                 # Utility functions
├── types/
│   └── index.ts                 # TypeScript type definitions
├── data/
│   └── mock.ts                  # Mock data & questionnaire
├── styles/
│   └── (in app/globals.css)     # Tailwind + custom CSS
├── package.json                 # Dependencies
├── tsconfig.json                # TypeScript config
├── tailwind.config.ts           # Tailwind CSS config
└── next.config.ts               # Next.js config
```

## 🛠️ Tech Stack

### Frontend
- **Next.js 15**: React framework with App Router
- **React 19**: UI library
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library

### Backend
- **Next.js API Routes**: Serverless functions
- **AWS SDK v3**: AWS service integration

### AWS Services (Production Ready)
- **Amazon Bedrock**: AI text generation
- **DynamoDB**: NoSQL database for profiles
- **AWS Lambda**: Optional serverless compute
- **AWS Amplify**: Deployment & hosting

### Build & Deploy
- **Vercel/Netlify**: Recommended for Quick Start
- **AWS Amplify**: Native AWS deployment option

## 🔧 Configuration

### Environment Variables

For development, the app works with defaults. For AWS integration:

```bash
# AWS Configuration
NEXT_PUBLIC_AWS_REGION=eu-west-1
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key

# DynamoDB
DYNAMODB_TABLE_NAME=FanDNA-Profiles

# Bedrock
BEDROCK_MODEL_ID=anthropic.claude-3-sonnet-20240229-v1:0

# Cognito (optional)
NEXT_PUBLIC_COGNITO_USER_POOL_ID=your_pool_id
NEXT_PUBLIC_COGNITO_CLIENT_ID=your_client_id
```

## 🚀 Deployment

### Quick Deploy (Vercel)

```bash
npm install -g vercel
vercel
```

### AWS Amplify Deployment

```bash
npm install -g @aws-amplify/cli
amplify init
amplify add hosting
amplify publish
```

### Docker Deployment

```bash
docker build -t fandna .
docker run -p 3000:3000 fandna
```

## 📊 API Endpoints

### POST `/api/analyze`
Analyzes fan questionnaire answers

**Request:**
```json
{
  "answers": {
    "club": "Bayern Munich",
    "player": "Serge Gnabry",
    "emotion": "Explosive Celebration",
    "style": "Attacking & Fast-Paced"
  }
}
```

**Response:**
```json
{
  "success": true,
  "identity": {
    "title": "The Emotional Strategist",
    "personalityTraits": ["Analytical", "Passionate"],
    "emotionalProfile": { "passion": 85, ... },
    "aiNarrative": "Your journey is one of calculated passion...",
    "percentile": 92
  }
}
```

### POST `/api/profile/save`
Saves fan profile to DynamoDB

### GET `/api/profile/[id]`
Retrieves fan profile by ID

## 🎨 Customization

### Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  'neon-cyan': '#00D9FF',
  'neon-purple': '#A855F7',
  'dark-bg': '#0F0F1F',
  'dark-card': '#1A1A2E',
}
```

### Questions
Edit `data/mock.ts` to modify questionnaire questions and options.

### Identities
Add more identity types in `mockIdentities` array in `data/mock.ts`.

## 📝 Component Usage Examples

### Using IdentityCard
```tsx
import IdentityCard from '@/components/IdentityCard';

<IdentityCard identity={fanIdentity} />
```

### Using WrappedSlide
```tsx
import WrappedSlide from '@/components/WrappedSlide';

<WrappedSlide 
  story={wrappedStory}
  isActive={true}
  index={0}
/>
```

### Using ShareCard
```tsx
import ShareCard from '@/components/ShareCard';

<ShareCard
  username="Bundesliga Fan"
  identity="The Emotional Strategist"
  trait="Analytical"
/>
```

## 🔐 Security

- ✅ HTTPS only (enforced in production)
- ✅ CORS configured
- ✅ Environment variables protected
- ✅ No sensitive data in client code
- ✅ Rate limiting ready (add middleware)
- ✅ Input validation on all endpoints

## 📈 Performance

- ⚡ Optimized images with Next.js Image
- 🎯 Code splitting with dynamic imports
- 📦 Tree-shaking enabled
- 🔄 Incremental Static Regeneration (ISR)
- 📱 Mobile-optimized loading

## 🧪 Development

### Run Development Server
```bash
npm run dev
```

### Build Production
```bash
npm run build
npm start
```

### Type Check
```bash
npm run type-check
```

### Lint Code
```bash
npm run lint
```

## 🗂️ Adding New Features

### New Page
1. Create file in `app/[page]/page.tsx`
2. Import components and data
3. Add navigation link in Navbar

### New Component
1. Create file in `components/[Component].tsx`
2. Use 'use client' directive
3. Add Framer Motion animations
4. Export as default

### New API Endpoint
1. Create route in `app/api/[route]/route.ts`
2. Import AWS services from `lib/`
3. Add error handling
4. Return JSON response

## 🐛 Troubleshooting

### Issue: Animations not working
- Ensure Framer Motion is installed: `npm install framer-motion`
- Check that components use `'use client'` directive

### Issue: AWS integration fails
- Verify credentials in environment variables
- Check AWS IAM permissions
- Ensure table exists in DynamoDB

### Issue: Styling looks wrong
- Run `npm install` to ensure Tailwind is updated
- Clear `.next` folder: `rm -rf .next`
- Rebuild: `npm run build`

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [AWS SDK Docs](https://docs.aws.amazon.com/sdk-for-javascript/)
- [Amazon Bedrock Docs](https://docs.aws.amazon.com/bedrock/)

## 🤝 Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature/your-feature`
5. Open Pull Request

## 📄 License

MIT License - see LICENSE file for details

## 🙏 Credits

- Inspired by Spotify Wrapped
- Bundesliga data & references
- Open source communities

## 📞 Support

For issues, questions, or suggestions:
- Open an GitHub issue
- Check existing documentation
- Review troubleshooting section

## 🚀 Future Enhancements

- [ ] Real Bedrock AI integration
- [ ] User authentication with Cognito
- [ ] Social login (Google, Discord)
- [ ] Statistics dashboard
- [ ] Leaderboards
- [ ] Community features
- [ ] Mobile app (React Native)
- [ ] Multi-language support
- [ ] Real-time match updates
- [ ] Fantasy league integration

---

**Made with ⚽ and 🤖 by FanDNA Team**

*Discover your unique Bundesliga identity today!*
