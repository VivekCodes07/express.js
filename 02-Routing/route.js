// Import express
import express from "express";

// Import controllers
import { userLogin, userSignup } from "./controller.js";

// Create router
const router = express.Router();

// Login route
router.get("/login", userLogin);

// Signup route
router.get("/signup", userSignup);

// Export router
export default router;


/*
=================================
CONCEPT
=================================

Router helps separate routes
into different files.

"/login"
becomes:

/user/login

because of:

app.use("/user", router)

inside index.js
*/