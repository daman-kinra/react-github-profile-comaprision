import React, {useState} from 'react';
import axios from 'axios';
import Card from './Card';
import './App.css'

function App() {
    const [user1, setUser1] = useState({});
    const [user2, setUser2] = useState({});
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    // const [flag, setFlag] = useState(false)

    const handleClick = () =>{
        if(input1 !== ''){
            axios.get(`https://api.github.com/users/${input1}`)
            .then(data =>{
                console.log(data);
                setUser1(data);
                setInput1('')
            })}
            if(input2 !== ''){
            axios.get(`https://api.github.com/users/${input2}`)
            .then(data =>{
                console.log(data);
                setUser2(data);
                setInput2('')
            })}  
    }

    const handleInput = (evt) =>{
        if(evt.key ==='Enter'){
            if(input1 !== ''){
            axios.get(`https://api.github.com/users/${input1}`)
            .then(data =>{
                console.log(data);
                setUser1(data);
                setInput1('')
            })}
            if(input2 !== ''){
            axios.get(`https://api.github.com/users/${input2}`)
            .then(data =>{
                console.log(data);
                setUser2(data);
                setInput2('')
            })}  
        }
    }

    return (
        <div className='app'>
            <div className="inputs">
            <input type="text"
            value={input1}
            onChange={e=> setInput1(e.target.value)}
            onKeyPress={handleInput}
            placeholder='Enter User 1....'
            className='inp1'
            />
            <input type="text"
            value={input2}
            onChange={e=> setInput2(e.target.value)}
            onKeyPress={handleInput}
            placeholder='Enter User 2....'
            className='inp2'
            />
            </div>
            <div className="btn">
            <button onClick={handleClick}>Compare</button>
            </div>
            <div className="card-cover">
            {user1.status === 200 ? (
                <div className="user1">
                    <Card user={user1}/>
                </div>
                
            ):('')}
            {user2.status === 200 ? (
                <div className="user2">
                    <Card user={user2}/>
                </div>
                
            ):('')}
            </div> 
        </div>
    )
}

export default App
