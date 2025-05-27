console.log("Welcome to the Community Portal");
window.onload = () => alert("Page is fully loaded!");

// Sample Data
const events = [
  { name: "Music Fest", date: "2025-07-01", category: "Music", seats: 10 },
  { name: "Yoga Class", date: "2025-06-15", category: "Workshop", seats: 0 },
  { name: "Baking Workshop", date: "2025-08-01", category: "Workshop", seats: 5 },
];

// Utility Functions
function isUpcoming(event) {
  const today = new Date().toISOString().split('T')[0];
  return event.date > today && event.seats > 0;
}

function renderEvents(eventList) {
  const container = document.getElementById("events");
  container.innerHTML = "";
  eventList.forEach(e => {
    const card = document.createElement("div");
    card.className = "event-card";
    card.innerHTML = `
      <h4>${e.name}</h4>
      <p>Date: ${e.date}</p>
      <p>Category: ${e.category}</p>
      <p>Seats: ${e.seats}</p>
      <button onclick="register(${events.indexOf(e)})">Register</button>
    `;
    container.appendChild(card);
    $(card).fadeIn();
  });
}

function filterEventsByCategory(category) {
  const filtered = category
    ? events.filter(e => e.category === category && isUpcoming(e))
    : events.filter(isUpcoming);
  renderEvents(filtered);
}

// Register Logic with Error Handling
function register(index) {
  try {
    if (events[index].seats <= 0) throw new Error("No seats left");
    events[index].seats--;
    alert(`Registered for ${events[index].name}`);
    renderEvents(events.filter(isUpcoming));
  } catch (err) {
    alert(err.message);
  }
}

// Form Handling
document.getElementById("regForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const { name, email, eventSelect } = e.target.elements;

  if (!name.value || !email.value) return alert("Please fill out all fields");

  document.getElementById("loading").style.display = "block";

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        event: eventSelect.value,
      }),
      headers: { "Content-Type": "application/json" },
    });

    const result = await res.json();
    setTimeout(() => {
      alert("Registration successful!");
      document.getElementById("loading").style.display = "none";
    }, 1000);
  } catch (error) {
    alert("Failed to register!");
  }
});

// Category Filter
document.getElementById("categoryFilter").onchange = function (e) {
  filterEventsByCategory(e.target.value);
};

// Search by Keydown
document.getElementById("searchInput").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const keyword = e.target.value.toLowerCase();
    const filtered = events.filter(ev => ev.name.toLowerCase().includes(keyword) && isUpcoming(ev));
    renderEvents(filtered);
  }
});

// Initial Setup
document.addEventListener("DOMContentLoaded", () => {
  // Populate form event options
  const select = document.querySelector("select[name='eventSelect']");
  events.filter(isUpcoming).forEach(ev => {
    const opt = document.createElement("option");
    opt.value = ev.name;
    opt.textContent = ev.name;
    select.appendChild(opt);
  });

  filterEventsByCategory(""); // Show all upcoming events
});

// jQuery Example
$('#registerBtn').click(() => console.log("jQuery: Register button clicked"));
