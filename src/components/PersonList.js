import React from 'react'

function PersonList() {
    let Persons = ['Niraj','Kumar','Pandey']
    let person = Persons.map(person => <h2>{person}</h2>)
    return (
        <div>
            {person}
        </div>
    )
}
export default PersonList