import React from 'react';
import FacebookModal from './FacebookModal';

const LoginModal = (props) => {
    $('input').on('focusin', function(e) {
        const parentElement = e.target.parentElement.className
        $(`.${parentElement}`).addClass('input-focus')
    })

    $('input').on('focusout', function (e) {
        const parentElement = e.target.parentElement.className
        $(`.${parentElement}`).removeClass('input-focus')
    })

    function loginWithEmail(e) {
        e.preventDefault();
        const email = e.target[0].value
        const password = e.target[1].value

        props.loginWithEmail(email, password)
    }

    function closeModal() {
        $('.login-modal').addClass('none')
    }
    $(document).on('keydown', function(e) {
        if(e.which === 27) {
            closeModal()
        }
    })

    function showFacebookModal() {
        $('.login-modal').addClass('none')
        $('.facebook-modal').removeClass('none')
    }

    if (props.showFacebookModal === true) {
        showFacebookModal()
    }

    if(props.loggedInWithFacebook === true) {
        closeModal();
    }

    return (
        <div>
            <FacebookModal 
                handleChange={props.handleChange}
                newUsername={props.newUsername}
                newTitle={props.newTitle}
                loginWithFacebook={props.loginWithFacebook}
                facebookAdditionalUserInformation={props.facebookAdditionalUserInformation}
            />
            <div className="login-modal label-inside none">
                <div className="overlay">
                    <div className="modal">
                        <div className="close-modal-icon" onClick={closeModal}>
                            <i className="fas fa-times"></i>
                        </div>
                        <h1 className="modal-header">Time To Play</h1>
                        <form action="#" onSubmit={loginWithEmail}>
                            <div className="input-container">
                                <label htmlFor="loginPassword">Email*</label>
                                <input 
                                    type="email" 
                                    name="loginEmail"
                                    value={props.loginEmail}
                                    onChange={props.handleChange}
                                    required
                                />
                            </div>
                            <div className="input-container login-password">
                                <label htmlFor="loginPassword">Password*</label>
                                <input 
                                    type="password" 
                                    name="loginPassword"
                                    value={props.loginPassword}
                                    onChange={props.handleChange}
                                    required 
                            />
                            </div>
                            <button type="submit" className="modal-button light-blue">Log In</button>
                        </form>
                        <div className="login-or">
                            <p>or</p>
                        </div>
                        <button className="modal-button login-with-facebook" onClick={props.loginWithFacebook}>Log In With Facebook</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginModal;