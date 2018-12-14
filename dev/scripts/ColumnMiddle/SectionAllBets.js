import React from 'react';

const SectionAllBets = (
    { allBets,
    todaysDate, 
    todaysDay,
    todaysMonth,
    todaysYear,
    userID,
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
                        const userPlaceduserID = bet.userPlaced.split(" / ")[0]
                        const userPlacedusername = bet.userPlaced.split(" / ")[1]

                        return (
                            <li key={i} className="bet">
                                <div className="flex">
                                    <p className="bet-text-left">Bet: </p>
                                    <p className="bet-text-right">{bet.bet}</p>
                                </div>
                                <div className="flex">
                                    <p className="bet-text-left">Amount: </p>
                                    <p className="bet-text-right">{bet.amount} Tokens</p>
                                </div>
                                <div className="flex">
                                    <p className="bet-text-left">Expires: </p>
                                    {todaysDate === bet.expires ?
                                        <p className="today">Today</p>
                                        : year === todaysYear && month === todaysMonth && day === todaysDay + 1 ?
                                            <p className="tomorrow">Tomorrow</p>
                                            : <p className="bet-text-right">{bet.expires}</p>
                                    }
                                </div>
                                {userID === userPlaceduserID ? 
                                    <div className="flex">
                                        <p className="bet-text-left">Placed By: </p>
                                        <p className="bet-text-right">YOU!</p>
                                    </div>
                                : <div className="flex">
                                    <p className="bet-text-left">Placed By: </p>
                                    <p className="bet-text-right">{userPlacedusername}</p>
                                </div>
                                }
                                {userID !== userPlaceduserID ? <button onClick={() => acceptBet(bet)}>Accept Bet</button> : null}
                                
                                
                                
                            </li>
                        )
                    })
                : null}
            </ul>
        </div>
    )
}

export default SectionAllBets;