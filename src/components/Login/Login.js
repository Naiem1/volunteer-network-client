import React, { useContext, useState } from 'react';
import './Login.css'
import { Container } from 'react-bootstrap';
import logo from '../../logos/Group1329.png'
import icon from '../../logos/google.png'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

const Login = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [users, setUser] = useState({
    name: '',
    email: ''
  });

  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };


  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    firebase.auth().signInWithPopup(googleProvider)
      .then(data => {
        const { email, displayName } = data.user;
        console.log(data.user);
        const setUserInfo = {
          name: displayName,
          email: email
        }
        setUser(setUserInfo);
        setLoggedInUser(setUserInfo);
        storeAuthToken();
        history.replace(from);
      })
      .catch(error => {
        console.log(error);
      })
    
  }

  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then( idToken => {
        sessionStorage.setItem('token', idToken);

    }).catch(function(error) {
      
    });
  }

  return (
    <div className="login">
      <div className="logo my-5">
        <Link to="/"><img className="logo__img" src={logo} alt=""/></Link>
      </div>
      <Container className="d-flex  justify-content-center align-items-center">
        <div  className="login__box w-50 border" style={{height: '300px'}}>
          <h4>Login with</h4>
          <div onClick={handleGoogleSignIn} className="login__button">
            <div>
              <img className="google__icon" src={icon} alt=""/>
            </div>
            <div>
              Continue with google
            </div>
          </div>
          <h6 className="mt-4">Don't have an account? <a>Create an account</a></h6>
        </div>
      </Container>
    </div>
  );
};

export default Login;