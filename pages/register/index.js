import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function RegisterPage() {
  // const [name, setName] = useState("");
  // const [surname, setSurname] = useState("");
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [password2, setPassword2] = useState("");

  // YERİNE DAHA PRATİK OLARAK

  const [form, setForm] = useState({
    name: "",
    surname: "",
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  return (
    <div className="bg-blue-200 h-screen  flex justify-center items-center ">
      <div className="bg-white w-1/2 p-5 rounded-lg border-1 shadow-2xl">
        <h2 className="text-center text-2x font-semibold text-gray-500 mt-10 ">
          Create A New Account
        </h2>
        <p className="text-gray-500 text-center mt-2">
          Let's login your account and be socialized!
        </p>
        <div className="flex justify-center flex-col items-center gap-5 mt-10">
          <div className="flex gap-5">
            <TextField
              id="standard-basic"
              label="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              log
              type="text"
              variant="standard"
              sx={{
                width: "50%",
              }}
            />
            <TextField
              id="standard-basic"
              label="Surname"
              value={form.surname}
              onChange={(e) => setForm({ ...form, surname: e.target.value })}
              type="text"
              variant="standard"
              sx={{
                width: "50%",
              }}
            />
          </div>

          <div className="flex gap-5">
            <TextField
              id="standard-basic"
              label="Enter your username"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              type="text"
              variant="standard"
              sx={{
                width: "50%",
              }}
            />

            <TextField
              id="standard-basic"
              label="Enter your e-mail"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              variant="standard"
              sx={{
                width: "50%",
              }}
            />
          </div>
          <TextField
            id="standard-basic"
            label="Enter your password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            type="password"
            variant="standard"
            sx={{
              width: "50%",
            }}
          />

          <TextField
            id="standard-basic"
            label="Re-type your password"
            value={form.password2}
            onChange={(e) => setForm({ ...form, password2: e.target.value })}
            type="password"
            variant="standard"
            sx={{
              width: "50%",
            }}
          />
          {/* <a
            href="#"
            className="text-end"
            style={{
              color: "#bfdbfe",
            }}
          >
            Forgot your password?
          </a> */}
        </div>
        <div className="flex justify-center items-centers mt-8">
          <Button
            className="rounded mb-10 py-2"
            sx={{
              borderColor: "gray",
              color: "gray",
              width: "50%",
              "&:hover": {
                backgroundColor: "",
                borderColor: "gray",
              },
            }}
            variant="outlined"
          >
            Create Your Account
          </Button>
        </div>
      </div>
    </div>
  );
}
