const express = require("express");
const data = require("../data/phones.json");

const app = express();

app.get("/phones", (request, response, next) => {
  response.header("Content-Type", "application/json");
  response.send(JSON.stringify(data));
});

app.get("/phones/:id", (request, response, next) => {
  const { id } = request.params;
  let phone;
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      phone = data[i];
    }
  }
  response.header("Content-Type", "application/json");
  response.send(JSON.stringify(phone));
});

app.listen(3000, () => console.log("Server running"));
