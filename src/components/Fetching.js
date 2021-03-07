import React from 'react'
import './myStyle.css'

function Fetching({data}) {
    let className = '';
    (data.id % 2 == 0) ? className = 'primary' : className = 'secondary'
    return (
        <div>
                         <h2 className =  {className}> Hello {data.first_name} {data.last_name}, your assigned email is: {data.email}</h2>
        </div>
    )
}

export default Fetching
