const API = "http://localhost:5000";

/* REGISTER */
function register() {
  fetch(API + "/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: u.value,
      password: p.value
    })
  }).then(() => alert("Registered Successfully"));
}

/* LOGIN */
function login() {
  fetch(API + "/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: u.value,
      password: p.value
    })
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      localStorage.setItem("user", u.value);
      location.href = "events.html";
    } else {
      alert("Invalid credentials");
    }
  });
}

/* LOAD EVENTS */
function loadEvents() {
  fetch(API + "/events")
    .then(res => res.json())
    .then(events => {
      const box = document.getElementById("events");
      if (!box) return;

      box.innerHTML = "";
      events.forEach(e => {
        let img = "images/concert.jpg";
        if (e.name.toLowerCase().includes("movie")) img = "images/movie.jpg";
        if (e.name.toLowerCase().includes("sport")) img = "images/sports.jpg";

        const div = document.createElement("div");
        div.className = "card event";
        div.innerHTML = `
          <img src="${img}">
          <h3>${e.name}</h3>
          <p>Date: ${e.date}</p>
          <p>Price: ₹${e.price}</p>
          <button onclick="book('${e.name}','${e.date}',${e.price})">
            Book Ticket
          </button>
        `;
        box.appendChild(div);
      });
    });
}

/* BOOK TICKET */
function book(name, date, price) {
  fetch(API + "/book", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      user: localStorage.getItem("user"),
      event: name,
      date: date,
      price: price
    })
  })
  .then(res => res.json())
  .then(ticket => {
    localStorage.setItem("ticket", JSON.stringify(ticket));
    location.href = "ticket.html";
  });
}

/* SHOW TICKET */
function showTicket() {
  const t = document.getElementById("ticket");
  if (!t) return;
  const ticket = JSON.parse(localStorage.getItem("ticket"));
  t.textContent = JSON.stringify(ticket, null, 2);
}

loadEvents();
showTicket();
