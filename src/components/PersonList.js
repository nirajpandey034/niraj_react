import React from 'react'
import Person from './Person'

function PersonList() {
    const Persons = [
        {
            id:1,
            name:'Niraj',
            age:23
        },
        {
            id:2,
            name:'Rahul',
            age:27
        },
        {
            id:3,
            name:'Neha',
            age:26
        }
    ]
    //map function takes each element and applies the same method to all of them, like here calling the Person.js and returns an array
    let persons  = Persons.map(person => <Person person = {person} />)
    return (
        <div>
            {persons}
        </div>
    )
}
export default PersonList