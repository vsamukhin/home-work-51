import React, {useState} from 'react';
import Circle from "./Circle/Circle";
import './App.css';

const App = () => {
    const [numbers , setNumbers] = useState<number[]>([]);

    const getRandomNumbers = (min:number,max:number) => {
        let num:number[] = [];
        while (num.length !== 5){
            const number:number = Math.floor(min + Math.random() * (max - min));
            if (!num.includes(number)){
                num.push(number);
            }
        }
        return num;
    };
    const changeNumbers = () => {
        let numberArray:number[] = getRandomNumbers(5,36);
        numberArray.sort((a:number,b:number) => a-b);
        setNumbers(numberArray);
    };

    return(
        <div className="App">
            <div className="container">
                {numbers.map((number:number)=> (
                    <Circle key={number} num={number}/>
                ))}
                <button onClick={changeNumbers}  type="button">New numbers</button>
            </div>
        </div>
    );
};

export default App;
