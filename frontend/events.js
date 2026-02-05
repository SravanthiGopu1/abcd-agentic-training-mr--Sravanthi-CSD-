fetch("http://localhost:3000/events")
.then(r=>r.json())
.then(events=>{
events.forEach(e=>{
eventsDiv.innerHTML+=`
<div class="event-card">
<img src="${e.image}">
<h3>${e.name}</h3>
<p>${e.date}</p>
<p>${e.location}</p>
<p class="price">₹ ${e.price}</p>
<button onclick="book('${e.name}')">Book Ticket</button>
</div>`;
});
});

const eventsDiv=document.getElementById("events");

function book(name){
const user=JSON.parse(localStorage.getItem("user"));
fetch("http://localhost:3000/book",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({user:user.username,event:name,ticketId:"TKT"+Date.now()})
}).then(()=>alert("Ticket booked"));
}
