# FanDNA Setup & Deployment Guide

## 📋 Table of Contents
1. [Local Development Setup](#local-development-setup)
2. [AWS Configuration](#aws-configuration)
3. [Deployment Options](#deployment-options)
4. [Production Checklist](#production-checklist)
5. [Troubleshooting](#troubleshooting)

## Local Development Setup

### Step 1: Prerequisites
Ensure you have installed:
- Node.js 18+ (https://nodejs.org/)
- npm 9+ or yarn 3+
- Git (https://git-scm.com/)

Verify installations:
```bash
node --version    # Should be v18 or higher
npm --version     # Should be 9 or higher
git --version     # Any recent version
```

### Step 2: Clone & Install

```bash
# Navigate to your workspace
cd c:\Users\INFO CICAF\Documents\codes\aws

# Install dependencies
npm install

# This installs:
# - Next.js 15
# - React 19
# - Tailwind CSS
# - Framer Motion
# - AWS SDK v3
# - And other dependencies
```

Expected installation time: 2-5 minutes

### Step 3: Start Development Server

```bash
npm run dev
```

Output should show:
```
- ready started server on 0.0.0.0:3000, url: http://localhost:3000
```

Open http://localhost:3000 in your browser. You should see:
- ⚽ FanDNA landing page
- Animated background with particles
- Navigation bar and hero section

### Step 4: Verify Pages

Navigate through the application:
- `/` - Landing page ✓
- `/journey` - Questionnaire page ✓
- `/analyzing` - AI analysis loading (auto-redirects)
- `/result` - Identity reveal page ✓
- `/wrapped` - Wrapped experience ✓
- `/share` - Share card page ✓

## AWS Configuration

### For Development (Optional)
The app works without AWS in development using mock data.

### For Production Integration

#### Step 1: Create AWS Account
1. Go to https://aws.amazon.com/
2. Click "Create an AWS Account"
3. Follow the registration process
4. Verify via email

#### Step 2: Set Up IAM User

```bash
# AWS CLI Installation (Optional but recommended)
# Visit: https://aws.amazon.com/cli/

# Or use AWS Management Console:
# 1. Go to IAM > Users > Create User
# 2. Set username: "fandna-app"
# 3. Attach policies:
#    - AmazonBedrockFullAccess
#    - AmazonDynamoDBFullAccess
#    - AWSLambdaFullAccess
# 4. Create access key
```

#### Step 3: Configure DynamoDB

```bash
# In AWS Management Console:
# 1. Go to DynamoDB > Tables > Create table
# 2. Table name: "FanDNA-Profiles"
# 3. Partition key: "userId" (String)
# 4. Sort key: "createdAt" (Number)
# 5. On-demand billing mode
# 6. Create table

# Note: Wait for table to be ACTIVE (usually 30 seconds)
```

#### Step 4: Enable Bedrock

```bash
# In AWS Management Console:
# 1. Go to Amazon Bedrock
# 2. Click "Get started"
# 3. Go to Model access
# 4. Request access to:
#    - Claude 3 Sonnet
#    - Claude 3 Haiku
# 5. Accept terms and submit request
# 6. Access usually granted within minutes
```

#### Step 5: Set Environment Variables

Create `.env.local` file:

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
# AWS Settings
NEXT_PUBLIC_AWS_REGION=eu-west-1
AWS_ACCESS_KEY_ID=your_access_key_here
AWS_SECRET_ACCESS_KEY=your_secret_key_here

# DynamoDB
DYNAMODB_TABLE_NAME=FanDNA-Profiles

# Bedrock
BEDROCK_MODEL_ID=anthropic.claude-3-sonnet-20240229-v1:0
```

Get credentials:
1. AWS Console > IAM > Users > Your User > Security Credentials
2. Copy Access Key ID and Secret Access Key
3. Paste into `.env.local`

**IMPORTANT**: Never commit `.env.local` to git!

#### Step 6: Test AWS Connection

```bash
# Create test file: test-aws.js
node -e "console.log('AWS Region:', process.env.NEXT_PUBLIC_AWS_REGION)"

# Or add to scripts in package.json and run
npm run test:aws
```

## Deployment Options

### Option 1: Vercel (Recommended - Easiest)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts:
# 1. Confirm project name
# 2. Link to GitHub (optional)
# 3. Set environment variables in Vercel dashboard
# 4. Deploy
```

Set environment variables in Vercel:
1. Go to project settings
2. Go to Environment Variables
3. Add each variable from `.env.example`

### Option 2: AWS Amplify

```bash
# Install Amplify CLI
npm i -g @aws-amplify/cli

# Configure
amplify configure

# Initialize Amplify in project
amplify init
# - Project name: fandna
# - Environment: dev
# - Default editor: none
# - App type: javascript
# - Framework: next

# Add hosting
amplify add hosting
# - Select "Hosting with Amplify Console"
# - Select "Manual deployment"

# Deploy
amplify publish
```

Your app will be live at an Amplify URL.

### Option 3: Docker Deployment

```bash
# Create Dockerfile (if not exists)
cat > Dockerfile << 'EOF'
FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
EOF

# Build image
docker build -t fandna:latest .

# Run container
docker run -p 3000:3000 fandna:latest

# Push to Docker Hub
docker tag fandna:latest your-username/fandna:latest
docker push your-username/fandna:latest
```

### Option 4: Manual Server (Node.js)

```bash
# On your server (Ubuntu/Debian):

# 1. Install dependencies
sudo apt update && sudo apt install -y nodejs npm

# 2. Clone repository
git clone <your-repo> /var/www/fandna
cd /var/www/fandna

# 3. Install npm packages
npm install

# 4. Build
npm run build

# 5. Install PM2 for process management
sudo npm i -g pm2

# 6. Start application
pm2 start npm --name fandna -- start

# 7. Setup reverse proxy with Nginx
# Configure Nginx to proxy requests to localhost:3000

# 8. Setup SSL with Let's Encrypt
sudo apt install certbot python3-certbot-nginx
```

## Production Checklist

- [ ] **Environment Variables**
  - [ ] All `.env` variables set
  - [ ] No sensitive data in code
  - [ ] `.env.local` in `.gitignore`

- [ ] **AWS Services**
  - [ ] DynamoDB table created and active
  - [ ] Bedrock model access granted
  - [ ] IAM permissions configured correctly
  - [ ] CloudFront CDN setup (optional)

- [ ] **Security**
  - [ ] HTTPS enforced
  - [ ] CORS configured
  - [ ] Rate limiting enabled
  - [ ] Input validation on all APIs
  - [ ] No hardcoded credentials

- [ ] **Performance**
  - [ ] Build time < 5 minutes
  - [ ] Lighthouse score > 80
  - [ ] Images optimized
  - [ ] Database indexes created

- [ ] **Monitoring**
  - [ ] CloudWatch logs enabled
  - [ ] Error tracking setup (Sentry, etc.)
  - [ ] Analytics configured
  - [ ] Uptime monitoring

- [ ] **Testing**
  - [ ] Manual testing of all pages
  - [ ] Mobile responsiveness checked
  - [ ] API endpoints tested
  - [ ] AWS integration tested

- [ ] **Documentation**
  - [ ] README updated
  - [ ] API documentation complete
  - [ ] Environment variables documented
  - [ ] Deployment steps recorded

## Troubleshooting

### Issue: `npm install` fails

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and lock file
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Issue: Port 3000 already in use

**Solution:**
```bash
# On Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# On Mac/Linux:
lsof -i :3000
kill -9 <PID>

# Or use different port:
npm run dev -- -p 3001
```

### Issue: AWS credentials not found

**Solution:**
```bash
# Check .env.local exists
ls -la .env.local

# Verify variables are set
echo $AWS_ACCESS_KEY_ID
echo $AWS_SECRET_ACCESS_KEY

# For Windows:
set | findstr AWS
```

### Issue: DynamoDB connection fails

**Solution:**
1. Verify table name in `.env.local`
2. Check IAM permissions for DynamoDBFullAccess
3. Verify table status is ACTIVE
4. Check region matches environment variable

### Issue: Bedrock API errors

**Solution:**
1. Verify model access is granted
2. Check region supports Bedrock (us-east-1, us-west-2, eu-west-1)
3. Verify IAM policy includes `bedrock:InvokeModel`
4. Check model ID matches available models

### Issue: Build fails with TypeScript errors

**Solution:**
```bash
# Check for TypeScript errors
npm run type-check

# Fix common issues:
npm run lint -- --fix

# Rebuild
npm run build
```

### Issue: Animations not smooth

**Solution:**
- Update Framer Motion: `npm install framer-motion@latest`
- Check GPU acceleration enabled in browser
- Reduce number of animated elements
- Profile performance in DevTools

### Issue: Styling looks broken

**Solution:**
```bash
# Rebuild Tailwind CSS
npm run build

# Clear cache
rm -rf .next

# Verify tailwind config
cat tailwind.config.ts

# Reinstall dependencies
npm install
```

## Support & Resources

- **Documentation**: See README.md
- **AWS Docs**: https://docs.aws.amazon.com/
- **Next.js Help**: https://nextjs.org/docs
- **Issues**: Check GitHub Issues
- **Community**: Discord/GitHub Discussions

## Performance Tips

1. **Database Optimization**
   - Add indexes to frequently queried fields
   - Use DynamoDB on-demand for variable workload
   - Enable DynamoDB auto-scaling for production

2. **API Optimization**
   - Add caching headers
   - Implement pagination
   - Use compression middleware

3. **Frontend Optimization**
   - Use `next/Image` for all images
   - Implement lazy loading
   - Split large components

4. **Monitoring**
   - Set up CloudWatch alarms
   - Monitor API latency
   - Track database performance

---

**Next Steps After Deployment:**
1. Test all features in production
2. Share with beta testers
3. Collect feedback
4. Monitor performance metrics
5. Plan feature enhancements

Happy deploying! ⚽🚀
