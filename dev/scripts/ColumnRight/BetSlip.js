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
    todaysYear
}) => {
    return (
        <section className="betslip">
            <div className="betslip-main-tab">
                <i className="fas fa-receipt"></i>
                <h2>Betslip</h2>
            </div>
            
            <Router>
                <div>
                    <ul className="betslip-tabs">
                        <li className="tab"><NavLink to="/" exact activeClassName="active-bet-tab">Active Bets</NavLink></li>
                        <li className="tab"><NavLink to="/userInactiveBets" exact activeClassName="active-bet-tab">Inactive Bets</NavLink></li>
                        <li className="tab"><NavLink to="/userExpiringBets" exact activeClassName="active-bet-tab">Expired Bets</NavLink></li>
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