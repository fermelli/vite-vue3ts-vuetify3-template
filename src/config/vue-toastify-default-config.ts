import { ToastContainerOptions, toast } from "vue3-toastify";
import { CustomThemesEnum } from "../themes/custom-themes.enum";

export const vueToastifyDefaultConfig = (currentNameTheme: string): ToastContainerOptions => {
  return {
    autoClose: 3000,
    position: toast.POSITION.BOTTOM_RIGHT,
    theme: currentNameTheme === CustomThemesEnum.CustomDarkTheme ? "dark" : "light",
  };
};
