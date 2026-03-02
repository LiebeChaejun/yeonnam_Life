/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "var(--bg)",
          card: "var(--bg-card)",
          warm: "var(--bg-warm)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          light: "var(--accent-light)",
          warm: "var(--accent-warm)",
        },
        border: "var(--border)",
        // 카테고리 컬러
        cafe: "var(--cafe)",
        restaurant: "var(--restaurant)",
        bakery: "var(--bakery)",
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
        sm: "var(--radius-sm)",
        full: "var(--radius-full)",
      },
      boxShadow: {
        DEFAULT: "0 2px 8px var(--shadow)",
        md: "0 4px 16px var(--shadow-md)",
      },
    },
  },
  plugins: [],
};
