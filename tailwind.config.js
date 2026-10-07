export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a5f4a',
        'primary-dark': '#0f3d2f',
        'primary-light': '#2d8b6f',
        dark: '#1a1a1a',
        light: '#f5f5f0'
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Instrument Sans', 'system-ui', 'sans-serif'],
        logo: ['Antonio', 'Impact', 'sans-serif']
      },
      fontSize: {
        'h1': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h2': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h3': ['1.875rem', { lineHeight: '1.3' }],
        'h4': ['1.5rem', { lineHeight: '1.4' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'small': ['0.875rem', { lineHeight: '1.5' }]
      },
      spacing: {
        'section': '80px',
        'section-md': '60px',
        'section-sm': '40px'
      },
      borderRadius: {
        'lg': '16px',
        'xl': '20px'
      }
    }
  },
  plugins: []
}
