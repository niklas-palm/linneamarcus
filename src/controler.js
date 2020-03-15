import axios from "axios";

export default class api {
  constructor() {
    this.url = "https://lwkbswc64c.execute-api.eu-west-1.amazonaws.com/Prod/";
    // this.url = "https://cgdz4u2x7e.execute-api.eu-west-1.amazonaws.com/Prod/"; // LIVE
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
