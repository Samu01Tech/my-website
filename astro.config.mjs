import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import Icons from "unplugin-icons/vite";
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://astronaut.github.io',
  base: '/my-repo',
})

// https://astro.build/config
export default defineConfig({
  site: "https://samuelemazzei.me",
  integrations: [tailwind()],
  vite: {
    plugins: [
      Icons({
        compiler: "astro",
        iconCustomizer(collection, icon, props) {
          if (collection === "carbon") {
            props.width = "28px";
            props.height = "28px";
          }
        },
      }),
    ],
  },
});
