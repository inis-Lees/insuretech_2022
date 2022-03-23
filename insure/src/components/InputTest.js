import React, {useState} from 'react'

const InputTest = () => {
    //let text = "test";
    const [text, setText] = useState('초기값');

    const handlerChange = (event) => {
        const {value} = event.target;
        setText(value);
    }
    
    return (
        <div>
            <p>{text}</p>
            <input onChange={handlerChange} />
            <a href='/'>홈</a>&nbsp;&nbsp;&nbsp;
            <a href='/test2'>이동</a>
        </div>
    );
};

export default InputTest