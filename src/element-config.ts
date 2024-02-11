import i18n from "@/i18n";
import { Button, DatePicker } from "element-ui";
import elementLocale from "element-ui/lib/locale";
import { VueConstructor } from "vue";

const components = [Button, DatePicker];

export default {
  install(Vue: VueConstructor): void {
    elementLocale.i18n((key: string, value: string) => i18n.t(key, value));
    components.forEach((component) => Vue.use(component));
  },
};
