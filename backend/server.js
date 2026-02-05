const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("E-Ticketing Backend is running 🚀");
});

const read = f => JSON.parse(fs.readFileSync(f));
const write = (f, d) => fs.writeFileSync(f, JSON.stringify(d, null, 2));

app.post("/register", (req, res) => {
  const users = read("users.json");
  const exists = users.find(u => u.username === req.body.username);
  if (exists) return res.status(400).json({ msg: "User exists" });

  users.push(req.body);
  write("users.json", users);
  res.json({ msg: "Registered" });
});

app.post("/login", (req, res) => {
  const users = read("users.json");
  const user = users.find(
    u =>
      u.username === req.body.username &&
      u.password === req.body.password &&
      u.role === req.body.role
  );
  if (!user) return res.status(401).json({ msg: "Invalid login" });
  res.json(user);
});

app.get("/events", (req, res) => {
  res.json(read("events.json"));
});

app.post("/addevent", (req, res) => {
  const events = read("events.json");
  events.push(req.body);
  write("events.json", events);
  res.json({ msg: "Event added" });
});

app.post("/book", (req, res) => {
  const tickets = read("tickets.json");
  tickets.push(req.body);
  write("tickets.json", tickets);
  res.json({ msg: "Booked" });
});

app.get("/tickets/:user", (req, res) => {
  const tickets = read("tickets.json");
  res.json(tickets.filter(t => t.user === req.params.user));
});

app.listen(3000, () =>
  console.log("E-Ticketing Backend is running 🚀")
);
