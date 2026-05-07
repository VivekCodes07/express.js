// Import express
import express from "express";

// Import router
import router from "./route.js";

// Create app
const app = express();

// Home route
app.get("/", (req, res) => {
  res.send("Home Page");
});

// Router middleware
// All routes start with /user
app.use("/user", router);

// Start server
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


/*
=================================
FLOW OF REQUEST
=================================

User visits:
http://localhost:3000/user/login

1. Request comes to index.js

2. app.use("/user", router)
   sends request to route.js

3. route.js checks route:
   "/login"

4. Matching controller runs

5. controller.js sends response

6. Browser receives response
*/