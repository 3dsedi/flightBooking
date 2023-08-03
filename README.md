# flightBooking

## Description

Flight Booking Application
This is a simple flight booking application with both backend and frontend components.
The backend is built using Node.js and TypeScript, while the frontend is developed using React, TypeScript,
and Bootstrap. Please note that this application does not have a database and instead uses a file with fake data 
for flights.

## Features
Search for flights between two locations
Check for direct flights and, if not available, suggest connection flights
Filter flights based on date and seat availability
Backend Setup
To run the backend, you need to compile it first using the following command:

## Installation

1. Clone the repository:
 ```bash
git clone https://github.com/3dsedi/flightBooking
cd flightBooking
```
2. Backend Setup:
```bash
cd server
npx tsc 
npm start
```
The backend will be accessible at http://localhost:8000/.

3.Frontend Setup:
```bash
cd client
npm run start
```
The frontend will be accessible at http://localhost:3000/.

   

 ## How to Use
Open the frontend application in your browser.
Choose the departure and arrival locations from the available options.
Optionally, you can select the date for your flight.
Click on the "Search" button to find available flights.
The application will display direct flights if available; otherwise, it will suggest connection flights.
You can see the flight details such as flight number, departure time, and arrival time.
Please note that this is a simple demonstration application and does not have real-time data or actual
flight booking capabilities. It is intended for educational purposes only.

The frontend is designed using Bootstrap, giving it a responsive and visually appealing layout.

Feel free to explore the application and experiment with different search criteria.

Enjoy your virtual flight booking experience! 🛫
