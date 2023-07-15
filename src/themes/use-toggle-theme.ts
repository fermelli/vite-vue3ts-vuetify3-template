import { useTheme } from "vuetify";
import { CustomThemesEnum } from "./custom-themes.enum";
import { computed } from "vue";
import { useDataTheme } from "./use-data-theme";

export function useToggleTheme() {
  const theme = useTheme();
  const { isDarkTheme, currentNameTheme } = useDataTheme();

  const iconChangeTheme = computed(() => (isDarkTheme.value ? "mdi-weather-sunny" : "mdi-weather-night"));

  const toggleTheme = () => {
    theme.global.name.value = isDarkTheme.value ? CustomThemesEnum.CustomLightTheme : CustomThemesEnum.CustomDarkTheme;

    currentNameTheme.value = theme.global.name.value;
  };

  return { toggleTheme, iconChangeTheme };
}
