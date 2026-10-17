import type { Config } from "postcss-load-config";

export const postcssConfig = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
} satisfies Config;
