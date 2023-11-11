import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
// import { useRouter } from "next/router";
import axios from "axios";
import { useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";

export default function LoginPage() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  // const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    let userToken = localStorage.getItem("user_token");

    if (userToken) {
      window.location.href = "#";
      // router.push("/");
    }
    setTimeout(() => {
      setTimeout(false);
    }, 2000);
  }, []);

  const loginAccountService = async () => {
    const requestBody = {
      email: form.email,
      password: form.password,
    };

    const response = await axios.post(
      "http://localhost:3000/auth/login",
      requestBody
    );

    if (response.status === 200) {
      // const username=response.data.username;
      // const name=response.data.name;
      // const lastname=response.data.lastname;
      const { username, name, lastname } = response.data;
      // dispatch({
      //   type: "LOGIN",
      //   patload: {
      //     name: name,
      //     lastname: lastname,
      //     username: username,
      //   },
      // });
      dispatch({
        type: "LOGIN",
        patload: {
          name,
          lastname,
          username,
        },
      });
      localStorage.setItem("user_token", response.data.token);
    }
  };

  return (
    <>
      {loading ? (
        <>
          <div className="flex justify-center items-center h-screen">
            <CircularProgress />
          </div>
        </>
      ) : (
        <div className="bg-blue-200 h-screen  flex justify-center items-center p-50 ">
          <div className="bg-white w-1/2 p-5 rounded-lg border-1 shadow-2xl">
            <h2 className="text-center text-2x font-bold text-gray-500 mt-10 ">
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
                onChange={(event) =>
                  setForm({ ...form, email: event.target.value })
                }
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
                onChange={(event) =>
                  setForm({ ...form, password: event.target.value })
                }
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
                onClick={() => {
                  loginAccountService();
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
                Login Your Account
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
