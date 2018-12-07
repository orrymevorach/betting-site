import React from 'react';
import LoginModal from './NavComponents/LoginModal';
import CreateAccountModal from './NavComponents/CreateAccountModal';

const HomeNav = (
    { handleChange,
    loginEmail,
    loginPassword,
    loginWithFacebook,
    loginWithEmail,
    logout,
    loggedInWithFacebook,
    loggedInWithEmail,
    userProfile,
    createAccount,
    newFirstName,
    newLastName,
    newBirthdayDay,
    newBirthdayYear,
    newUsername,
    newEmail,
    newPassword,
    showFacebookModal,
    facebookAdditionalUserInformation }
) => {

    function login() {
        $('.login-modal').removeClass('none')
    }
    if(loggedInWithFacebook === true) {
        $('.facebook-modal').addClass('none')
        $('body').removeClass('stopscroll')
    }

    function createAccount() {
        $('.create-account-modal').removeClass('none')
    }
    
    if(loggedInWithEmail === true) {
        $('.create-account-modal').addClass('none')
        $('.login-modal').addClass('none')
        $('body').removeClass('stopscroll')
    }

    return (
        <nav className="home-nav clearfix">
            <LoginModal 
                handleChange={handleChange}
                loginEmail={loginEmail}
                loginPassword={loginPassword}
                loginWithFacebook={loginWithFacebook}
                loginWithEmail={loginWithEmail}
                newUsername={newUsername}
                newBirthdayDay={newBirthdayDay}
                newBirthdayYear={newBirthdayYear}
                showFacebookModal={showFacebookModal}
                facebookAdditionalUserInformation={facebookAdditionalUserInformation}
                loggedInWithFacebook={loggedInWithFacebook}
            />
            <CreateAccountModal 
                createAccount={createAccount}
                handleChange={handleChange}
                newFirstName={newFirstName}
                newLastName={newLastName}
                newBirthdayDay={newBirthdayDay}
                newBirthdayYear={newBirthdayYear}
                newUsername={newUsername}
                newEmail={newEmail}
                newPassword={newPassword}
                loggedInWithEmail={loggedInWithEmail}
            />
            <ul>
                <div className="nav-left">
                    <li className="home">Home</li>
                </div>
                {loggedInWithFacebook === false && loggedInWithEmail === false ? 
                    <div className="nav-right">
                        <li><button className="login-button" onClick={login}>Login</button></li>
                        <li><button className="join-now-button" onClick={createAccount}>Join Now</button></li>
                    </div>
                : loggedInWithFacebook === true  || loggedInWithEmail === true ?
                    <div className="nav-right">
                        <li><h3 className="nav-greeting">Welcome {userProfile.username}</h3></li>
                        <li><button onClick={logout}>Log Out</button></li>
                    </div>
                : null
                }
            </ul>
        </nav>
    )
}

export default HomeNav;