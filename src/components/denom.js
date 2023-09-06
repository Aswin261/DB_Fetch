import React, { useState } from 'react';

const GetChange = () => {
  const [amount, setAmount] = useState(0);
  const [fifty, setFifty] = useState(false);
  const [twenty, setTwenty] = useState(false);
  const [dispensed, setDispensed] = useState([]);
  const [count,setCount]=useState(0)
  const[arr,setArr]=useState(0);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    setDispensed("");
  };
  const handleCount = (e) => {
    setCount(e.target.value);
  };
  const handleArr = (e) => {
    setArr(e.target.value);
  };
  
  const handleFiftyChange = (e) => {
    setFifty(e.target.checked);
  };

  const handleTwentyChange = (e) => {
    setTwenty(e.target.checked);
  };

  const handleClick = () => {
    let remaining = amount;
    let bills = [];
    let amt;
    while (remaining !==0) {
      if (fifty && remaining >0) {
            amt=count*50
            remaining -= amt;
            bills.push(amt);
      } 
      if (twenty && remaining>0) {
        amt=arr*20
        remaining -= amt;
        bills.push(amt);
      } 
      else if((twenty&&fifty)&&remaining>0){
        amt=(arr*20)+(count)*50;
        remaining-=amt;
        bills.push(amt)
      }
      else{
        break;
      }
    }
    setDispensed(bills);
  };

  return (
    <div>
      <input type="number" onChange={handleAmountChange} />
      <br />
      <label>
        <input type="checkbox" onChange={handleFiftyChange} /> 50
        <input type="number" class="w-25 m-1 p-0 " value={count} onChange={handleCount}/>
      </label>
      <br />
      <label>
        <input type="checkbox" onChange={handleTwentyChange} /> 20
        <input type="number" class="w-25 m-1 p-0 " value={arr} onChange={handleArr}/>
      </label>
      <br />
      <button onClick={handleClick}>Dispense</button>
      <p>Dispensed:{dispensed.join(" ")}</p>
    </div>
  );
};

export default GetChange;
