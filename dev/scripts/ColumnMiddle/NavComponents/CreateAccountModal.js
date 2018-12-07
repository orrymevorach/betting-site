import React from 'react';

const CreateAccountModal = (props) => {
    function createAccount(e) {
        e.preventDefault();
        const formElement = e.target
        const title = formElement[0].value
        const firstName = formElement[1].value
        const lastName = formElement[2].value
        const month = formElement[3].value
        const day = formElement[4].value
        const year = formElement[5].value
        const username = formElement[6].value
        const email = formElement[7].value
        const password = formElement[8].value
        
        props.createAccount(email, password, title, firstName, lastName, month, day, year, username)
    }

    if(props.loggedInWithEmail === true) {
        $('.create-account-modal').addClass('none')
    }

    function closeModal() {
        $('.create-account-modal').addClass('none')
    }

    return (
        <div className="create-account-modal label-outside none">
            <div className="overlay">
                <div className="modal">
                    <div className="close-modal-icon" onClick={closeModal}>
                        <i className="fas fa-times"></i>
                    </div>
                    <h1 className="modal-header">create account</h1>
                    <form action="#" onSubmit={createAccount}>
                        <div className="modal-row modal-row1 column">
                            <label htmlFor="newTitle">Title</label>
                            <div className="select-arrow-container">
                                <select name="newTitle">
                                    <option value="Mr.">Mr.</option> 
                                    <option value="Mrs.">Mrs.</option>
                                    <option value="Ms.">Ms.</option>
                                </select>
                                <i className="fas fa-angle-down title-arrow"></i>
                            </div>
                        </div>
                        <div className="modal-row modal-row-split-2 modal-row2">
                            <div className="newFirstName column">
                                <label htmlFor="newFirstName">First Name</label>
                                <input
                                    type="text"
                                    name="newFirstName"
                                    value={props.newFirstName}
                                    onChange={props.handleChange}
                                 />
                            </div>
                            <div className="newLastName column">
                                <label htmlFor="newLastName">Last Name</label>
                                <input
                                    type="text"
                                    name="newLastName"
                                    value={props.newLastName}
                                    onChange={props.handleChange}
                                 />
                            </div>
                        </div>
                        <div className="modal-row modal-row3 column">
                            <label htmlFor="new-date-of-birth">Date of Birth</label>
                            <div className="birthday-inputs">
                                <div className="select-arrow-container">
                                    <select name="newBirthdayMonth">
                                        <option value="January">January</option>
                                        <option value="February">February</option>
                                        <option value="March">March</option>
                                        <option value="April">April</option>
                                        <option value="May">May</option>
                                        <option value="June">June</option>
                                        <option value="July">July</option>
                                        <option value="August">August</option>
                                        <option value="September">September</option>
                                        <option value="October">October</option>
                                        <option value="November">November</option>
                                        <option value="December">December</option>
                                    </select>
                                    <i className="fas fa-angle-down birthday-arrow"></i>
                                </div>
                                <input
                                    type="number" 
                                    name="newBirthdayDay" 
                                    value={props.newBirthdayDay}
                                    placeholder="Day"
                                    onChange={props.handleChange}
                                 />
                                <input
                                    type="numer" 
                                    name="newBirthdayYear" 
                                    value={props.newBirthdayYear}
                                    placeholder="Year"
                                    onChange={props.handleChange}
                                 />
                            </div>
                        </div>
                        <div className="modal-row modal-row4 column">
                            <label htmlFor="newusername">username</label>
                            <input
                                type="text" 
                                name="newusername"
                                value={props.newusername}
                                onChange={props.handleChange}
                             />
                        </div>
                        <div className="modal-row modal-row5 column">
                            <label htmlFor="newEmail">Email</label>
                            <input
                                type="email" 
                                name="newEmail" 
                                value={props.newEmail}
                                onChange={props.handleChange}
                             />
                        </div>
                        <div className="modal-row modal-row6 column">
                            <label htmlFor="newPassword">Password</label>
                            <input
                                type="password" 
                                name="newPassword" 
                                value={props.newPassword}
                                onChange={props.handleChange}
                             />
                        </div>
                        <div className="modal-row modal-row7">
                            <button type="submit" className="modal-button light-blue">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default CreateAccountModal;