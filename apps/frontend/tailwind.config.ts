import type { Config } from "tailwindcss";
import tailwindConfig from "@repo/ui/tailwind.config";
export default {
  ...tailwindConfig,
  theme: {
    ...tailwindConfig.theme,
    extend: {
      ...tailwindConfig.theme.extend,
      backgroundImage: {
        "hero-bg": "url('/bg.png')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
} satisfies Config;
