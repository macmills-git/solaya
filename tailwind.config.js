/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        solaya: {
          forest: {
            DEFAULT: '#183D32',
            50: '#F0F5F3',
            100: '#D9E6E1',
            200: '#B3CDC4',
            300: '#8DB4A6',
            400: '#4A7F6E',
            500: '#2A5A4A',
            600: '#183D32', // Primary
            700: '#133229',
            800: '#0E241E',
            900: '#081713',
          },
          sand: {
            DEFAULT: '#DCCBB0',
            50: '#FAF7F2',
            100: '#F4EFE6',
            200: '#E8DDCB',
            300: '#DCCBB0', // Secondary
            400: '#C9B18F',
            500: '#B4956D',
            600: '#957750',
          },
          ivory: {
            DEFAULT: '#F8F5EF',
            50: '#FFFFFF',
            100: '#FDFCFA',
            200: '#F8F5EF', // Base Canvas
            300: '#EDE7DC',
          },
          terracotta: {
            DEFAULT: '#B96F51',
            400: '#C98266',
            500: '#B96F51', // Accent
            600: '#A05C41',
            700: '#804630',
          },
          charcoal: {
            DEFAULT: '#343B32',
            100: '#737C71',
            200: '#5A6358',
            300: '#464E44',
            DEFAULT: '#343B32', // Dark text
            900: '#1F241E',
          },
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        arcilla: ['"SLTF Arcilla"', '"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        queens: ['"Queens"', '"Cinzel"', 'Baskerville', 'Didot', 'serif'],
        ambiant: ['"Ambiant Sans"', '"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'tightest': '-0.04em',
        'tighter': '-0.02em',
        'tight': '-0.01em',
        'normal': '0em',
        'wide': '0.04em',
        'wider': '0.08em',
        'widest': '0.14em',
        'monumental': '0.22em',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'luxury-slow': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(52, 59, 50, 0.04)',
        'elevation': '0 10px 30px rgba(24, 61, 50, 0.08)',
        'floating': '0 20px 48px rgba(24, 61, 50, 0.14)',
        'modal': '0 24px 64px rgba(0, 0, 0, 0.24)',
      },
    },
  },
  plugins: [],
}
