# Akash Bhat - Portfolio

A stunning, interactive portfolio website showcasing cybersecurity expertise with 3D animations, glitch effects, and modern web technologies.

[![Portfolio](https://img.shields.io/badge/Portfolio-Live-blue?style=for-the-badge&link=https://akash-bhat.vercel.app)](https://akash-bhat.vercel.app)
![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Three.js](https://img.shields.io/badge/Three.js-WebGL-black?style=for-the-badge&logo=three.js)

## 🌟 Features

- **3D Hero Section** - Interactive Three.js scene with floating geometric shapes
- **Cyberpunk Aesthetic** - Glitch text effects, neon colors, terminal styling
- **Animated Sections** - Scroll-triggered animations with Framer Motion
- **Experience Timeline** - 3D cards with company metrics and achievements
- **Skills Visualization** - Floating orbs with constellation connections
- **Projects Showcase** - 3D card gallery with expandable details
- **Contact Form** - Functional form integrated with Formspree
- **Fully Responsive** - Optimized for desktop, tablet, and mobile

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **3D Graphics:** Three.js + React Three Fiber
- **Animations:** Framer Motion
- **Form Handling:** Formspree
- **Icons:** Lucide React

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/akashbhat14/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## 🔧 Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

**Note:** The `.env.local` file is already gitignored for security.

## 🎨 Customization

### Personal Information
Update your details in `app/lib/data.ts`:
- Name, title, contact info
- Work experience and achievements
- Skills and projects
- Education background

### Styling
Modify colors and theme in:
- `app/globals.css` - CSS variables and custom styles
- `tailwind.config.ts` - Tailwind configuration (if needed)

## 📱 Sections

1. **Hero** - 3D animated introduction with cyber theme
2. **About** - Bio with education and cyber-themed avatar
3. **Mission Log** - Experience timeline with 3D cards
4. **Security Arsenal** - Interactive skills visualization
5. **Operation Showcase** - Projects with detailed modals
6. **Secure Channel** - Contact form with Formspree integration

## 🚢 Deployment

### Vercel (Recommended)

**Live Site:** [https://akash-bhat.vercel.app](https://akash-bhat.vercel.app)

1. Push to GitHub
2. Connect to Vercel
3. Add environment variable in Vercel dashboard:
   - `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
4. Deploy

### Other Platforms

Build static files:
```bash
npm run build
```

The `dist/` folder contains production-ready static files.

## 📄 Resume

Replace `public/resume.pdf` with your actual resume PDF file.

## 🤝 Contact

- Email: akashbhat1402@gmail.com
- LinkedIn: https://linkedin.com/in/akashbhat14
- GitHub: https://github.com/AkashBhat14

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by Akash Bhat**
