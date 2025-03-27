const BASE_URL = "http://localhost:3000";

// Function to fetch events and display them
function fetchAllEvents() {
  fetch(`${BASE_URL}/events`)
    .then((response) => response.json())
    .then((events) => displayEvents(events));
}

// Function to display events
function displayEvents(events) {
  const eventList = document.getElementById("event-list");
  eventList.innerHTML = ""; // Clear previous events

  events.forEach((event) => {
    const eventCard = document.createElement("div");
    eventCard.classList.add("event-card");
    const isSoldOut = event.tickets === 0;

    eventCard.innerHTML = `
            <img src="${event.image}" alt="${event.name}">
            <h2>${event.name}</h2>
            <p>${event.description}</p>
            <p><strong>Venue:</strong> ${event.venue}</p>
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Tickets Available:</strong> ${event.tickets}</p>
            <button class="${isSoldOut ? "sold-out" : "register"}"
                    ${
                      isSoldOut
                        ? "disabled"
                        : `onclick="openRegistrationForm(${event.id}, '${event.name}')"`
                    }>
                ${isSoldOut ? "Sold Out" : "Register"}
            </button>
        `;

    eventList.appendChild(eventCard);
  });
}

fetchAllEvents();
// Function to filter events by category
function filterEvents() {
  const selectedCategory = document.getElementById("categoryFilter").value;

  fetch(`${BASE_URL}/events`)
    .then((response) => response.json())
    .then((events) => {
      const filteredEvents =
        selectedCategory === "all"
          ? events
          : events.filter(
              (event) =>
                event.category.toLowerCase() === selectedCategory.toLowerCase()
            );

      displayEvents(filteredEvents);
    });
}

// Event listener
document
  .getElementById("categoryFilter")
  .addEventListener("change", filterEvents);
