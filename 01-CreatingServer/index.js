/*
  Import the Express framework.
  Express is a minimal web framework for Node.js used to build servers and APIs.
*/
import express from "express";

/*
  Create an Express application instance.
  This 'app' object is used to configure routes, middleware, and server behavior.
*/
const app = express();

/*
  Define the port number where the server will listen for incoming requests.
  3000 is a common default for development servers.
*/
const PORT = 3000;

/*
  Define a route for the root URL ("/").
  - app.get() means this route responds to HTTP GET requests.
  - req (request): contains information about the incoming request.
  - res (response): used to send data back to the client.
*/
app.get("/", (req, res) => {
  /*
    Send a simple text response back to the client (browser).
    When someone visits http://localhost:3000/, they will see this message.
  */
  res.send("Hello from Express Server!");
});

/*
  Start the server and make it listen on the specified PORT.
  The callback function runs once the server is successfully started.
*/
app.listen(PORT, () => {
  /*
    Log a message to the console so you know the server is running.
    Note: There's a small typo in "htttps" (extra 't') — you might want to fix it.
  */
  console.log(`Server is running on https://localhost:${PORT}`);
});

/*
  ======================
  SERVER WORKFLOW (STEP-BY-STEP)
  ======================

  1. File is executed with Node.js
     → Node reads this file and starts running it top to bottom.

  2. Express is imported and app is created
     → 'express()' initializes your server application.

  3. Port is defined
     → The server is configured to listen on PORT 3000.

  4. Route is registered
     → app.get("/") tells the server:
       "If a GET request comes to '/', run this function."

  5. Server starts listening
     → app.listen(PORT) opens the server to incoming requests.

  6. Client makes a request
     → Example: User opens http://localhost:3000/ in a browser.

  7. Express matches the route
     → It sees the request is GET "/" and runs your handler.

  8. Response is sent
     → res.send() sends "Hello from Express Server!" back to the client.

  9. Client receives response
     → The browser displays the message.

  ======================
  In short:
  Request → Route Match → Handler Runs → Response Sent
  ======================
*/