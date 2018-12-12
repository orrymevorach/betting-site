import React from 'react';

const SectionAllBets = (
    { allBets,
    todaysDate, 
    todaysDay,
    todaysMonth,
    todaysYear,
    username,
    acceptBet
}) => {
    
    return (
        <div>
            <ul>
                {allBets.length != 0 ? 
                    allBets.map((bet, i) => {
                        const month = parseInt(bet.expires.split("/")[0])
                        const day = parseInt(bet.expires.split("/")[1])
                        const year = parseInt(bet.expires.split("/")[2])
                        const placedBy = bet.userPlaced.split(" / ")[1]

                        return (
                            <li key={i} className="bet">
                                <div className="bet-text">
                                    <p className="bet-text-left">Bet: </p>
                                    <p className="bet-text-right">{bet.bet}</p>
                                </div>
                                <div className="bet-text">
                                    <p className="bet-text-left">Amount: </p>
                                    <p className="bet-text-right">{bet.amount} Tokens</p>
                                </div>
                                <div className="bet-text">
                                    <p className="bet-text-left">Expires: </p>
                                    {todaysDate === bet.expires ?
                                        <p className="today">Today</p>
                                        : year === todaysYear && month === todaysMonth && day === todaysDay + 1 ?
                                            <p className="tomorrow">Tomorrow</p>
                                            : <p className="bet-text-right">{bet.expires}</p>
                                    }
                                </div>
                                {username === placedBy ? 
                                    <div className="bet-text">
                                        <p className="bet-text-left">Placed By: </p>
                                        <p className="bet-text-right">YOU!</p>
                                    </div>
                                : <div className="bet-text">
                                    <p className="bet-text-left">Placed By: </p>
                                    <p className="bet-text-right">{placedBy}</p>
                                </div>
                                }
                                {/* {username != placedBy ? <button>Accept Bet</button> : null} */}
                                <button onClick={() => acceptBet(bet.amount, bet.bet, bet.datePlaced, bet.expires, bet.timePlaced, bet.userPlaced)}>Accept Bet</button>
                                
                                
                            </li>
                        )
                    })
                : null}
            </ul>
        </div>
    )
}

export default SectionAllBets;