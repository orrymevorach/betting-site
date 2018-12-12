import React from 'react';
import { NavLink } from 'react-router-dom';

class Tabs extends React.Component {
    render() {
        return (
            <nav className="tabs">
                <ul>
                    <li className="tab"><NavLink to="/" exact activeClassName="active-tab"><h2>All Bets</h2></NavLink></li>
                    <li className="tab"><NavLink to="/newestBets" exact activeClassName="active-tab"><h2>Newest Bets</h2></NavLink></li>
                </ul>
            </nav>
        )

    }
}

export default Tabs;