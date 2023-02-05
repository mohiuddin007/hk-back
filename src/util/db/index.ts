const mongoose = require("mongoose");

export default class DbConnection {
  constructor(url: string | undefined) {
    console.log(url);
    try {
      mongoose
        .connect(url, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })
        .then(() => console.log("mongodb connection established. 📡"));
    } catch (error) {
      console.log({ DbConnection: error });
    }
  }
}