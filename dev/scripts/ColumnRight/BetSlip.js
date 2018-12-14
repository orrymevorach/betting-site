import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import ActiveBets from './ActiveBets';
import InactiveBets from './InactiveBets';
import ExpiredBets from './ExpiredBets';

const BetSlip = (
    { allBets, 
    userID,
    todaysDate,
    todaysMonth,
    todaysDay,
    todaysYear,
    selectWinner,
    accountBalance
}) => {

    return (
        <section className="betslip">
            <div className="flex">
                <div className="betslip-main-tab">
                    <i className="fas fa-receipt"></i>
                    <h2>Betslip</h2>
                </div>
                <div className="betslip-wallet"><h3>Balance: {accountBalance} Tokens</h3></div>
            </div>
            
            <Router>
                <div>
                    <ul className="betslip-tabs">
                        <li className="tab">
                            <NavLink to="/" exact activeClassName="active-bet-tab">Active Bets</NavLink>
                            <div className="notification notification1"></div>
                        </li>
                        <li className="tab">
                            <NavLink to="/userInactiveBets" exact activeClassName="active-bet-tab">Inactive Bets</NavLink>
                            <div className="notification notification2"></div>
                        </li>
                        <li className="tab">
                            <NavLink to="/userExpiringBets" exact activeClassName="active-bet-tab">Expired Bets</NavLink>
                            <div className="notification notification3"></div>
                        </li>
                    </ul>    
                
                    <div className="bets-section">
                        <Route path="/" exact render={() => {
                            return (
                                <ActiveBets 
                                    allBets={allBets}
                                    userID={userID}
                                    todaysDate={todaysDate}
                                    todaysMonth={todaysMonth}
                                    todaysDay={todaysDay}
                                    todaysYear={todaysYear}
                                    selectWinner={selectWinner}
                                />
                            )
                        }} />
                        <Route path="/userInactiveBets" exact render={() => {
                            return (
                                <InactiveBets
                                    allBets={allBets}
                                    userID={userID}
                                    todaysDate={todaysDate}
                                    todaysMonth={todaysMonth}
                                    todaysDay={todaysDay}
                                    todaysYear={todaysYear}
                                />
                            )
                        }} />
                        <Route path="/userExpiringBets" exact render={() => {
                            return (
                                <ExpiredBets
                                    allBets={allBets}
                                    userID={userID}
                                    todaysDate={todaysDate}
                                    todaysMonth={todaysMonth}
                                    todaysDay={todaysDay}
                                    todaysYear={todaysYear}
                                />
                            )
                        }} />
                    </div>
                </div>
            </Router>
            
            
            
        </section>
    )
}


export default BetSlip;