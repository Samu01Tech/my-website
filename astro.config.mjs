import UnoCSS from "@unocss/astro";
import { presetWind } from "@unocss/preset-wind";
import { presetIcons } from "@unocss/preset-icons";
import { presetTypography } from "@unocss/preset-typography";

// https://astro.build/config
export default {
  integrations: [
    UnoCSS({
      presets: [presetWind(), presetIcons(), presetTypography()],
    }),
  ],
};
