const user=JSON.parse(localStorage.getItem("user"));
fetch("http://localhost:3000/tickets/"+user.username)
.then(r=>r.json())
.then(t=>{
t.forEach(x=>{
tickets.innerHTML+=`
<div class="event-card">
<h3>${x.event}</h3>
<p>${x.ticketId}</p>
<a href="ticket.html?id=${x.ticketId}">
<button>Download</button></a>
</div>`;
});
});
const tickets=document.getElementById("tickets");
