import React from 'react';

const PlaceBet = (props) => {
    return (
        <div>
            <h1>PlaceBet</h1>
            <form onSubmit={props.acceptBet}>
                <div className="bet">
                    <label htmlFor="bettingInput">What Is Your Bet?</label>
                    <input
                        type="text"
                        name="bettingInput"
                        value={props.bettingInput}
                        onChange={props.handleChange}
                    />
                </div>
                <div className="monetary-value">
                    <label htmlFor="monetaryValueOfBet">Amount In Tokens</label>
                    <input
                        type="number"
                        name="monetaryValueOfBet"
                        value={props.monetaryValueOfBet}
                        onChange={props.handleChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>

            {/* <ul>
                {props.allBets.map((bet, i) => {
                    return (
                        <li key={i}>{bet.bet}, {bet.value}</li>
                    )
                })}
            </ul> */}
        </div>
    )
}

export default PlaceBet;
