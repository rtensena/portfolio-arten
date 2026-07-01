module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'surface': '#0f131c',
        'surface-container-lowest': '#0a0e17',
        'error-container': '#93000a',
        'secondary-fixed': '#e9ddff',
        'on-error': '#690005',
        'on-tertiary': '#00363e',
        'surface-container-low': '#181b25',
        'on-tertiary-fixed': '#001f25',
        'tertiary-container': '#008395',
        'on-error-container': '#ffdad6',
        'outline-variant': '#464554',
        'on-tertiary-fixed-variant': '#004e5a',
        'primary': '#c0c1ff',
        'inverse-on-surface': '#2c303a',
        'primary-fixed-dim': '#c0c1ff',
        'secondary': '#d0bcff',
        'tertiary-fixed': '#a2eeff',
        'on-secondary-fixed-variant': '#5516be',
        'error': '#ffb4ab',
        'secondary-container': '#571bc1',
        'secondary-fixed-dim': '#d0bcff',
        'on-tertiary-container': '#000608',
        'on-surface-variant': '#c7c4d7',
        'surface-container-highest': '#31353f',
        'surface-container-high': '#262a34',
        'inverse-surface': '#dfe2ef',
        'tertiary': '#2fd9f4',
        'surface-bright': '#353943',
        'on-primary-fixed': '#07006c',
        'primary-container': '#8083ff',
        'primary-fixed': '#e1e0ff',
        'on-secondary': '#3c0091',
        'on-background': '#dfe2ef',
        'tertiary-fixed-dim': '#2fd9f4',
        'surface-container': '#1c1f29',
        'inverse-primary': '#494bd6',
        'on-primary': '#1000a9',
        'background': '#0f131c',
        'on-primary-fixed-variant': '#2f2ebe',
        'on-secondary-fixed': '#23005c',
        'surface-dim': '#0f131c',
        'on-secondary-container': '#c4abff',
        'surface-variant': '#31353f',
        'surface-tint': '#c0c1ff',
        'on-primary-container': '#0d0096',
        'outline': '#908fa0',
        'on-surface': '#dfe2ef'
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px'
      },
      spacing: {
        gutter: '24px',
        'section-gap': '120px',
        unit: '8px',
        'margin-mobile': '20px',
        'container-max': '1200px'
      },
      fontFamily: {
        'headline-lg-mobile': ['Space Grotesk'],
        'headline-xl': ['Space Grotesk'],
        'headline-lg': ['Space Grotesk'],
        'headline-md': ['Space Grotesk'],
        'label-mono': ['JetBrains Mono'],
        'body-lg': ['Inter'],
        'body-md': ['Inter'],
        caption: ['Inter']
      },
      fontSize: {
        'headline-lg-mobile': ['32px', {
          lineHeight: '1.2',
          fontWeight: '600'
        }],
        'headline-xl': ['64px', {
          lineHeight: '1.1',
          letterSpacing: '-0.02em',
          fontWeight: '700'
        }],
        'headline-lg': ['48px', {
          lineHeight: '1.2',
          letterSpacing: '-0.01em',
          fontWeight: '600'
        }],
        'headline-md': ['24px', {
          lineHeight: '1.4',
          fontWeight: '500'
        }],
        'label-mono': ['14px', {
          lineHeight: '1.2',
          letterSpacing: '0.05em',
          fontWeight: '500'
        }],
        'body-lg': ['18px', {
          lineHeight: '1.6',
          fontWeight: '400'
        }],
        'body-md': ['16px', {
          lineHeight: '1.6',
          fontWeight: '400'
        }],
        caption: ['12px', {
          lineHeight: '1.4',
          fontWeight: '400'
        }]
      }
    }
  },
  plugins: []
}
