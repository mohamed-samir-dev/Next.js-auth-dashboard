# Next.js Authentication Dashboard

🌐 **[Live Demo](https://next-js-auth-dashboard.vercel.app/)**

A modern, secure authentication dashboard built with Next.js 16, React 19, TypeScript, and Tailwind CSS. Features a complete authentication flow with email verification, responsive design, and optimized performance.

## 🚀 Features

- **Complete Authentication System**
  - User registration with email verification
  - Secure login/logout functionality
  - JWT token-based authentication
  - Protected dashboard routes

- **Modern UI/UX**
  - Responsive design for all devices
  - Loading skeletons for better UX
  - Clean, professional interface
  - Tailwind CSS styling

- **Performance Optimized**
  - Next.js 16 with App Router
  - Image optimization with WebP/AVIF support
  - Package import optimization
  - Comprehensive caching strategies

## 📋 Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager
- Modern web browser

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Next.js-auth-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)



## 🔧 Configuration

### Next.js Configuration (`next.config.ts`)

- **Image Optimization**: WebP/AVIF formats, responsive sizes
- **Security Headers**: XSS protection, frame options, content security
- **Performance**: Compression, ETags, package optimization
- **Caching**: Static assets and API route caching

### Tailwind Configuration (`tailwind.config.js`)

- Custom breakpoints for responsive design
- Extended theme configuration
- Optimized for component-based architecture

## 🚦 Usage

### Authentication Flow

1. **Registration**
   - Navigate to `/auth/register`
   - Fill in required fields (name, email, username, password, phone)
   - Submit form to receive verification email
   - Redirected to verification page


2. **Login**
   - Navigate to `/auth/login`
   - Enter email/username and password
   - Successful login redirects to dashboard

3. **Dashboard Access**
   - Protected route requiring authentication
   - Displays user information and navigation
   - Logout functionality available

## 🎨 Styling

The project uses Tailwind CSS with:
- Responsive design patterns
- Custom color schemes
- Loading skeleton animations
- Modern UI components
- Accessibility-compliant styling

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: Custom responsive breakpoints
- **Touch Friendly**: Appropriate touch targets
- **Performance**: Optimized for all screen sizes

## 🔒 Security

- JWT token authentication
- Secure HTTP headers
- XSS protection
- CSRF protection
- Input validation and sanitization

## 🚀 Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deployment Platforms

- **Vercel** 

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request


**Built with ❤️ using Next.js, React, TypeScript, and Tailwind CSS**