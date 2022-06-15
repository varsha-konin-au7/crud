import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from  "../redux/actions.tsx";

export default function AddUser() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    maidenName: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
    username: "",
  });
  const [error, setError] = useState("");
  const {
    firstName,
    lastName,
    maidenName,
    age,
    gender,
    email,
    phone,
    username,
  } = state;

  let navigate = useNavigate();
  let dispatch = useDispatch();

  const handleInputChange = (e: any) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (
      !firstName ||
      !lastName ||
      !maidenName ||
      !age ||
      !gender ||
      !email ||
      !phone ||
      !username
    ) {
      setError("Please fill in all the feilds");
    } 
    else {
      dispatch(addUser(state));
      navigate("/");
    }
  };
  return (
    <Box
      onSubmit={handleSubmit}
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "45ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Button
        style={{ width: "100px", margin: "10px" }}
        color="secondary"
        size="small"
        variant="contained"
        onClick={() => navigate("/")}
      >
        Go Back
      </Button>
      <div style={{ marginLeft: "500px" }}>
        <h4>Add User</h4>
        {<h3 style={{ color: "red" }}>{error}</h3>}
        <hr></hr>
      </div>

      <TextField
        id="standard-basic"
        label="First Name"
        variant="standard"
        value={firstName}
        name="firstName"
        type="text"
        onChange={handleInputChange}
      />
      <br></br>
      <TextField
        id="standard-basic"
        label="Last Name"
        variant="standard"
        value={lastName}
        name="lastName"
        type="text"
        onChange={handleInputChange}
      />
      <br></br>
      <TextField
        id="standard-basic"
        label="Maiden Name"
        variant="standard"
        value={maidenName}
        name="maidenName"
        type="text"
        onChange={handleInputChange}
      />
      <br></br>
      <TextField
        id="standard-basic"
        label="Email"
        variant="standard"
        value={email}
        name="email"
        type="text"
        onChange={handleInputChange}
      />
      <br></br>
      <TextField
        id="standard-basic"
        label="Age"
        variant="standard"
        value={age}
        name="age"
        type="text"
        onChange={handleInputChange}
      />
      <br></br>
      <TextField
        id="standard-basic"
        label="Gender"
        variant="standard"
        value={gender}
        name="gender"
        type="text"
        onChange={handleInputChange}
      />

      <br></br>
      <TextField
        id="standard-basic"
        label="Phone Number"
        variant="standard"
        value={phone}
        name="phone"
        type="text"
        onChange={handleInputChange}
      />
      <br></br>
      <TextField
        id="standard-basic"
        label="User Name"
        variant="standard"
        value={username}
        name="username"
        type="text"
        onChange={handleInputChange}
      />
      <br></br>

      <Button color="primary" variant="contained" type="submit">
        Submit
      </Button>
    </Box>
  );
}
