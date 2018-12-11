import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import ActiveBets from './ActiveBets';
import ExpiredBets from './ExpiredBets';

const BetSlip = (
    { userBets, 
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
                        <li className="tab"><NavLink to="/" exact activeClassName="active-bet-tab"><h2>Active Bets</h2></NavLink></li>
                        <li className="tab"><NavLink to="/userExpiringBets" exact activeClassName="active-bet-tab"><h2>Expired Bets</h2></NavLink></li>
                    </ul>    
                
                    <div className="bets-section">
                        <Route path="/" exact render={() => {
                            return (
                                <ActiveBets 
                                    userBets={userBets}
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
                                    userBets={userBets}
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