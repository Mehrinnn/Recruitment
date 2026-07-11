# Event Management System (PERN Stack)

## Task Description

The objective of this task was to design a Figma wireframe and develop a full-stack management system using PostgreSQL, Express.js, React.js, and Node.js. The application manages events and allows users to perform CRUD operations through backend APIs.

## Implementation

### Frontend (React)

The frontend was developed using React and React Router.

Pages implemented:

* Home Page
* Events Page
* Add Event Page
* About Page

Features:

* Navigation bar for page routing
* Responsive user interface
* Event listing using dynamic API data
* Event creation through forms
* Event deletion functionality
* Modern glassmorphism-inspired design

### Backend (Node.js + Express.js)

The backend was developed using Express.js.

API Endpoints:

* GET /api/events → Retrieve all events
* POST /api/events → Create a new event
* DELETE /api/events/:id → Delete an event
* PUT /api/events/:id → Update an existing event

### Database (PostgreSQL)

A PostgreSQL database was used to store event information.

The events table stores:

* Event ID
* Title
* Description
* Event Date

### Frontend–Backend Communication

Axios was used to connect the React frontend with the Express backend. User actions trigger API requests which interact with the PostgreSQL database and update the UI dynamically.

## What I Learned

* Building REST APIs using Express.js
* Connecting React applications with backend services
* PostgreSQL database integration
* CRUD operations using SQL queries
* React state management using hooks
* React Router for multi-page navigation
* Full-stack application architecture
* Client-server communication using Axios

## Figma Wireframe

The Figma wireframe link is included in the repository.

## Workflow Diagram

![Workflow Diagram](workflow-diagram.jpeg)

## Database Schema

The database schema is provided in database_schema.sql.

## Screenshots

### Home Page

![Home Page](home-page.png)

### Events Page

![Events Page](events-page.png)

### Add Event Page

![Add Event Page](add-event-page.png)

### About Page

![About Page](about-page.png)

### Registrations

![registration](registration.png)
