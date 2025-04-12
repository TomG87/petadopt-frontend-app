import axios from "axios";
import React, { useState } from "react";

export function Login() {
  const [errors, setErrors] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [unsuccessful, setUnsuccessful] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    setSuccessMessage("");
    setUnsuccessful("");

    const params = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    console.log("Params", params);

    axios
      .post("http://localhost:3003/api/users/login", params)
      .then((response) => {
        console.log("Login response:", response);
        event.target.reset();
        setSuccessMessage("You have successfully logged in");
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
      })
      .catch((error) => {
        console.error("Login error:", error);
        setUnsuccessful("Login failed. Please check your credentials.");
      });
  };

  return <form onSubmit={handleSubmit}>{}</form>;
}
