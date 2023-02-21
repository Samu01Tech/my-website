import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import Icons from "unplugin-icons/vite";

// https://astro.build/config
export default defineConfig({
  // TODO: Change this when custom domain works
  site: "samu01tech.github.io",
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
