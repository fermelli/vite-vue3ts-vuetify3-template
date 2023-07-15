import { useStorage } from "@vueuse/core";
import { computed } from "vue";
import { useTheme } from "vuetify";
import { CustomThemesEnum } from "./custom-themes.enum";

const STORE_NAME = "app-theme";

export function useDataTheme() {
  const theme = useTheme();
  const isDarkTheme = computed(() => theme.global.current.value.dark);

  const currentNameTheme = useStorage(
    `${STORE_NAME}-current-theme`,
    isDarkTheme.value ? CustomThemesEnum.CustomLightTheme : CustomThemesEnum.CustomDarkTheme,
    localStorage,
    {
      mergeDefaults: true,
    },
  );

  return { isDarkTheme, currentNameTheme };
}
