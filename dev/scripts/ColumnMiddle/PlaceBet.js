import React from 'react';
import BetLessModal from './BetLessModal';

const PlaceBet = (
    { handleChange,
    placeBet,
    bettingInput,
    monetaryValueOfBet,
    dayBetComplete,
    yearBetComplete,
    todaysMonth,
    todaysDay,
    todaysYear,
    accountBalance
 }
) => {
    function bet(e) {
        e.preventDefault();
        const amount = e.target[1].value
        if(parseInt(amount) > parseInt(accountBalance)) {
            $('.bet-less-modal').removeClass('none')
        }
        else {
            placeBet(e)
        }
    }

    return (
        <section className="place-bet">
            <BetLessModal />
            <h1>PlaceBet</h1>
            <form onSubmit={(e) => bet(e)} className="label-outside">
                <div className="bet row">
                    <label htmlFor="bettingInput">What Is Your Bet?</label>
                    <input
                        type="text"
                        name="bettingInput"
                        value={bettingInput}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="row row2 clearfix">
                    <div className="monetary-value">
                        <label htmlFor="monetaryValueOfBet">Amount In Tokens</label>
                        <input
                            type="number"
                            name="monetaryValueOfBet"
                            value={monetaryValueOfBet}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="date-bet-complete date-inputs">
                        <label htmlFor="date-bet-complete">What Day Does Your Bet Take Place</label>
                        <div className="date-inputs">
                            <div className="select-arrow-container">
                                <select name="monthBetComplete" className="month-input" defaultValue={todaysMonth} required>
                                    <option value="1">January</option>
                                    <option value="2">February</option>
                                    <option value="3">March</option>
                                    <option value="4">April</option>
                                    <option value="5">May</option>
                                    <option value="6">June</option>
                                    <option value="7">July</option>
                                    <option value="8">August</option>
                                    <option value="9">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                </select>
                                <i className="fas fa-angle-down birthday-arrow"></i>
                            </div>
                            <input
                                className="day-input"
                                type="number"
                                name="dayBetComplete"
                                value={dayBetComplete || todaysDay }
                                onChange={handleChange}
                                required
                            />
                            <input
                                className="year-input"
                                type="number"
                                name="yearBetComplete"
                                value={yearBetComplete || todaysYear }
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                </div>
                <button type="submit" className="modal-button light-blue">Place Bet</button>
            </form>

        </section>
    )
}

export default PlaceBet;
