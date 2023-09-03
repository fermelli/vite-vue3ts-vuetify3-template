import { useTheme } from "vuetify";
import { useDataTheme } from "@/themes/use-data-theme";
import { onBeforeMount } from "vue";
import { updateGlobalOptions } from "vue3-toastify";
import { vueToastifyDefaultConfig } from "../config/vue-toastify-default-config";

export function useSetTheme() {
  const theme = useTheme();
  const { currentNameTheme } = useDataTheme();

  onBeforeMount(() => {
    theme.global.name.value = currentNameTheme.value;

    updateGlobalOptions(vueToastifyDefaultConfig(currentNameTheme.value));
  });
}
