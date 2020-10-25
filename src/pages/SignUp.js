import React, { Component } from 'react'
import firebase from 'firebase'
// import CountDown from './CountDown';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import CountDown from './CountDown';
firebase.initializeApp({
    apiKey: "AIzaSyCFH1_wi6LcSWicrQywpDJgX8DdNLqENPc",
    authDomain: "practice-c4e4f.firebaseapp.com",
})
  class SignUp extends Component {

    state={isSignedIn:false}
    uiConfig ={
        signInFlow:'popup',
        signInOptions:[
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks :{
            signInSuccess:()=>false
        }
    }
componentDidMount=()=>{
    firebase.auth().onAuthStateChanged(user =>{
        this.setState({isSignedIn:!!user})
    })
}
    render() {
        return (
            <div>
                {this.state.isSignedIn ? (
                    <>
                    <CountDown/>
                    
                  {/* <button onClick={()=>firebase.auth().signOut()}>Sign Out</button>
                  <h1>Welcome {firebase.auth().currentUser.displayName} </h1>
                  <img src={firebase.auth().currentUser.photoURL} alt="profile picture"/> */}
                  </>
                ):(
                     <StyledFirebaseAuth
                      uiConfig={this.uiConfig}
                      firebaseAuth={firebase.auth()}
                     />

                )}
            </div>
        )
    }
}

export default SignUp
