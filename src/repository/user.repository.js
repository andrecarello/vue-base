import Store from "../store";
import Router from "../router";
import $http from "../http/http";

class UserRepository {
  BASE_URL = "https://api.github.com";

  async get({ username }) {
    const { data, code, status } = await $http.get("/users/" + username);
    if (!status) return $toast("error", data.message);

    await Store.dispatch("UserStore/setUser", data);
  }
}

export default new UserRepository();
