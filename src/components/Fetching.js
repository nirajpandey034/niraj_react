import React from 'react'

function Fetching({data}) {
    return (
        <div>
                         <h2>Hello {data.first_name} {data.last_name}, your assigned email is: {data.email}</h2>
        </div>
    )
}

export default Fetching
