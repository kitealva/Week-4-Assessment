const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const {getCompliment, getGirls, addGirl, deleteGirl, editGirl} = require('./controller')

app.get("/api/compliment", getCompliment)
app.get("/api/girls", getGirls)
app.post("/api/addGirl", addGirl)
app.delete("/api/deleteGirl/:id", deleteGirl)
app.put("/api/editGirl/:id", editGirl)

app.listen(4000, () => console.log("Server running on 4000"))