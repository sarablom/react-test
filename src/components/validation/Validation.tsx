import { useState } from 'react'

function Validation() {

    const [isValid, setIsValid] = useState(false);
    const [message, setMessage] = useState(true);

    function onChangeHandler (e: any) {
        setMessage(false);
        if (/^[a-zA-Z\s]*$/.test(e.target.value)) {  
            setIsValid(true);
        } else {
            setIsValid(false); 
            setMessage(true);           
        }       
    }

    return (
        <form>
            <input type="text" onChange={(e) => onChangeHandler(e)} className={isValid ? "valid" : "invalid"} />
            {message ? <p>"Var vänlig skriv ditt namn"</p> : null}
        </form>
    )
}

export default Validation
