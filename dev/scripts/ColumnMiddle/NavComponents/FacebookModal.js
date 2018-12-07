import React from 'react';

const FacebookModal = (
    { handleChange, 
    newUsername, 
    newBirthdayDay, 
    newBirthdayYear, 
    facebookAdditionalUserInformation}
) => {
    
    function closeModal() {
        $('.facebook-modal').addClass('none')
    }

    // Close modal on escape
    $(document).on('keydown', function (e) {
        if (e.which === 27) {
            closeModal()
        }
    })

    return (
        <div className="facebook-modal label-outside none">
            <div className="overlay">
                <div className="modal">
                    <div className="close-modal-icon" onClick={closeModal}>
                        <i className="fas fa-times"></i>
                    </div>
                    <h1 className="modal-header">More Information</h1>
                    <form action="#" onSubmit={(e) => facebookAdditionalUserInformation(e)}>
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
                                    value={newUsername}
                                    onChange={handleChange}
                                    required
                                />
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
                            <button type="submit" className="modal-button light-blue">Submit</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FacebookModal;