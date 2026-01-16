# Next.js + PostgreSQL + Prisma + Tailwind CSS

A modern full-stack application built with the latest technologies.

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **PostgreSQL** - Relational database
- **Prisma** - Modern ORM
- **Tailwind CSS** - Utility-first CSS framework

## Project Structure

```
├── app/              # Next.js app directory
├── components/       # React components
├── lib/             # Library code (Prisma client, etc.)
├── types/           # TypeScript type definitions
├── hooks/           # Custom React hooks
├── utils/           # Utility functions
├── actions/         # Server actions
├── middleware/      # Middleware functions
└── prisma/          # Prisma schema and migrations
```

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Database

Copy `.env.example` to `.env` and update your PostgreSQL connection string:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/database_name?schema=public"
```

### 3. Run Prisma Migrations

```bash
npx prisma migrate dev --name init
```

### 4. Generate Prisma Client

```bash
npx prisma generate
```

### 5. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npx prisma studio` - Open Prisma Studio (database GUI)
- `npx prisma migrate dev` - Create and apply migrations

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
