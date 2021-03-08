import {useState} from 'react'
//user input
const From = () => {

    const [form, setform] = useState ({
        id: '',
        password: '',
    });
    const {id, password} = useState (form);
    


    const onChangeInput = (e) => {
        setform ({
            ...form,
            [e.target.name] : e.target.value
        });
    }
    console.log (form)
    
    //user input
    return (
        <>        
        <div>
            <h1>Form Sederhana</h1>
            <form onSubmit ={ () =>
                alert ({ id, password })
            }>
             <div>
             <label htmlFor="id">Id : </label>
             {form.id}
             <br></br>
             <input type="text" 
             name="id" 
             onChange={onChangeInput}
             value={id}>
             </input>
            </div>
            <div>
             <label htmlFor="password"> PASSWORD :</label>
             {form.password}
             <br></br>
             <input type="text" 
             name="password" 
             onChange={onChangeInput}
             value={password}>
             </input>
            </div>
            <div>
            <button onSubmit={onChangeInput}>Submit</button>
            </div>
            </form>
        </div>
        </>
    )
}

export default From