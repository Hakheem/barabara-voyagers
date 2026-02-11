# Barabara Voyagers - Luxury Safari Travel Website

A luxury travel website built with Next.js 16 and WordPress as a headless CMS. Inspired by Micato's elegant design with custom content from Barabara Voyagers.

## Features

-  **Luxury Safari Packages** - Browse and book exclusive safari experiences
-  **Travel Journal** - Read inspiring safari stories and travel tips
-  **Photo Gallery** - Stunning safari photography galleries
-  **Client Reviews** - Authentic testimonials from travelers
-  **Luxury Design** - Elegant Micato-inspired aesthetic with Merriweather typography
-  **Flyout Menus** - Sophisticated navigation with dropdown menus
-  **Fully Responsive** - Perfect on all devices
-  **Optimized Performance** - ISR with 1-hour revalidation
-  **Admin Dashboard** - Complete content management system
-  **WordPress CMS** - Powerful headless CMS backend

## Design System

### Typography
- **Headings**: Merriweather (Serif) - Luxury, elegant feel
- **Body**: Lato (Sans-serif) - Clean, readable
- **Colors**: Warm amber tones (#78350f - #f59e0b) for luxury safari aesthetic

### Navigation
- Sticky header with flyout menus
- Top bar with contact information
- Mobile-responsive hamburger menu

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **CMS**: WordPress (Headless)
- **Language**: TypeScript
- **Icons**: Lucide React
- **HTTP Client**: Axios
- **Fonts**: Google Fonts (Merriweather, Lato)

## Getting Started

### Prerequisites

- Node.js 18+
- WordPress installation with REST API enabled
- npm or yarn

### Installation

1. Clone and install:
```bash
git clone <repository-url>
cd barabaravoyagers-sys
npm install
```

2. Configure environment:
```bash
cp .env.local.example .env.local
```

3. Update `.env.local`:
```env
NEXT_PUBLIC_WORDPRESS_URL=https://your-wordpress-site.com
WORDPRESS_API_URL=https://your-wordpress-site.com/wp-json/wp/v2
WORDPRESS_USERNAME=your-username
WORDPRESS_APP_PASSWORD=your-app-password
```

4. Run development server:
```bash
npm run dev
```

5. Open http://localhost:3000



## Key Pages

### Public Pages
- `/` - Homepage with hero, featured packages, testimonials
- `/destinations` - All safari packages
- `/destinations/[slug]` - Package details with itinerary
- `/gallery` - Photo gallery albums
- `/journal` - Travel blog
- `/about` - Company information
- `/contact` - Inquiry form
- `/testimonials` - Client reviews

### Admin Dashboard (`/admin`)
- Dashboard overview
- Package management
- Blog post management
- Gallery management
- Testimonial management
- Settings

## Adding Your Logo

1. Add your logo files to `/public/images/`:
   - `logo.png` or `logo.svg` - Main logo
   - `logo-white.png` - White version for dark backgrounds

2. Update `LuxuryHeader.tsx`:
```tsx
<Image
  src="/images/logo.png"
  alt="Barabara Voyagers"
  width={200}
  height={50}
  priority
/>
```

## Image Placeholders

Current placeholders use Unsplash URLs. Replace with:
1. Your own safari photographs
2. Stock images from paid services
3. Client-provided photography

Update image URLs in:
- Hero sections: `app/page.tsx`, `app/destinations/page.tsx`, etc.
- Package cards: WordPress featured images
- Gallery: WordPress gallery albums

## Customization

### Colors
Update in `app/globals.css`:
```css
@theme inline {
  --color-amber-900: #78350f;  /* Dark brown */
  --color-amber-800: #92400e;  /* Medium brown */
  /* etc */
}
```

### Fonts
Change in `app/layout.tsx`:
```tsx
const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  // ...
});
```

### Navigation
Update flyout menus in `components/layout/LuxuryHeader.tsx`

## WordPress Content Types

- **Packages** (`packages`) - Safari travel packages
- **Posts** (`posts`) - Blog articles
- **Gallery Albums** (`gallery_albums`) - Photo collections
- **Testimonials** (`testimonials`) - Client reviews
- **Pages** (`pages`) - Static pages

## Performance

- **ISR**: 1-hour revalidation for dynamic content
- **Image Optimization**: Next.js automatic optimization
- **Code Splitting**: Automatic route-based splitting
- **Caching**: WordPress content cached on CDN


## Development Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```






