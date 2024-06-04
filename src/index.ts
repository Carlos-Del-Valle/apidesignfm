import * as dotenv from "dotenv";
dotenv.config();

//const app = require("./server");
import app from "./server";

app.listen(3001, () => {
  console.log("hello on http://localhost:3001");
});
