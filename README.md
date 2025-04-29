# Coachable

A modern coaching platform built with Next.js and Express.

## Project Structure

This monorepo includes the following applications:

### Apps

- `web`: A [Next.js](https://nextjs.org/) frontend application
- `api`: An Express.js backend API

### Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript, TailwindCSS
- **Backend**: Express.js, TypeScript, Prisma ORM
- **Testing**: Jest, React Testing Library
- **CI/CD**: GitHub Actions
- **Deployment**: PM2

## Getting Started

### Prerequisites

- Node.js 18.x
- npm
- PostgreSQL

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Keirnal10/Coachable.git
cd Coachable
```

2. Install dependencies:
```bash
npm install
cd apps/api && npm install
cd ../web && npm install
```

3. Set up environment variables:
- Copy `.env.example` to `.env` in both `apps/api` and `apps/web`
- Update the variables with your configuration

4. Initialize the database:
```bash
cd apps/api
npx prisma migrate dev
```

### Development

To start the development servers:

1. Start the API:
```bash
cd apps/api
npm run dev
```

2. Start the Web app:
```bash
cd apps/web
npm run dev
```

### Testing

Run tests for both applications:

```bash
# API tests
cd apps/api
npm test

# Web tests
cd apps/web
npm test
```

### Building for Production

```bash
# Build API
cd apps/api
npm run build

# Build Web
cd apps/web
npm run build
```

## Contributing

We use Git Flow for our development workflow:

1. Create a feature branch from `develop`:
```bash
git checkout develop
git checkout -b feature/your-feature-name
```

2. Make your changes and commit them:
```bash
git add .
git commit -m "feat: your changes"
```

3. Push your branch and create a Pull Request to `develop`

4. After review and approval, your changes will be merged into `develop`

5. When ready for release, create a release branch from `develop` and merge to `main`

## License

This project is licensed under the MIT License.
