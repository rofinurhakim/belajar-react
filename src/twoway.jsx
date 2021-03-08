import {useState} from 'react'
const TwoWay = () => {
    const initialPersons = [
        {
            Name: 'Rofi',
            age : '23'
        },
        {
            Name: 'Dimas',
            age : '24'
        },
        {
            Name: 'Deky',
            age : '25'
        },
    ]
    const initialPerson = {
        name : '',
        age : ''
    }
    const [person, setPerson] = useState (initialPerson)
    const [persons, setPersons] = useState (initialPersons)



    
    const onChangeInput = (e) => {
        setPerson({
            ...person,
            [e.target.name] : e.target.value
        }

        )
    }
    const addPerson = () => {
        setPersons([
            ...persons,
            person
        ])
        setPerson(initialPerson)
    }
    return (
        <>
        {
            persons.map(item =>(
                <p>Nama Saya : {item.name} Umur Saya : {item.age}</p>
            ))
        }
        <div>
            <div>
            {person.age}
                <label htmlfor="name">Name</label>
                <input
                type="text"
                name="name"
                id="name"
                onChange={onChangeInput}
                value={person.name}>
                </input>
            </div>
            <div>
                <label htmlfor="age">Age</label>
                {person.age}
                <input
                type="text"
                name="age"
                id="age"
                onChange={onChangeInput}
                value={person.age}>
                </input>
            </div>
        </div>

        <button onClick={addPerson}>Add Person</button>
       
        </>
    )
    }
   

export default TwoWay
