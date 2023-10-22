import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <div className="bg-blue-200 h-screen  flex justify-center items-center p-50 ">
      <div className="bg-white w-1/2 p-5 rounded-lg border-1 shadow-2xl">
        <h2 className="text-center text-2x font-semibold text-gray-500 mt-10 ">
          Login Your Account
        </h2>
        <p className="text-gray-500 text-center mt-2">
          Let's login your account and be socialized!
        </p>
        <div className="flex justify-center flex-col items-center gap-5 mt-10">
          <TextField
            id="standard-basic"
            label="Enter your e-mail"
            name="email"
            value={form.email}
            onChange={(event) => handleOnChange(event)}
            type="email"
            variant="standard"
            sx={{
              width: "60%",
            }}
          />
          <TextField
            id="standard-basic"
            label="Enter your password"
            name="password"
            value={form.password}
            onChange={(event) => handleOnChange(event)}
            type="password"
            variant="standard"
            sx={{
              width: "60%",
            }}
          />
          <a
            href="#"
            className="text-end"
            style={{
              color: "#bfdbfe",
            }}
          >
            Forgot your password?
          </a>
        </div>
        <div className="flex justify-center items-center mt-8">
          <Button
            className="rounded mb-10 py-2"
            sx={{
              borderColor: "gray",
              color: "gray",
              width: "60%",
              "&:hover": {
                backgroundColor: "",
                borderColor: "gray",
              },
            }}
            variant="outlined"
          >
            Login Your Account
          </Button>
        </div>
      </div>
    </div>
  );
}
