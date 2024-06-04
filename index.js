const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "/public/JS")));
app.use(express.static(path.join(__dirname, "/public/CSS")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
	res.render("home.ejs");
});

app.get("/hello", (req, res) => {
	res.send("hello page");
});
app.get("/diceroll", (req, res) => {
	let diceVal = Math.floor(Math.random() * 6) + 1;
	res.render("diceroll.ejs", { diceVal });
});
app.get("/ig/:username", (req, res) => {
	let { username } = req.params;
	const instaData = require("./data.json");
	const data = instaData[username];
	res.render("instagram.ejs", { data });
});
app.get("*", (req, res) => {
	res.send("<h1>No such account</h1>");
});
app.listen(8080, () => {
	console.log("app listening on port ", 8080);
});
