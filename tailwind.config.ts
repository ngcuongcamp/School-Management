module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "lamaPurple": "#cfceff",
        "lamaYellow": "#fae27c",
        "lamaSky": "#c3ebf3",
        "lamaSkyLight": "#edf9fd",
        "lamaPurpleLight": "#f1f0ff",
        "lamaYellowLight": "#fefce8"
      }
    },
  },
  plugins: [],
};
