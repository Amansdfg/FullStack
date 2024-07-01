import { useState } from 'react';

function AddUni({universities}) {
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    const add = ()=>{
        fetch("http://localhost:8080/universities",{
            method:"POST",
            headers:{"content-type" :"application/json"},
            body:JSON.stringify({name,text}),
        })
            .then(response =>{
                if(!response.ok){
                    throw new Error("Network Error");
                }
                setSuccess(true);
                setText("");
                setName("");
            })
            .catch(error=>{
                setError(error.message);
            })
    }

    return (
        <div className="d-flex justify-content-center align-items-center flex-column" style={{height: "70vh",width:"100vw"}}>
            <h2>Add a New University</h2>
            {success && <p>University added successfully!</p>}
            {error && <p>Error: {error}</p>}
            <form onSubmit={add} className="shadow p-2  rounded" style={{width:"300px"}}>
                <div>
                    <label className="form-label">
                        Name:
                    </label>
                        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />

                </div>
                <div className="mt-3">
                    <label className="form-label">
                        Description:
                    </label>
                        <textarea value={text} className="form-control" onChange={(e) => setText(e.target.value)} required />
                </div>
                <div className="mt-3">
                <button type="submit " className="btn btn-outline-secondary">Add University</button>
                </div>
            </form>
        </div>
    );
}

export default AddUni;
