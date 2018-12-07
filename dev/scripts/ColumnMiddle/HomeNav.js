import React from 'react';
import LoginModal from './NavComponents/LoginModal';
import CreateAccountModal from './NavComponents/CreateAccountModal';

const HomeNav = (props) => {

    function login() {
        $('.login-modal').removeClass('none')
    }
    if(props.loggedInWithFacebook === true) {
        $('.facebook-modal').addClass('none')
        $('body').removeClass('stopscroll')
    }

    function createAccount() {
        $('.create-account-modal').removeClass('none')
    }
    
    if(props.loggedInWithEmail === true) {
        $('.create-account-modal').addClass('none')
        $('.login-modal').addClass('none')
        $('body').removeClass('stopscroll')
    }

    return (
        <nav className="home-nav clearfix">
            <LoginModal 
                handleChange={props.handleChange}
                loginEmail={props.loginEmail}
                loginPassword={props.loginPassword}
                loginWithFacebook={props.loginWithFacebook}
                loginWithEmail={props.loginWithEmail}
                newUsername={props.newUsername}
                newTitle={props.newTitle}
                showFacebookModal={props.showFacebookModal}
                facebookAdditionalUserInformation={props.facebookAdditionalUserInformation}
                loggedInWithFacebook={props.loggedInWithFacebook}
            />
            <CreateAccountModal 
                createAccount={props.createAccount}
                handleChange={props.handleChange}
                newTitle={props.newTitle}
                newFirstName={props.newFirstName}
                newLastName={props.newLastName}
                newBirthdayMonth={props.newBirthdayMonth}
                newBirthdayDay={props.newBirthdayDay}
                newBirthdayYear={props.newBirthdayYear}
                newUsername={props.newUsername}
                newEmail={props.newEmail}
                newPassword={props.newPassword}
                loggedInWithEmail={props.loggedInWithEmail}
            />
            <ul>
                <div className="nav-left">
                    <li className="home">Home</li>
                </div>
                {props.loggedInWithFacebook === false && props.loggedInWithEmail === false ? 
                    <div className="nav-right">
                        <li><button className="login-button" onClick={login}>Login</button></li>
                        <li><button className="join-now-button" onClick={createAccount}>Join Now</button></li>
                    </div>
                : props.loggedInWithFacebook === true  || props.loggedInWithEmail === true ?
                    <div className="nav-right">
                        <li><h3 className="nav-greeting">Welcome {props.userProfile.username}</h3></li>
                        <li><button onClick={props.logout}>Log Out</button></li>
                    </div>
                : null
                }
            </ul>
        </nav>
    )
}

export default HomeNav;