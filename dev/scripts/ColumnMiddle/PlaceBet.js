import React from 'react';

const PlaceBet = (
    { handleChange,
    placeBet,
    bettingInput,
    monetaryValueOfBet,
    allBets,
    dayBetComplete,
    yearBetComplete,
    todaysMonth,
    todaysDay,
    todaysYear }
) => {
    $('button').on('mouseover', () => {
        $('button:after').css({'display': 'block'})
    })

    return (
        <section className="place-bet">
            <h1>PlaceBet</h1>
            <form onSubmit={(e) => placeBet(e)} className="label-outside">
                <div className="bet row">
                    <label htmlFor="bettingInput">What Is Your Bet?</label>
                    <input
                        type="text"
                        name="bettingInput"
                        value={bettingInput}
                        onChange={handleChange}
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
                        />
                    </div>
                    <div className="date-bet-complete date-inputs">
                        <label htmlFor="date-bet-complete">What Day Does Your Bet Take Place</label>
                        <div className="date-inputs">
                            <div className="select-arrow-container">
                                <select name="monthBetComplete" className="month-input">
                                    {todaysMonth === 1 ? 
                                        <option value="1" selected="selected">January</option>
                                        : <option value="1">January</option>
                                    }
                                    {todaysMonth === 2 ?
                                        <option value="2" selected="selected">February</option>
                                        : <option value="2">February</option>
                                    }
                                    {todaysMonth === 3 ?
                                        <option value="3" selected="selected">March</option>
                                        : <option value="3">March</option>
                                    }
                                    {todaysMonth === 4 ?
                                        <option value="4" selected="selected">April</option>
                                        : <option value="4">April</option>
                                    }
                                    {todaysMonth === 5 ?
                                        <option value="5" selected="selected">May</option>
                                        : <option value="5">May</option>
                                    }
                                    {todaysMonth === 6 ?
                                        <option value="6" selected="selected">June</option>
                                        : <option value="6">June</option>
                                    }
                                    {todaysMonth === 7 ?
                                        <option value="7" selected="selected">July</option>
                                        : <option value="7">July</option>
                                    }
                                    {todaysMonth === 8 ?
                                        <option value="8" selected="selected">August</option>
                                        : <option value="8">August</option>
                                    }
                                    {todaysMonth === 9 ?
                                        <option value="9" selected="selected">September</option>
                                        : <option value="9">September</option>
                                    }
                                    {todaysMonth === 10 ?
                                        <option value="10" selected="selected">October</option>
                                        : <option value="10">October</option>
                                    }
                                    {todaysMonth === 11 ?
                                        <option value="11" selected="selected">November</option>
                                        : <option value="11">November</option>
                                    }
                                    {todaysMonth === 12 ?
                                        <option value="12" selected="selected">December</option>
                                        : <option value="12">December</option>
                                    }
                                    {/* <option value="2">February</option>
                                    <option value="3">March</option>
                                    <option value="4">April</option>
                                    <option value="5">May</option>
                                    <option value="6">June</option>
                                    <option value="7">July</option>
                                    <option value="8">August</option>
                                    <option value="9">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option> */}
                                </select>
                                <i className="fas fa-angle-down birthday-arrow"></i>
                            </div>
                            <input
                                className="day-input"
                                type="number"
                                name="dayBetComplete"
                                value={dayBetComplete || todaysDay }
                                onChange={handleChange}
                                // required
                            />
                            <input
                                className="year-input"
                                type="number"
                                name="yearBetComplete"
                                value={yearBetComplete || todaysYear }
                                onChange={handleChange}
                                // required
                            />
                        </div>
                    </div>
                </div>
                <button type="submit" className="modal-button light-blue">Place Bet</button>
            </form>

            <ul>
                {allBets !== 0 ? 
                allBets.map((bet, i) => {
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
