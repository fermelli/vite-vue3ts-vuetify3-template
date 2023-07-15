import { useTheme } from "vuetify";
import { useDataTheme } from "@/themes/use-data-theme";
import { onBeforeMount } from "vue";

export function useSetTheme() {
  const theme = useTheme();
  const { currentNameTheme } = useDataTheme();

  onBeforeMount(() => {
    theme.global.name.value = currentNameTheme.value;
  });
}
