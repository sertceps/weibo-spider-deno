class Http {
  static http: Http;

  public static create() {
    if (!this.http) {
      this.http = new this();
    }

    return this.http;
  }

  async get<T>(url: string, bin = false): Promise<T> {
    return bin ? (await fetch(url)).arrayBuffer() : (await fetch(url)).json();
  }
}

export default Http.create();
