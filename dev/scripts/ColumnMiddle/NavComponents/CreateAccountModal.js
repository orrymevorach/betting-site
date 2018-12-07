import React from 'react';

const CreateAccountModal = (
    { createAccount,
    handleChange,
    newFirstName,
    newLastName,
    newBirthdayDay,
    newBirthdayYear,
    newUsername,
    newEmail,
    newPassword,
    loggedInWithEmail }
) => {
    // Hide Modal Once User Is Logged In
    if(loggedInWithEmail === true) {
        $('.create-account-modal').addClass('none')
    }

    // Close Modal when click the x 
    function closeModal() {
        $('.create-account-modal').addClass('none')
    }

    // Clicking 'Escape' Closes Modal
    $(document).on('keydown', function (e) {
        if (e.which === 27) {
            closeModal()
        }
    })

    return (
        <div className="create-account-modal label-outside none">
            <div className="overlay">
                <div className="modal">
                    <div className="close-modal-icon" onClick={closeModal}>
                        <i className="fas fa-times"></i>
                    </div>
                    <h1 className="modal-header">create account</h1>
                    <form action="#" onSubmit={(e) => createAccount(e)}>
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
                                    value={newFirstName}
                                    onChange={handleChange}
                                 />
                            </div>
                            <div className="newLastName column">
                                <label htmlFor="newLastName">Last Name</label>
                                <input
                                    type="text"
                                    name="newLastName"
                                    value={newLastName}
                                    onChange={handleChange}
                                 />
                            </div>
                        </div>
                        <div className="modal-row modal-row3 column">
                            <label htmlFor="new-date-of-birth">Date of Birth</label>
                            <div className="date-inputs">
                                <div className="select-arrow-container">
                                    <select name="newBirthdayMonth" className="month-input">
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
                                    className="day-input"
                                    type="number" 
                                    name="newBirthdayDay" 
                                    value={newBirthdayDay}
                                    placeholder="Day"
                                    onChange={handleChange}
                                 />
                                <input
                                    className="year-input"
                                    type="numer" 
                                    name="newBirthdayYear" 
                                    value={newBirthdayYear}
                                    placeholder="Year"
                                    onChange={handleChange}
                                 />
                            </div>
                        </div>
                        <div className="modal-row modal-row4 column">
                            <label htmlFor="newusername">username</label>
                            <input
                                type="text" 
                                name="newUsername"
                                value={newUsername}
                                onChange={handleChange}
                             />
                        </div>
                        <div className="modal-row modal-row5 column">
                            <label htmlFor="newEmail">Email</label>
                            <input
                                type="email" 
                                name="newEmail" 
                                value={newEmail}
                                onChange={handleChange}
                             />
                        </div>
                        <div className="modal-row modal-row6 column">
                            <label htmlFor="newPassword">Password</label>
                            <input
                                type="password" 
                                name="newPassword" 
                                value={newPassword}
                                onChange={handleChange}
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