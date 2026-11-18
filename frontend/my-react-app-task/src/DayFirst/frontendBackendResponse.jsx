// Day 1 – Backend Fundamentals, Web & API Basics
// Topics

// Frontend vs Backend responsibilities




// Client–Server architecture
// How the web works: DNS → HTTP → Response
// HTTP methods and status codes
// REST API fundamentals
// API versioning basics
// HTTPS importance and backend trust boundaries

// Hands-on

// Inspect API calls in browser DevTools
// Call public APIs using Postman

// Outcome

// Clear understanding of how requests reach backend and return responses



// ----------------------------------------------------------------------------

// Day 1 Backend Fundamentals, In Depth
// 1. Frontend vs Backend

// Frontend is everything that runs in the user’s browser or device: HTML, CSS, JavaScript, React. Its job is to present information and capture user actions (clicks, form input).

// Backend is the code running on a server you control. Its job is to:

// Store and retrieve data from a database
// Enforce business rules (e.g., “a user can’t withdraw more than their balance”)
// Handle authentication and authorization (who are you, and what are you allowed to do?)
// Talk to other services (payment gateways, email providers)

// Example: On a shopping site, the frontend shows the “Place Order” button. When clicked, the backend checks stock, verifies the price, charges the card, saves the order, and replies “success”.

// Key idea: The frontend can be modified by anyone (users can edit JS in DevTools), so it can never be the only place where rules are enforced. The backend is the source of truth.

// 2. Client-Server Architecture
// Client: anything that initiates a request (browser, mobile app, Postman, another server).
// Server: a program that listens for requests and sends back responses.

// The communication is request-response: the client asks, the server answers, and the server doesn’t contact the client on its own (WebSockets are the exception, but that’s later).

// Every request has:

// A URL (where to go)
// A method (what to do)
// Headers (metadata such as content type and auth token)
// An optional body (data being sent)

// Every response has:

// A status code (what happened)
// Headers
// A body (usually JSON or HTML)

// Statelessness: HTTP servers don’t remember previous requests. That’s why each request must carry what the server needs to identify you (a token or cookie).

// 3. How the Web Works: DNS → HTTP → Response

// When you type https://example.com/users:

// DNS lookup: The browser asks a DNS server to translate example.com into an IP address like 93.184.216.34. (Browsers and OSes cache this.)
// TCP connection: The browser opens a connection to that IP (port 443 for HTTPS, 80 for HTTP).
// TLS handshake (HTTPS only): Both sides agree on encryption keys, and the browser verifies the server’s certificate.
// HTTP request: The browser sends something like:
// GET /users HTTP/1.1
// Host: example.com
// Accept: application/json
// Server processing: The server routes the request to the right code, which may query a database, then builds a response.
// HTTP response:
// HTTP/1.1 200 OK
// Content-Type: application/json

// [{"id": 1, "name": "Asha"}]
// Browser renders the result, possibly making more requests for images, scripts, and API data.

// Why this matters: When something breaks, you can ask where. DNS failure? Connection refused? Server error? Wrong response format? This mental model is your debugging map.

// 4. HTTP Methods
// Method	Purpose	Has body?	Safe?	Idempotent?
// GET	Read data	No	Yes	Yes
// POST	Create a new resource / trigger an action	Yes	No	No
// PUT	Replace a resource entirely	Yes	No	Yes
// PATCH	Partially update a resource	Yes	No	Usually no
// DELETE	Remove a resource	Usually no	No	Yes
// Safe means it doesn’t change server state. GET should never modify data.
// Idempotent means repeating the same request gives the same end result. Calling DELETE /users/5 ten times leaves the same state as calling it once. Calling POST /orders ten times creates ten orders. This matters for retries and network failures.

// PUT vs PATCH: PUT /users/5 with {name: "Asha"} replaces the whole user record (other fields may be wiped). PATCH /users/5 with {name: "Asha"} changes only the name.

