# LipSync Maker AI - Runway-Inspired Frontend

A sophisticated, modern landing page for LipSync Maker AI, inspired by Runway's clean and elegant design aesthetic.

## Features

- Dark theme with sophisticated gradients
- Responsive design for all screen sizes
- Modern component-based architecture
- Smooth animations and transitions
- Clean typography with Geist font family
- Production-ready Next.js 16 application

## Tech Stack

- Next.js 16
- React 19.2
- TypeScript
- Tailwind CSS v4
- shadcn/ui components

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

### Build

```bash
npm run build
```

### Deploy

This project is optimized for deployment on Vercel. Simply connect your GitHub repository to Vercel for automatic deployments.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles and Tailwind configuration
├── components/
│   ├── header.tsx          # Fixed navigation header
│   ├── hero-section.tsx    # Hero section with gradient background
│   ├── partnership-section.tsx  # Partner logos
│   ├── mission-section.tsx      # Mission statement
│   ├── features-grid.tsx        # Feature cards grid
│   ├── research-section.tsx     # Research overview
│   ├── cta-section.tsx          # Call-to-action section
│   ├── footer.tsx               # Footer with links
│   └── ui/                      # shadcn/ui components
└── public/                      # Static assets
```

## Customization

### Colors

The design uses a sophisticated dark theme with subtle gradients. You can customize colors in `app/globals.css` by modifying the CSS custom properties.

### Content

Update the content in each component file to match your specific needs. All text, images, and links can be easily modified.

### Fonts

The project uses Geist and Geist Mono fonts. You can change fonts in `app/layout.tsx`.

## License

MIT License
