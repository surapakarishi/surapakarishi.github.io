import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector,useDispatch } from "react-redux";
// import { LOGIN } from "../../redux/actions/Actions";
const Eye = <FontAwesomeIcon className="icon" icon={['fas','eye']} />;
const EyeSlash = <FontAwesomeIcon className="icon" icon={['fas','eye-slash']} />;

function Login(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const UserData = useSelector(state=>state.userReducer.users)


  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;
  function hangleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    console.log(formData);
  }
  const refPassword = useRef();
  function showPassword() {
    setShowPass(!showPass);
    refPassword.current.type = showPass ? "password" : "text";
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    let loginUser = UserData.find(user=>user.email === email && user.password === password)
    
    if(loginUser){
            sessionStorage.setItem("email",email)
        history.push('/')
       
        // localStorage.setItem("password",password)
      }else{
        alert('Invalid credentials')
      }
    // if(formData.email === USER?.email && formData.password === USER?.password){
    //   dispatch(LOGIN(formData))
    //     history.push('/')
    // }else{
    //   alert('Invalid credentials')
    // }
    // setFormData(formData)
    //   {
    //   email: "",
    //   password: ""
    // });
    setShowPass(false);
  };

  console.log(UserData);

  const canSignIn =
  [email, password].every(Boolean); 

  return (
    <div className="login-wrapper ">
      <form onSubmit={handleSubmit} className="common-background">
      <h2>Login</h2>
          <label htmlFor="email">Email:</label>
          <input
            onChange={hangleChange}
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="abc@example.com"
            autoFocus
            required
          />
        <label htmlFor="password">Password:</label>
        <div className="eye">
          <input
            ref={refPassword}
            type="password"
            onChange={hangleChange}
            id="password"
            name="password"
            autoComplete
            value={password}
            required
          />
          {showPass ? (
            <i onClick={showPassword}>{Eye}</i>
          ) : (
            <i onClick={showPassword}>{EyeSlash}</i>
          )}
        </div>
        <button className="loginButton" type="submit" disabled={!canSignIn}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
