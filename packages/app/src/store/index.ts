import Vue from "vue";
import Vuex, { createLogger } from "vuex";
import { getModule } from "vuex-module-decorators";
import AppModule from "./modules/app";

Vue.use(Vuex);

interface Modules {
  app: AppModule;
}

const store = new Vuex.Store<Modules>({
  strict: true,
  modules: {
    app: AppModule,
  },
  plugins: [createLogger()],
});

export default store;
export const AppStore = getModule(AppModule, store);
