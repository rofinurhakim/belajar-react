import {useState} from 'react'

const OnChangePerson = () => {
    const initialState = [
{    name: "michael",
    age: 20

},
{
    name: "rofi" ,
    age: 22

}

]
const [person, setPerson] = useState(initialState)
const changePerson = () => {
    setPerson([
        {name : 'kesya', age: '21'},
        {name : 'dimas', age: '21'},
        {name : 'ahmad', age: '21'}
        
    ])
}
    return (
        <>
        {
            person.map(item => (
                <p>nama saya{item.name} umur saya {item.age}</p>
            ))
        }
         <button onClick ={changePerson}>Ganti State</button>
         </>
            );
   
}
export default OnChangePerson
