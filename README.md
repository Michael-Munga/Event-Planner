Event Planner

#Overview

Event Planner is a simple web-based application where users can browse events, filter them by category, and register for available events. It uses HTML, CSS, and JavaScript for interactivity.

    #Features

View a list of events from a mock database (db.json)

Filter events by category

Register for available events

Display "Sold Out" status when tickets are unavailable

    #Technologies Used

HTML, CSS, JavaScript

JSON Server (for mock data)

Setup Instructions

Prerequisites

Install Node.js

Install JSON Server:

npm install -g json-server

     #Running the Project

Clone the repository:

git clone https://github.com/Michael-Munga/Event-Planner.git

Navigate into the project directory:

cd Event-Planner

Start the JSON server:

json-server --watch db.json --port 3000

Open index.html in a browser.

    #Future Improvements

User authentication for event registration
Admin functionality to manage events
