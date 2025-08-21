# St Panteleimon Mission School Website

A React-based website for St Panteleimon Mission School, a nonprofit organization supporting orphans and vulnerable children in Korogocho, Nairobi, Kenya.

## Overview

The website showcases the mission's work in providing education, nutrition, and support to children. It includes information about feeding programs, educational initiatives, and donation capabilities.

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: Bun/npm

## Project Structure

```
src/
├── components/
│   ├── About.tsx              # Mission and vision section
│   ├── Donate.tsx             # Donation methods and payment info
│   ├── EducationProgram.tsx   # Education initiatives
│   ├── FeedingProgram.tsx     # Feeding program details
│   ├── Footer.tsx             # Contact info and links
│   ├── Hero.tsx               # Landing section
│   ├── Map.tsx                # Location and directions
│   ├── Navigation.tsx         # Main navigation
│   └── ui/                    # Shadcn/ui components
├── pages/
│   ├── Index.tsx              # Main page layout
│   └── NotFound.tsx           # 404 page
├── assets/                    # Images and media
├── hooks/                     # Custom React hooks
└── lib/                       # Utility functions
```

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/ST-Panteleimon/st-panteleimon-school
   cd st-panteleimon-school
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   bun dev
   ```

4. **Build for production**
   ```bash
   npm run build
   # or
   bun run build
   ```

## Payment Methods Supported

- PayPal donations
- World Remit transfers
- Bank transfers (KCB Bank)
- Direct email contact for other arrangements

## Contact Information

- **Phone**: +254724046338
- **Email**: opadayiraf@gmail.com
- **Location**: Korogocho, Nairobi, Kenya
- **Parent Organization**: panteleimon.co.ke


## License

This project serves a nonprofit organization supporting vulnerable children in Kenya.