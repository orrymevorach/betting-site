import React from 'react';

const BetLessModal = () => {
    function closeModal() {
        $('.bet-less-modal').addClass('none')
    }
    
    $(document).on('keydown', function (e) {
        if (e.which === 27) {
            closeModal()
        }
    })

    return (
        <div className="bet-less-modal none">
            <div className="overlay">
                <div className="modal">
                    <div className="close-modal-icon" onClick={closeModal}>
                        <i className="fas fa-times"></i>
                    </div>
                    <h1>YOU'RE TOO POOR FOR THAT BET FUCKER!!</h1>
                </div>
            </div>
        </div>
    )
}

export default BetLessModal;