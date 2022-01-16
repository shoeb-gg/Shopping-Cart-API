const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
const Products = require("./models/dbSchema");
const bodyParser = require("body-parser");
const cors = require("cors");
const jsonData = require("./all.json");

app.use(
  bodyParser.json(),
  cors({
    origin: "*",
  })
);

app.get("/", async (req, res) => {
  const prod = await Products.find();
  res.send(prod);
});

/*
app.post("/", async (req, res) => {
  const gg = jsonData.map(async (jinish) => {
    const product = new Products({
      title: jinish.Title,
      price: jinish.Price,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      imageLink: jinish.imgLink,
    });
    const savingTime = await product.save();
    console.log("done", jinish.id);
  });
});
*/
mongoose.connect(process.env.DB_Link, () => console.log("Hoise"));

app.listen(process.env.PORT || 4000);
