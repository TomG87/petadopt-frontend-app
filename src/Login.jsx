import axios from "axios";
import React from "react";



export function Login() {
  const [errors, setErrors] = useState([]);
  const [sucessMessage, setSuccessMessage] = useState("");
  const [unsuccessful, setUnsuccessful] = useState("");

  const handleSubmit= (event) => {
    event.preventDefault();
    setErrors([]);
    setSuccessMessage("");
    setUnsuccessful("");
  }

  const params = {
    email: event.target.email.value,
    password: event.target.password.value.
  };

  console.log("Params", params);

  axios
  .post("http://localhost:3000/api/users/login", params)
}