import React from 'react';
import { NavLink } from 'react-router-dom';
import SectionExpiringBets from './SectionExpiringBets';
import SectionNewestBets from './SectionNewestBets';

class Tabs extends React.Component {
    render() {
        return (
            <nav className="tabs">
                <ul>
                    <li className="tab"><NavLink to="/" exact activeClassName="active-tab"><h2>Expiring Bets</h2></NavLink></li>
                    <li className="tab"><NavLink to="/newestBets" exact activeClassName="active-tab"><h2>Newest Bets</h2></NavLink></li>
                </ul>
            </nav>
        )

    }
}

export default Tabs;