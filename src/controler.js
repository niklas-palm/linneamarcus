import axios from "axios";

export default class api {
  constructor() {
    this.url = "https://693l86ks4d.execute-api.eu-west-1.amazonaws.com/Prod/";
  }

  async post(body) {
    try {
      const response = await axios.post(this.url, JSON.stringify(body));
      return response;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async get(email) {
    try {
      const response = await axios.get(`${this.url}?email=${email}`);
      return response;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}
