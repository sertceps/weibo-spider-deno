class Http {
  static http: Http;
  constructor(private host?: string) {}

  public static create(host?: string) {
    if (!this.http) {
      this.http = new this(host);
    }

    return this.http;
  }

  async get<T>(url: string): Promise<T> {
    if (this.host) url += this.host;
    return (await fetch(url)).json();
  }
}

export default Http.create();
