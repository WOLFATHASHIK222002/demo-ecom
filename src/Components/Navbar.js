import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/loreal.png";
import login from "../images/profile.png";
import "./Nav.css";
import {app} from "./firebase.config";
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut } from "firebase/auth";
import { useStateValue } from "../Context/StateProvider";
import { actionType } from "../Context/reducer";
import { Link } from "react-router-dom";
import { useState } from "react";
import CreateItem from "./CreateItem";

function Navbardemo() {
  const firebaseauth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [{ user }, dispatch] = useStateValue();
  const [isLoggedin, setIsLoggedin] = useState(true);
  const [isMenu, setisMenu] = useState();
const logout=()=>{
   signOut(firebaseauth).then(() => {
     // Sign-out successful.
     localStorage.removeItem('user');
     console.log("log out")
   }).catch((error) => {
     // An error happened.
     alert("some error!!");
   });
}

  const log2 = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseauth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    }else {
      setisMenu(!isMenu);
    }
  };
  return (
    <>
      <Navbar bg="warning" variant="light" className="mainnav navbar-fixed-top">
        <Container>
          <Navbar.Brand href="#home">
            <Link to={"/"}>
              <img className="logo" src={logo} />
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto mynav">
            <Nav.Link href="#home" className="im">
              Home
            </Nav.Link>
            <Nav.Link href="#userlogin" className="im">
              Menu
            </Nav.Link>
            <Nav.Link href="#pricing" className="im">
              About
            </Nav.Link>
            {/* <Nav.Link href="#log" className="im">
              <div>
                login
              </div>
            </Nav.Link>
            <Nav.Link className="im">
              <div>sign </div>
            </Nav.Link> */}
            <Nav.Link href="#pricing">
              <img
                onClick={log2}  
                className="profile"
                src={user ? user.photoURL : login}
              />

              {isMenu&& (
                <Nav.Link href="#pricing">
                  <div className="admin">
                    {user && user.email === "wolfathashik@gmail.com" && (
                      <Link to={"/createItem"}>
                        <p onClick={<CreateItem/>}>New item</p>
                      </Link>
                    )}

                    <p onClick={logout}>Log out</p>
                  </div>
                </Nav.Link>
              )}
            </Nav.Link>
            <Nav.Link href="#pricing">
              <div className="relative flex items-center justify-center mpcart">
                <span className="material-symbols-outlined">local_mall</span>
                <div className="count">
                  <p className="conutnum">0</p>
                </div>
              </div>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbardemo;
