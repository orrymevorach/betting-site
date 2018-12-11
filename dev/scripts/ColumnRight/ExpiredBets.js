import React from 'react';

const ExpiredBets = (
    { userBets,
    todaysDate,
    todaysMonth,
    todaysDay,
    todaysYear }
) => {
    
    return (
        <ul>
            {userBets ?
                userBets.activeBets
                    .filter(bet => {
                        const month = bet.expires.split("/")[0]
                        const day = bet.expires.split("/")[1]
                        const year = bet.expires.split("/")[2]
                        if (year === todaysYear && month === todaysMonth && day >= todaysDay) {
                            return false;
                        }
                        else if (year === todaysYear && month === todaysMonth && day < todaysDay) {
                            return true;
                        }
                        else if (year === todaysYear && month > todaysMonth) {
                            return false;
                        }
                        else if (year === todaysYear && month < todaysMonth) {
                            return true;
                        }
                        else if (year > todaysYear) {
                            return false;
                        }
                        else if (year < todaysYear) {
                            return true;
                        }
                    })
                    .sort((a, b) => {
                        const yearA = a.expires.split("/")[2]
                        const yearB = b.expires.split("/")[2]
                        const monthA = a.expires.split("/")[0]
                        const monthB = b.expires.split("/")[0]
                        const dayA = a.expires.split("/")[1]
                        const dayB = b.expires.split("/")[1]
                        if (yearA === yearB && monthA === monthB && dayA > dayB) {
                            return 1;
                        }
                        else if (yearA > yearB) {
                            return 1;
                        }
                        else if (yearA === yearB && monthA > monthB) {
                            return 1;
                        }
                    })
                    .map((bet, i) => {
                        return (
                            <li key={i} className="bet">
                                <div className="bet-text">
                                    <p className="bet-text-left">Bet: </p>
                                    <p className="bet-text-right">{bet.text}</p>
                                </div>
                                <div className="bet-text">
                                    <p className="bet-text-left">Amount: </p>
                                    <p className="bet-text-right">{bet.amount} Tokens</p>
                                </div>
                                <div className="bet-text">
                                    <p className="bet-text-left">Expires: </p>
                                    {todaysDate === bet.expires ?
                                        <p className="bet-text-right">{bet.expires} <span className="today">Today</span></p>
                                        : <p className="bet-text-right">{bet.expires}</p>
                                    }
                                </div>
                            </li>
                        )
                    })
                : null
            }
        </ul>
    )
}

export default ExpiredBets;