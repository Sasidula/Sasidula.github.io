# Developer Portfolio

Personal portfolio website for showcasing projects, skills, GitHub activity, and development journey.

Built with a modern React frontend and deployed on GitHub Pages, with GitHub statistics served through a private Cloudflare Worker API.

## Highlights

- Personal developer portfolio
- Project showcase
- Live GitHub statistics
- Repository analytics
- Skills and technology overview
- Responsive layout
- Fast static deployment

## Sections

The site includes:

- Hero
- About
- Projects
- GitHub
- Interests
- Contact

## GitHub Integration

GitHub data is fetched from a custom Cloudflare Worker instead of calling the GitHub API directly from the browser.

This keeps the API token private and supports:

- Repository statistics
- Star and fork counts
- Programming language breakdown
- Featured repositories
- Profile information

Architecture:

```text
Portfolio Frontend
        |
        v
Cloudflare Worker API
        |
        v
GitHub API
```

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- React Query
- Tailwind CSS

### API

- Cloudflare Workers
- TypeScript
- GitHub REST API

### Deployment

- GitHub Pages for the frontend
- Cloudflare Workers for the GitHub stats API

## Local Development

Clone the repository:

```bash
git clone https://github.com/Sasidula/portfolio.git
```

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Environment Variables

Create a `.env` file if you want to point the frontend at a different Worker URL:

```env
VITE_GITHUB_WORKER_URL=https://your-worker.workers.dev
```

Do not commit environment files:

```text
.env
.env.*
```

## Deployment

The frontend is deployed to GitHub Pages.

Build the app:

```bash
npm run build
```

Deploy the generated `dist` directory.

## Project Structure

```text
src/
├── components/
├── pages/
├── hooks/
├── services/
│   └── github.ts
├── assets/
└── main.tsx
```

## License

MIT License
