import store from "../store";

class $http {
  BASE_URL = "https://api.github.com";
  CONFIG = {};
  HEADERS = new Headers();

  headers() {
    // if needed to append more headers
    // headers.append(KEY, VALUE) or headers[KEY] = VALUE
    this.HEADERS.append("Accept", "application/json");

    return headers;
  }

  async request({ method = "GET", headers = this.HEADERS, url, body }) {
    if (!url) throw new Error("The `URL` is required");

    const HAS_PROTOCOL = !!url.match(/http(?:s)?:/gm);
    const URL = HAS_PROTOCOL ? url : this.BASE_URL + url;

    this.CONFIG = {
      method,
      headers,
    };

    if (body)
      this.CONFIG = {
        ...this.CONFIG,
        body: JSON.stringify(body),
      };

    return await fetch(URL, this.CONFIG);
  }

  async data(response) {
    const data = await response.json();
    const code = response.status;
    const status = response.ok;

    return {
      data,
      status,
      code,
    };
  }

  async get(url) {
    const response = await this.request({ url });
    return await this.data(response);
  }

  async post(url, payload) {
    const response = await this.request({
      method: "POST",
      url: url,
      body: payload,
    });

    return await this.data(response);
  }

  async patch(url, payload) {
    const response = await this.request({
      method: "PATCH",
      url: url,
      body: payload,
    });

    return await this.data(response);
  }

  async put(url, payload) {
    const response = await this.request({
      method: "PUT",
      url: url,
      body: payload,
    });

    return await this.data(response);
  }
}

export default new $http();
