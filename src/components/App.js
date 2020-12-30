import React, {useState} from 'react';
import binaryToDecimal from '../selectors/binaryToDecimal';

const App = () => {

    const [binaryNumber, setBinaryNumber] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {};

    const handleBinaryNumber = (e) => {
        if (e.target.value.match(/^[0-1]{1,}$/g) || e.target.value=="") {
            setBinaryNumber(e.target.value);
            setError("")
        }else{
            setError("Only Binary Numbers are Accepted");
        }
    };


    return (
        <div>
            <form> 
                <label>
                    <div>
                        Enter Binary Number:
                    </div>
                    <input
                        className="input-binary"
                        type="text"
                        placeholder="Binary Number"
                        value={binaryNumber}
                        name="binaryNumber"
                        onChange={handleBinaryNumber} />
                    <div>
                        {error && <h3>{error}</h3>}
                    </div>
                </label>
                <div>
                    <h1>Decimal Number: {binaryToDecimal(binaryNumber)}</h1>
                </div>
            </form>
        </div>
    )
}

export default App
