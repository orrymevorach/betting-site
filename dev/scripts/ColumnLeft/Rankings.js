import React from 'react';

const Rankings = ({ dbRefUsers }) => {
    let allUsers = []
    
    dbRefUsers.on('value', snapshot => {
        const data = snapshot.val()
        for(let key in data) {
            allUsers.push(data[key])
        }
    })

    setTimeout(() => {
        allUsers
        .sort((a,b) => {
            const balanceA = parseInt(a.accountBalance)
            const balanceB = parseInt(b.accountBalance)

            if(balanceB > balanceA) {
                return 1;
            }
            else {
                return -1;
            }
        })
    }, 3000)


    return (
        <div className="rankings">
            <h1>Rankings</h1>
            <ol>
                {allUsers
                .sort((a, b) => {
                    const balanceA = parseInt(a.accountBalance)
                    const balanceB = parseInt(b.accountBalance)

                    if (balanceA < balanceB) {
                        return 1;
                    }
                    else {
                        return - 1;
                    }
                })
                .map((bet, i) => {
                    return (
                        <p key={i}>{i + 1}. {bet.username} {bet.accountBalance} Tokens</p>
                    )
                })
                }
            </ol>
        </div>
    )
}

export default Rankings;