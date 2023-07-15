import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import customLightTheme from "@/themes/custom-light.theme";
import customDarkTheme from "@/themes/custom-dark.theme";
import { CustomThemesEnum } from "@/themes/custom-themes.enum";

const vuetify = createVuetify({
  theme: {
    defaultTheme: CustomThemesEnum.CustomLightTheme,
    themes: {
      customLightTheme,
      customDarkTheme,
    },
  },
});

export default vuetify;
