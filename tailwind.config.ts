import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./core/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "5rem",
        "2xl": "7rem",
      },
    },

    extend: {
      screens: {
        '3xl': '2560px', 
      },
      aspectRatio: {
        '3/2': '3 / 2',
        '32/10': '32 / 10',
        '2/1':'2 / 1',
        '9/16' : '9 / 16',
        '16/9' : '16/9'
      },

      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      fontWeight: {
        hairline: '100',
        thin: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      
      colors: {
        primary: {
          DEFAULT: "var(--ac-primary-700)",
          50: "var(--ac-primary-50)",
          100: "var(--ac-primary-100)",
          200: "var(--ac-primary-200)",
          300: "var(--ac-primary-300)",
          400: "var(--ac-primary-400)",
          500: "var(--ac-primary-500)",
          600: "var(--ac-primary-600)",
          700: "var(--ac-primary-700)",
          800: "var(--ac-primary-800)",
          900: "var(--ac-primary-900)",
          910: "var(--ac-primary-910)",
          925: "var(--ac-primary-925)",
          950: "var(--ac-primary-950)",
          975: "var(--ac-primary-975)",
        },
        secondary: {
          DEFAULT: "var(--ac-secondary-700)",
          50: "var(--ac-secondary-50)",
          100: "var(--ac-secondary-100)",
          200: "var(--ac-secondary-200)",
          300: "var(--ac-secondary-300)",
          400: "var(--ac-secondary-400)",
          500: "var(--ac-secondary-500)",
          600: "var(--ac-secondary-600)",
          700: "var(--ac-secondary-700)",
          800: "var(--ac-secondary-800)",
          850: "var(--ac-secondary-850)",
          900: "var(--ac-secondary-900)",
          950: "var(--ac-secondary-950)",
        },
        accent: {
          DEFAULT: "var(--ac-accent-700)",
          50: "var(--ac-accent-50)",
          100: "var(--ac-accent-100)",
          200: "var(--ac-accent-200)",
          300: "var(--ac-accent-300)",
          400: "var(--ac-accent-400)",
          500: "var(--ac-accent-500)",
          600: "var(--ac-accent-600)",
          700: "var(--ac-accent-700)",
          800: "var(--ac-accent-800)",
          900: "var(--ac-accent-900)",
          950: "var(--ac-accent-950)",
        },
        alternate: {
          DEFAULT: "var(--ac-alternate-700)",
          50: "var(--ac-alternate-50)",
          100: "var(--ac-alternate-100)",
          200: "var(--ac-alternate-200)",
          300: "var(--ac-alternate-300)",
          400: "var(--ac-alternate-400)",
          500: "var(--ac-alternate-500)",
          600: "var(--ac-alternate-600)",
          700: "var(--ac-alternate-700)",
          800: "var(--ac-alternate-800)",
          900: "var(--ac-alternate-900)",
          950: "var(--ac-alternate-950)",
        },
        neutral: {
          DEFAULT: "var(--ac-neutral-700)",
          50: "var(--ac-neutral-50)",
          100: "var(--ac-neutral-100)",
          200: "var(--ac-neutral-200)",
          300: "var(--ac-neutral-300)",
          400: "var(--ac-neutral-400)",
          500: "var(--ac-neutral-500)",
          600: "var(--ac-neutral-600)",
          700: "var(--ac-neutral-700)",
          800: "var(--ac-neutral-800)",
          900: "var(--ac-neutral-900)",
          950: "var(--ac-neutral-950)",
        },
        body: {
          DEFAULT: "var(--ac-body-700)",
          50: "var(--ac-body-50)",
          100: "var(--ac-body-100)",
          200: "var(--ac-body-200)",
          300: "var(--ac-body-300)",
          400: "var(--ac-body-400)",
          500: "var(--ac-body-500)",
          600: "var(--ac-body-600)",
          700: "var(--ac-body-700)",
          800: "var(--ac-body-800)",
          900: "var(--ac-body-900)",
          950: "var(--ac-body-950)",
        },
        success: {
          DEFAULT: "var(--ac-success-700)",
          50: "var(--ac-success-50)",
          100: "var(--ac-success-100)",
          200: "var(--ac-success-200)",
          300: "var(--ac-success-300)",
          400: "var(--ac-success-400)",
          500: "var(--ac-success-500)",
          600: "var(--ac-success-600)",
          700: "var(--ac-success-700)",
          800: "var(--ac-success-800)",
          900: "var(--ac-success-900)",
          950: "var(--ac-success-950)",
        },
        alert: {
          DEFAULT: "var(--ac-alert-700)",
          50: "var(--ac-alert-50)",
          100: "var(--ac-alert-100)",
          200: "var(--ac-alert-200)",
          300: "var(--ac-alert-300)",
          400: "var(--ac-alert-400)",
          500: "var(--ac-alert-500)",
          600: "var(--ac-alert-600)",
          700: "var(--ac-alert-700)",
          800: "var(--ac-alert-800)",
          900: "var(--ac-alert-900)",
          950: "var(--ac-alert-950)",
        },
        status: {
          DEFAULT: "#9a9a9a",
          fulfilled: "#0d9488",
          Fulfilled: "#0d9488",
          refunded: "#ab3b2a",
          Refunded: "#ab3b2a",
        },
      },
      animation: {
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slidedown 0.3s ease-in',
        'rolldown': 'rolldown 0.5s ease-in-out forwards',
        'rollup': 'rollup 0.5s ease-in-out forwards',
        'slide-to-up': 'slideToUp 20s linear infinite',
        'bottom-to-top': 'bottom-to-top 1.5s  ',
        'right-to-left': 'right-to-left 1.5s ease-out forwards',
        'thumbnailAnimation': 'thumbnailAnimation 0.5s ease-in',
        'thumbnailAnimation2': 'thumbnailAnimation2 0.5s ease-in',
        bounceX: 'bounceX 12s ease-in-out infinite',
        bounceY: 'bounceY 10s ease-in-out infinite',
        floatCrazy: 'floatCrazy 18s ease-in-out infinite',
        lowpulse:'lowpulse 1s infinite  ease-in-out',
        pop: 'pop 1.2s ease-in-out',

      },
      keyframes: {
        // slideUp: {
        //   '0%': {
        //     transform: 'translateY(100%)',
        //   },
        //   '100%': {
        //     transform: 'translateY(0)',
        //   },
        // },
        slidedown: {
          '0%': {
            transform: 'translateY(-100%)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        rolldown: {
          '0%': { maxHeight: '0', opacity: '1' },
          '100%': { maxHeight: '500px', opacity: '1' },
        },
        rollup: {
          '0%': { maxHeight: '500px', opacity: '1' },
          '100%': { maxHeight: '0', opacity: '1' },
        },
        // slideToUp : {
        //   '0%' : { transform : 'translateY(0%)' },
        //   '50%' : { transform : 'translateY(-100%)' },
        //   '100%' : { transform : 'translateY(0%)' }
        // },
           'bottom-to-top': {
          '0%': { transform: 'translateY(70px)', opacity: '0' },
          '100%': { transform: 'translateY(0px)', opacity: '1' },
        },
        'right-to-left': {
          '0%': { transform: 'translateX(70px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        thumbnailAnimation : {
          '0%': { opacity: '0', scale : '90%'},
          '100%': { opacity: '1' ,scale : '100%' },
        },
        thumbnailAnimation2 : {
          '0%': { transform: 'translateX(70px)', opacity: '0' },
          '100%': { transform: 'translateX(0px)', opacity: '1' },
        },
        // bounceX: {
        //   '0%, 100%': { transform: 'translateX(0)' },
        //   '50%': { transform: 'translateX(400px)' },
        // },
        // bounceY: {
        //   '0%, 100%': { transform: 'translateY(0)' },
        //   '50%': { transform: 'translateY(300px)' },
        // },
        // floatCrazy: {
        //   '0%, 100%': { transform: 'translate(0, 0)' },
        //   '25%': { transform: 'translate(300px, -200px)' },
        //   '50%': { transform: 'translate(-300px, 100px)' },
        //   '75%': { transform: 'translate(100px, -150px)' },
        // },


  pop: {
  '0%': { transform: 'scale(1)', opacity: '0.3' },
  '30%': { transform: 'scale(2)', opacity: '1' },
  '60%': { transform: 'scale(1)', opacity: '1' },
},

       lowpulse: {
    '50%': {
      transform: 'scale(1.05)',
      opacity: '0.7',
    },
  },
      },
      blur: {
        xs: '2px',
      }
    },
    
  },
  // safelist:[
  //   "grid-cols-3",
  //   "xl:grid-cols-3",
  //   "border-2",
  //   "border-neutral-600",
  //   "border-[1.4px]",
  //   "border-neutral-700"
  // ],
  plugins: [forms, typography],
} satisfies Config;
 