// 5. Status Codes

// Status codes are grouped by first digit:

// 2xx Success
// 200 OK: request succeeded, response has data
// 201 Created: a new resource was created (typical for POST)
// 204 No Content: succeeded, nothing to return (typical for DELETE)
// 3xx Redirection
// 301 Moved Permanently, 304 Not Modified (use your cached copy)
// 4xx Client error (the caller did something wrong)
// 400 Bad Request: malformed or invalid input
// 401 Unauthorized: not authenticated (no or invalid credentials)
// 403 Forbidden: authenticated but not allowed
// 404 Not Found: resource doesn’t exist
// 409 Conflict: e.g., email already registered
// 429 Too Many Requests: rate limited
// 5xx Server error (your backend failed)
// 500 Internal Server Error: unhandled bug
// 502/503: upstream or overloaded service

// Common confusion: 401 means “I don’t know who you are.” 403 means “I know who you are, but you can’t do this.”

// Best practice: Return the correct code. Returning 200 with {"error": "not found"} breaks clients and monitoring tools.

// 6. REST API Fundamentals

// REST is a style for designing APIs around resources (nouns), manipulated using HTTP methods (verbs).

// GET    /users          → list users
// GET    /users/5        → get user 5
// POST   /users          → create a user
// PUT    /users/5        → replace user 5
// PATCH  /users/5        → update part of user 5
// DELETE /users/5        → delete user 5
// GET    /users/5/orders → orders belonging to user 5

// Core principles:

// Resource-based URLs: use nouns (/users), not verbs (/getUsers, /deleteUser).
// Plural names are the common convention.
// Stateless: each request contains everything needed to process it.
// Uniform interface: the same predictable patterns across the whole API.
// Standard formats: usually JSON, with correct Content-Type headers.
// Filtering, sorting, pagination via query params: /users?role=admin&sort=name&page=2&limit=20.

// Why it matters: A well-designed REST API is guessable. A new developer can predict endpoints without reading the docs.

// 7. API Versioning Basics

// Once clients (mobile apps, other teams) depend on your API, changing it can break them. You can’t force everyone to update instantly, especially with mobile apps already installed on phones.

// Breaking changes include removing a field, renaming a field, changing a type, or changing behavior. Non-breaking changes include adding a new optional field or a new endpoint.

// Versioning approaches:

// URL path (most common): /api/v1/users, /api/v2/users
// Header: Accept: application/vnd.myapp.v2+json
// Query param: /users?version=2

// Typical flow: Release v2 with the change, keep v1 running for a deprecation period, notify clients, then retire v1.

// Rule of thumb: Prefer additive changes so you don’t need a new version at all.

// 8. HTTPS and Backend Trust Boundaries
// HTTPS

// HTTPS is HTTP over TLS. It provides:

// Encryption: nobody on the network (public Wi-Fi, ISP) can read the data
// Integrity: data can’t be silently modified in transit
// Authentication: the certificate proves you’re talking to the real server, not an impostor

// Without HTTPS, passwords, tokens, and personal data travel in plain text. Modern browsers also flag HTTP sites as “Not secure”.

// Trust boundaries

// A trust boundary is the line where data moves from an untrusted source to your trusted system. Everything from the client is untrusted: body, query params, headers, cookies, even hidden form fields. HTTPS protects the journey, but it doesn’t tell you the data is valid or honest. A malicious user can send perfectly encrypted garbage.

// What this means in practice:

// Validate input: check types, lengths, formats, allowed values.
// Never trust client-calculated values: if the client sends {"price": 1}, look up the real price from your database.
// Enforce authorization on the backend: hiding the “Delete” button in React isn’t security, because anyone can call the endpoint directly.
// Sanitize and parameterize database queries to prevent SQL injection.
// Don’t leak internals: return generic errors, not stack traces.

// Mindset: “The frontend is a convenience; the backend is the gatekeeper.”
