// Login Controller
export const userLogin = (req, res) => {
  res.send("User Login Page");
};

// Signup Controller
export const userSignup = (req, res) => {
  res.send("User Signup Page");
};

/*
=================================
CONCEPT
=================================

Controllers contain business logic.

Instead of writing logic
inside routes, we separate it
into controller functions.

This keeps code clean and organized.
*/