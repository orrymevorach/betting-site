import React from 'react';

const PlaceBet = (props) => {
    return (
        <section className="place-bet">
            <h1>PlaceBet</h1>
            <form onSubmit={(e) => props.acceptBet(e)} className="label-outside">
                <div className="bet row">
                    <label htmlFor="bettingInput">What Is Your Bet?</label>
                    <input
                        type="text"
                        name="bettingInput"
                        value={props.bettingInput}
                        onChange={props.handleChange}
                    />
                </div>
                <div className="row row2 clearfix">
                    <div className="monetary-value">
                        <label htmlFor="monetaryValueOfBet">Amount In Tokens</label>
                        <input
                            type="number"
                            name="monetaryValueOfBet"
                            value={props.monetaryValueOfBet}
                            onChange={props.handleChange}
                        />
                    </div>
                    <div className="date-bet-complete date-inputs">
                        <label htmlFor="date-bet-complete">What Day Does Your Bet Take Place</label>
                        <div className="date-inputs">
                            <div className="select-arrow-container">
                                <select name="monthBetComplete" className="month-input">
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
                                name="dayBetComplete"
                                value={props.dayBetComplete}
                                placeholder="Day"
                                onChange={props.handleChange}
                                // required
                            />
                            <input
                                className="year-input"
                                type="numer"
                                name="yearBetComplete"
                                value={props.yearBetComplete}
                                placeholder="Year"
                                onChange={props.handleChange}
                                // required
                            />
                        </div>
                    </div>
                </div>
                <button type="submit" className="modal-button light-blue">Place Bet</button>
            </form>

            <ul>
                {props.allBets !== 0 ? 
                props.allBets.map((bet, i) => {
                    return (
                        <li key={i}>{bet.bet}, {bet.value}</li>
                    )
                })
                : null }
                
            </ul>
        </section>
    )
}

export default PlaceBet;
