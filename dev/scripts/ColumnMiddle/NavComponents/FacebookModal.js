import React from 'react';

const FacebookModal = (props) => {
    function loginWithFacebook(e) {
        e.preventDefault();
        const title = e.target[0].value
        const username = e.target[1].value
        const month = e.target[2].value
        const day = e.target[3].value
        const year = e.target[4].value
        
        props.facebookAdditionalUserInformation(username, title, month, day, year)
    }
    
    return (
        <div className="facebook-modal label-outside none">
            <div className="overlay">
                <div className="modal">
                    <h1 className="modal-header">More Information</h1>
                    <form action="#" onSubmit={loginWithFacebook}>
                        <div className="info-container">
                            <div className="modal-row modal-row1 column">
                                <label htmlFor="newTitle">Title</label>
                                <div className="select-arrow-container">
                                    <select name="newTitle" required>
                                        <option value="Mr.">Mr.</option>
                                        <option value="Mrs.">Mrs.</option>
                                        <option value="Ms.">Ms.</option>
                                    </select>
                                    <i className="fas fa-angle-down title-arrow"></i>
                                </div>
                            </div>
                            <div className="modal-row modal-row2 column">
                                <label htmlFor="newUsername">Please Enter A Username</label>
                                <input
                                    type="text"
                                    name="newUsername"
                                    value={props.newUsername}
                                    onChange={props.handleChange}
                                    required
                                />
                            </div>
                            <div className="modal-row modal-row3 column">
                                <label htmlFor="new-date-of-birth">Date of Birth</label>
                                <div className="birthday-inputs">
                                    <div className="select-arrow-container">
                                        <select name="newBirthdayMonth" required>
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
                                        required
                                    />
                                    <input
                                        type="numer"
                                        name="newBirthdayYear"
                                        value={props.newBirthdayYear}
                                        placeholder="Year"
                                        onChange={props.handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <button className="modal-button light-blue">Submit</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FacebookModal;