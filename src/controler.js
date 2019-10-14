import axios from "axios";

export default class api {
  constructor() {
    this.url =
      "https://1y6t9lzjwa.execute-api.eu-west-1.amazonaws.com/dev/read-write-to-dynamo";
    this.param = {
      TableName: "guests",
      Item: {
        phone: "123123",
        guest: "marcus",
        "+1": "Kevin"
      }
    };
  }

  async post(body) {
    try {
      const response = await axios.post(this.url, JSON.stringify(this.param));
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
}
