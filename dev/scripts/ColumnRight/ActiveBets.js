import React from 'react';

const ActiveBets = (
    { allBets,
    userID,
    todaysDate,
    todaysMonth,
    todaysDay,
    todaysYear
 }) => {
    return (
        <ul>
            {allBets ?
                allBets
                .filter(bet => {
                    const month = parseInt(bet.expires.split("/")[0])
                    const day = parseInt(bet.expires.split("/")[1])
                    const year = parseInt(bet.expires.split("/")[2])
                    
                    // Check if bet is active
                    const userPlacedID = bet.userPlaced.split(" / ")[0]
                    const userAcceptedID = bet.userAccepted.split(" / ")[0]
                    // check if the bet involves the user
                    if(userPlacedID === userID || userAcceptedID === userID) {
                        // Check if the bet has been accepted
                        if (bet.status === 'Active') {
                            // check if the bet has not yet expired
                            if (year === todaysYear && month === todaysMonth && day >= todaysDay) {
                                return true;
                            }
                            else if (year >= todaysYear && month > todaysMonth) {
                                return true;
                            }
                            else if (year >= todaysYear) {
                                return true;
                            }
                        }
                    }
                    else {
                        return false; 
                    }
                    
                    
                })    
                .sort((a, b) => {
                    const yearA = parseInt(a.expires.split("/")[2])
                    const yearB = parseInt(b.expires.split("/")[2])
                    const monthA = parseInt(a.expires.split("/")[0])
                    const monthB = parseInt(b.expires.split("/")[0])
                    const dayA = parseInt(a.expires.split("/")[1])
                    const dayB = parseInt(b.expires.split("/")[1])
                    if (yearA === yearB && monthA === monthB && dayA > dayB) {
                        return 1;
                    }
                    else if (yearA === yearB && monthA > monthB) {
                        return 1;
                    }
                    else if (yearA > yearB) {
                        return 1;
                    }
                })
                .map((bet, i) => {
                    const month = parseInt(bet.expires.split("/")[0])
                    const day = parseInt(bet.expires.split("/")[1])
                    const year = parseInt(bet.expires.split("/")[2])
                    const userAcceptedID = bet.userAccepted.split(" / ")[0]
                    const userPlacedID = bet.userPlaced.split(" / ")[0]
                    const userAcceptedusername = bet.userAccepted.split(" / ")[1]
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
                            <div className="flex">
                                <p className="bet-text-left">Challenger:</p>
                                {userID === userPlacedID ?
                                <p className="bet-text-right">{userAcceptedusername}</p>
                                : userID === userAcceptedID ?
                                <p className="bet-text-right">{userPlacedusername}</p>
                                : null }
                            </div>
                            <p>Who is the winner?</p>
                            <div className="buttons-container">
                                <button className="winner-button user-placed-button">{userPlacedusername}</button>
                                <button className="winner-button user-accepted-button">{userAcceptedusername}</button>
                            </div>
                        </li>
                    )
                })
                : null
            }
        </ul>
    )
}

export default ActiveBets;