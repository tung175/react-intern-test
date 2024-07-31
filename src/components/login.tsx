
import { useNavigate } from "react-router-dom";
import "./login.scss";
import { useState } from "react";
// import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate()
//   const dispatch = useAppDispatch()
//   const isLoading = useAppSelector(state => state.user.isLoading)
//   const userAcc = useAppSelector(state => state.user.userAcc)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    console.log(email, password);
    
    if (!email || !password) {
      toast.error("Email or Password not empty");
      return;
    }
    // setLoadingApi(true);
    // dispatch(handleLoginRedux(email, password))
    // let res = await postLogin(email.trim(), password);
    // if (res && res.token) {
    //   loginContext(email, res.token)
    //   navigate("/")
    // } else {
    //   if (res && res.status === 400) {
    //     toast.error(res.data.error);
    //   }
    // }
    // setLoadingApi(false);
  };

  const handlePressEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleLogin()
    }
  }

  const handleGoBack = () => {
    navigate("/");
  };


  return (
    <>
      <div className="login-container">
        <div className="wrapper">
          <div className="title">
            <span>Login</span>
          </div>
          <p className="title_para">Please enter your Info.</p>

          <div className="form">
            <div className="row">
              {/* <i className="fas fa-user"></i> */}
              <input type="text" placeholder="Enter your email..." value={email} onChange={(event) => setEmail(event.target.value)} required />
            </div>
            <div className="row">
              {/* <i className="fas fa-lock"></i> */}
              <input type="password" placeholder="Password" value={password} onKeyDown={(event) => handlePressEnter(event)} onChange={(event) => setPassword(event.target.value)} required />
            </div>
            <div className="row button">
              <input type="submit" onClick={() => handleLogin()} />
            </div>
            <div className="back">
              <i className="fa-solid fa-angles-left"></i>
              <span onClick={() => handleGoBack()}>&nbsp;Go back</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
