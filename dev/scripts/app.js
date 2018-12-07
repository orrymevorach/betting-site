import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './ColumnLeft/Logo';
import Rankings from './ColumnLeft/Rankings';
import TrendingBets from './ColumnLeft/TrendingBets';
import HomeNav from './ColumnMiddle/HomeNav';
import PlaceBet from './ColumnMiddle/PlaceBet';
import SectionExpiringBets from './ColumnMiddle/SectionExpiringBets';
import SectionNewestBets from './ColumnMiddle/SectionNewestBets';
import SectionSports from './ColumnMiddle/SectionSports';
import Tabs from './ColumnMiddle/Tabs';
import BetSlip from './ColumnRight/BetSlip';
import Footer from './Footer'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCZAGV8vLxvJSyo_1eJJxVMzU9BmuKU3aQ",
  authDomain: "betting-site-55ff1.firebaseapp.com",
  databaseURL: "https://betting-site-55ff1.firebaseio.com",
  projectId: "betting-site-55ff1",
  storageBucket: "betting-site-55ff1.appspot.com",
  messagingSenderId: "155751522042"
};
firebase.initializeApp(config);

const dbRefUsers = firebase.database().ref('users')


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      // Login Inputs
      loginEmail: '',
      loginPassword: '',
      // New Account Inputs
      newFirstName: '',
      newLastName: '',
      newBirthdayDay: '',
      newBirthdayYear: '',
      newUsername: '',
      newEmail: '',
      newPassword: '',
      // User Profile Information
      userProfile: {},
      loggedInWithFacebook: false,
      loggedInWithEmail: false,
      // Facebook Additional Info
      showFacebookModal: false,
      // Place Bet Functionality
      bettingInput: '',
      monetaryValueOfBet: '',
      monthBetComplete: '',
      dayBetComplete: '',
      yearBetComplete: '',
      allBets: [],
    }

    this.handleChange = this.handleChange.bind(this)
    this.acceptBet = this.acceptBet.bind(this)
    this.loginWithFacebook = this.loginWithFacebook.bind(this)
    this.logout = this.logout.bind(this)
    this.createAccount = this.createAccount.bind(this)
    this.loginWithEmail = this.loginWithEmail.bind(this)
    this.facebookAdditionalUserInformation = this.facebookAdditionalUserInformation.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  loginWithFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider();
    
    firebase.auth().signInWithPopup(provider).then(res => {
      // user information that we got from facebook
      const user = res.user
      // userID
      const userID = user.uid
      // email
      const userEmail = user.email
      // displayName
      const displayName = user.displayName
      const fullName = displayName.split(' ')
      const firstName = fullName[0]
      const lastName = fullName[fullName.length - 1]

      const dbRefUser = firebase.database().ref(`users/${userID}`)
      dbRefUser.on('value', (snapshot) => {
        // if user exists, update state to include username (to render) and userID (for firebase)
        // firebase has more user information but it is not currently needed for render
        if(snapshot.exists()) {

          const data = snapshot.val()
          const username = data.username
          
          let userProfile = {
            "username": username,
            "userID": userID,
          }

          this.setState({
            // close login modal
            loggedInWithFacebook: true,
            // update profile information that gets rendered
            userProfile: userProfile
          })
        }
        // if user does not exist...
        else {
          // create an object including information provided by facebook, then ...
          let userProfile = {
            "email": userEmail,
            "userID": userID,
            "firstName": firstName,
            "lastName": lastName
          }

          // create a user in firebase and set the userProfile with current information
          dbRefUsers.child(`${userID}`).set(userProfile)

          this.setState({
            // since user is new, additional information is required. setting value to true opens facebook modal
            showFacebookModal: true,
            userProfile: userProfile
          })
        }
      })

    }).catch(err => {
      console.log(err.code)
      console.log(err.message)
    })
  }

  // this function is only required the first time a user logs in with facebook
  facebookAdditionalUserInformation(e) {
    e.preventDefault();
    const title = e.target[0].value
    const username = e.target[1].value
    const month = e.target[2].value
    const day = e.target[3].value
    const year = e.target[4].value

    // userProfile in state was updated just a second ago when user logged in for the first time
    const userID = this.state.userProfile.userID

    // all information added to the object here was retreived from facebook modal and is being added now
    let userProfile = {
      "title": title,
      "firstName": '',
      "lastName": '',
      "birthday": `${month} ${day} ${year}`,
      "username": username,
      "email": '',
      "userID": userID,
      "loginMethod": "facebook"
    }

    // retreive information that already exists in firebase ref and add it to the userProfile object
    dbRefUsers.child(`${userID}`).on('value', snapshot => {
      const profile = snapshot.val()
      const email = profile.email
      const firstName = profile.firstName
      const lastName = profile.lastName
      userProfile.email = email
      userProfile.firstName = firstName
      userProfile.lastName = lastName
    })

    // set the complete userProfile object to replace the old one
    dbRefUsers.child(`${userID}`).set(userProfile)

    this.setState({
      // hide facebook modal
      showFacebookModal: false,
      // update profile so appropriate information can be rendered
      userProfile: userProfile,
      // close login modal
      loggedInWithFacebook: true
    })

  }

  logout() {
    firebase.auth().signOut().then(function() {
    }).catch(err => {
      console.log(err.code)
      console.log(err.message)
    })

    this.setState({
      loggedInWithFacebook: false,
      loggedInWithEmail: false,
      userProfile: {}
    })
  }

  createAccount(e) {
    e.preventDefault();
    const el = e.target
    const title = el[0].value
    const firstName = el[1].value
    const lastName = el[2].value
    const month = el[3].value
    const day = el[4].value
    const year = el[5].value
    const username = el[6].value
    const email = el[7].value
    const password = el[8].value
    
    firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
      
      const userProfile = 
        {
          "title": title,
          "firstName": firstName,
          "lastName": lastName,
          "birthday": `${month} ${day} ${year}`,
          "username": username,
          "email": email,
          "userID": user.user.uid,
          "loginMethod": "email"
        }

      this.setState({
        loggedInWithEmail: true,
        userProfile: userProfile
      })

      // Firebase
      dbRefUsers.child(`${user.user.uid}`).set(userProfile)
      

    }).catch(err => {
      console.log(err)
      alert(`${err.code}: ${err.message}`)
    })
  }

  loginWithEmail(e) {
    e.preventDefault();
    const email = e.target[0].value
    const password = e.target[1].value

    firebase.auth().signInWithEmailAndPassword(email, password).then(user => {
      const userID = user.user.uid
      const dbRefUser = firebase.database().ref(`users/${userID}`)
      
      let userProfile =
      {
        "username": '',
        "userID": '',
      }
      dbRefUser.on('value', snapshot => {
        const data = snapshot.val()
        userProfile.username = data.username
        userProfile.userID = data.userID
        
        this.setState({
          loggedInWithEmail: true,
          userProfile: userProfile
        })

      })
      
    }).catch(err => {
      console.log(err)
      alert(`${err.code}: ${err.message}`)
    })
  }

  acceptBet(e) {
    e.preventDefault();

    const el = e.target
    const betText = el[0].value
    const amount = el[1].value
    const month = el[2].value
    const day = el[3].value
    const year = el[4].value

    const newBet = {
      person: '',
      bet: betText,
      value: amount,
      dateBetExpires: `${month} ${day} ${year}`
    }

    let currentBets = this.state.allBets
    const allBetsCopy = []

    if (currentBets.length <= 0) {
      allBetsCopy.push(newBet)
    }
    else {
      for (let i = 0; i < currentBets.length; i++) {
        const pastBet = currentBets[i]
        allBetsCopy.push(pastBet)
      }
      allBetsCopy.push(newBet)
    }

    this.setState({
      allBets: allBetsCopy,
      bettingInput: '',
      monetaryValueOfBet: '',
      monthBetComplete: '',
      dayBetComplete: '',
      yearBetComplete: '',
    })

  }

  render() {


    return (
      <div>
        <div className="home-container">
          <div className="home-col home-col1">
            <Logo />
            <Rankings />
            <TrendingBets />
          </div>
          <div className="home-col home-col2">
            <HomeNav 
              handleChange={this.handleChange}
              loginEmail={this.state.loginEmail}
              loginPassword={this.state.loginPassword}
              loginWithFacebook={this.loginWithFacebook}
              loginWithEmail={this.loginWithEmail}
              logout={this.logout}
              loggedInWithFacebook={this.state.loggedInWithFacebook}
              loggedInWithEmail={this.state.loggedInWithEmail}
              userProfile={this.state.userProfile}
              // New Account Props
              createAccount={this.createAccount}
              newFirstName={this.state.newFirstName}
              newLastName={this.state.newLastName}
              newBirthdayDay={this.state.newBirthdayDay}
              newBirthdayYear={this.state.newBirthdayYear}
              newUsername={this.state.newUsername}
              newEmail={this.state.newEmail}
              newPassword={this.state.newPassword}
              // First Time Facebook User Props
              showFacebookModal={this.state.showFacebookModal}
              facebookAdditionalUserInformation={this.facebookAdditionalUserInformation}
            />
            {/* {this.state.loggedInWithEmail === true || this.state.loggedInWithFacebook === true ? */}
              <PlaceBet 
                handleChange={this.handleChange}
                acceptBet={this.acceptBet}
                bettingInput={this.state.bettingInput}
                monetaryValueOfBet={this.state.monetaryValueOfBet}
                allBets={this.state.allBets}
                monthBetComplete={this.state.monthBetComplete}
                dayBetComplete={this.state.dayBetComplete}
                yearBetComplete={this.state.yearBetComplete}
              />
              {/* : null */}
            {/* } */}
            
            <Tabs />
            <SectionExpiringBets />
            <SectionSports />
            <SectionNewestBets />

          </div>
          <div className="home-col home-col3">
            <BetSlip />
          </div>
          
        </div> {/* Closing Home-Container */}
        <Footer /> 
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
