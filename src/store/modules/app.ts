import { Module, VuexModule } from "vuex-module-decorators";

@Module({ name: "app", namespaced: true })
export default class AppModule extends VuexModule {}
