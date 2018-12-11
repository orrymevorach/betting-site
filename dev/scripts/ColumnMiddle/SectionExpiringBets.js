import React from 'react';

const SectionExpiringBets = ({ allBets }) => {
    return (
        <div>
            <ul>
                {allBets.map(bet => {
                    return (
                        <li>
                            {bet.betText}
                            <br></br>
                            {bet.amount} tokens
                            <br></br>
                            {bet.expires}
                            <br></br>
                            {bet.userPlaced}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SectionExpiringBets;