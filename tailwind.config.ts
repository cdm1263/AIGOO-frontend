import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        warning: {
          DEFAULT: "var(--color-warning-default)",
          background: "var(--color-warning-background)",
          sub: "var(--color-warning-sub)",
          disabled: "var(--color-warning-disabled)",
        },
        critical: {
          DEFAULT: "var(--color-critical-default)",
          background: "var(--color-critical-background)",
          sub: "var(--color-critical-sub)",
          disabled: "var(--color-critical-disabled)",
        },
        success: {
          DEFAULT: "var(--color-success-default)",
          background: "var(--color-success-background)",
          sub: "var(--color-success-sub)",
          disabled: "var(--color-success-disabled)",
        },
        information: {
          DEFAULT: "var(--color-information-default)",
          background: "var(--color-information-background)",
          sub: "var(--color-information-sub)",
          disabled: "var(--color-information-disabled)",
        },
        white: "var(--color-white)",
        text: {
          DEFAULT: "var(--color-text-default)",
          info: "var(--color-text-info)",
          sub: "var(--color-text-sub)",
          disabled: "var(--color-text-disabled)",
        },
        gray: {
          1: "var(--color-gray-1)",
          2: "var(--color-gray-2)",
          3: "var(--color-gray-3)",
          4: "var(--color-gray-4)",
          5: "var(--color-gray-5)",
          6: "var(--color-gray-6)",
          7: "var(--color-gray-7)",
          8: "var(--color-gray-8)",
          9: "var(--color-gray-9)",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          1: "#FFF9F0",
          2: "#FFE7DF",
          3: "#FFC5BD",
          4: "#FFB4AD",
          5: "#FFA29C",
          6: "#FF7F7B",
          7: "#FC5B5C",
          8: "#C31F2D",
          9: "#9E000A",
          10: "#790000",
          main: "#C31F2D",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          1: "#EBE7E4",
          2: "#F1EDEA",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "black-30": "rgba(0, 0, 0, 0.3)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
