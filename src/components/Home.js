import React, {useState} from 'react';
import TextField from '@mui/material/TextField';

// learning events
// learning states
// learning hooks
export const Home = () => {
    const handleUpClick = () => {
        console.log("Uppercase was clicked")
        setText("You have clicked on button")
    }

    const handleOnChange = (event) => {
        console.log("On change")
        setText(event.target.value)
    }

    const [text, setText] = useState('None');
    return (
        <>
        <div style={{ display: 'grid', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            value={text}
            onChange={handleOnChange}
            />
        </div>

        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>

        </>
    );
};