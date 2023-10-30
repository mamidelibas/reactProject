import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import { useEffect, useState } from "react";
import axios from "axios";

export default function RegisterPage() {
  // const [name, setName] = useState("");
  // const [surname, setSurname] = useState("");
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [password2, setPassword2] = useState("");

  // YERİNE DAHA PRATİK OLARAK

  //checkbox'un işaretli ya da işaretsiz olması. Buttonun içine atılacak
  const [termsCheck, setTermsCheck] = useState(false);
  const [userToken, setUserToken] = useState("");

  useEffect(() => {
    let userToken = localStorage.getItem("user_token");

    if (userToken) {
      window.location.href = "/pages/index.js";
    }
  }, []);

  const [form, setForm] = useState({
    name: "",
    surname: "",
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  // text'teki değerleri alması için kısa bir yol
  const handleOnChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  //api verileri alma
  const createAccountService = async () => {
    const requestBody = {
      name: form.name,
      lastname: form.surname,
      username: form.username,
      email: form.email,
      password: form.password,
    };

    const response = await axios.post(
      "http://localhost:3000/auth/register",
      requestBody
    );

    if (response.status === 200) {
      setUserToken(response.data.token);
      localStorage.setItem("user_token", response.data.token);
    } else {
      alert("An error occured while creating your account.");
    }
  };

  const handleSubmit = async () => {
    if (termsCheck === false) {
      alert("You must accept the terms of use and privacy policy.");
    } else if (form.password !== form.password2) {
      alert("Your passwords doesn't match.");
    } else {
      await createAccountService();
      // alert("İşlem Başarılı");
    }
  };

  return (
    <div className="bg-blue-200 h-screen  flex justify-center items-center ">
      <div className="bg-white w-1/2 p-5 rounded-lg border-1 shadow-2xl">
        <h2 className="text-center text-2x font-bold text-gray-500 mt-10 ">
          Create A New Account
        </h2>
        <p className="text-gray-500 text-center mt-2">
          Let's create a new account and socialize!
        </p>
        <div className="flex justify-center flex-col items-center gap-5 mt-10">
          <div className="flex w-full justify-center gap-10">
            {/* 
              BU KOMUT OBJELERI DÜZ STRING HALINDE GÖSTERİR
              {JSON.stringify()} 
          */}
            <TextField
              id="standard-basic"
              label="Name"
              name="name"
              value={form.name}
              onChange={(event) => handleOnChange(event)}
              type="text"
              variant="standard"
              sx={{
                width: "28%",
              }}
            />
            <TextField
              label="Surname"
              name="surname"
              value={form.surname}
              onChange={(event) => handleOnChange(event)}
              type="text"
              variant="standard"
              sx={{
                width: "28%",
              }}
            />
          </div>

          <div className="flex w-full justify-center gap-10">
            <TextField
              id="standard-basic"
              label="Enter your username"
              name="username"
              value={form.username}
              onChange={(event) => handleOnChange(event)}
              type="text"
              variant="standard"
              sx={{
                width: "28%",
              }}
            />

            <TextField
              id="standard-basic"
              label="Enter your e-mail"
              name="email"
              type="email"
              value={form.email}
              onChange={(event) => handleOnChange(event)}
              variant="standard"
              sx={{
                width: "28%",
              }}
            />
          </div>
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

          <TextField
            id="standard-basic"
            label="Re-type your password"
            name="password2"
            value={form.password2}
            onChange={(event) => handleOnChange(event)}
            type="password"
            variant="standard"
            sx={{
              width: "60%",
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

        <div className="flex items-center justify-center mt-4">
          <Checkbox
            size="small"
            checked={termsCheck}
            onChange={() => {
              setTermsCheck(!termsCheck);
            }}
          />
          <span className="text-gray-500">
            I accept the Privacy Policy and Terms of Use.
          </span>
        </div>

        <div className="flex justify-center items-centers mt-8">
          <Button
            //chechbox işaretli değilse input disable olur
            disabled={termsCheck === false}
            onClick={() => {
              handleSubmit();
            }}
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
            Create A New Account
          </Button>
        </div>
      </div>
    </div>
  );
}
