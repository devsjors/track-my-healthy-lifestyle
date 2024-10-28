import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern: /(text|bg)-*/,
    },
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          ...colors.green,
          DEFAULT: colors.green[500],
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  corePlugins: {
    container: false, // Custom container styles can be found in app/assets/styles/_container.css
  },
  plugins: [],
};

export default config;
