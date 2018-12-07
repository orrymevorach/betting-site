import React from 'react';
import FacebookModal from './FacebookModal';

const LoginModal = (
    { handleChange,
    loginEmail,
    loginPassword,
    loginWithFacebook,
    loginWithEmail,
    newUsername,
    newBirthdayDay,
    newBirthdayYear,
    showFacebookModal,
    facebookAdditionalUserInformation,
    loggedInWithFacebook }
) => {

    $('input').on('focusin', function(e) {
        const parentElement = e.target.parentElement.className
        $(`.${parentElement}`).addClass('input-focus')
    })

    $('input').on('focusout', function (e) {
        const parentElement = e.target.parentElement.className
        $(`.${parentElement}`).removeClass('input-focus')
    })

    function closeModal() {
        $('.login-modal').addClass('none')
    }
    $(document).on('keydown', function(e) {
        if(e.which === 27) {
            closeModal()
        }
    })

    function displayFacebookModal() {
        $('.login-modal').addClass('none')
        $('.facebook-modal').removeClass('none')
    }

    if (showFacebookModal === true) {
        displayFacebookModal()
    }

    if(loggedInWithFacebook === true) {
        closeModal();
    }

    return (
        <div>
            <FacebookModal 
                handleChange={handleChange}
                newUsername={newUsername}
                newBirthdayDay={newBirthdayDay}
                newBirthdayYear={newBirthdayYear}
                facebookAdditionalUserInformation={facebookAdditionalUserInformation}
            />
            <div className="login-modal label-inside none">
                <div className="overlay">
                    <div className="modal">
                        <div className="close-modal-icon" onClick={closeModal}>
                            <i className="fas fa-times"></i>
                        </div>
                        <h1 className="modal-header">Time To Play</h1>
                        <form action="#" onSubmit={(e) => loginWithEmail(e)}>
                            <div className="input-container">
                                <label htmlFor="loginPassword">Email*</label>
                                <input 
                                    type="email" 
                                    name="loginEmail"
                                    value={loginEmail}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="input-container login-password">
                                <label htmlFor="loginPassword">Password*</label>
                                <input 
                                    type="password" 
                                    name="loginPassword"
                                    value={loginPassword}
                                    onChange={handleChange}
                                    required 
                            />
                            </div>
                            <button type="submit" className="modal-button light-blue">Log In</button>
                        </form>
                        <div className="login-or">
                            <p>or</p>
                        </div>
                        <button className="modal-button login-with-facebook" onClick={loginWithFacebook}>Log In With Facebook</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginModal;