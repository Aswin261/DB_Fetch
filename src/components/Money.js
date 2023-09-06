import React,{useState,useEffect} from 'react'

function Money() {
    const [box1, setBox1] = useState(false);
    const [box3, setBox3] = useState(false);
    const [box4, setBox4] = useState(false);

    const [ten, setTen] = useState(false);
    const [fifty, setFifty] = useState(false);
    const [one100, setOne100] = useState(false);
    const [two100, setTwo100] = useState(false);
    const [five100, setFive100] = useState(false);
    const [two1000, setTwo1000] = useState(false);

 
  const [amount,setAmount]=useState(['1000','5000','10000'])

  const handleAmout=(e)=>{
    setAmount(e.target.checked);
  }

  useEffect(() => { 
var checkbox1 = document.getElementById("1000");
var checkbox2 = document.getElementById("5000");
var checkbox3 = document.getElementById("10000");

  checkbox1.onclick = function() {
    if (checkbox1.checked) {
      checkbox2.disabled = true;
      checkbox3.disabled = true;
    } else {
      checkbox2.disabled = false;
      checkbox3.disabled = false;
    }
  };
  checkbox2.onclick = function() {
    if (checkbox2.checked) {
      checkbox1.disabled = true;
      checkbox3.disabled = true;
    } else {
      checkbox1.disabled = false;
      checkbox3.disabled = false;
    }
  };
 checkbox3.onclick = function() {
  if (checkbox3.checked) {
    checkbox1.disabled = true;
    checkbox2.disabled = true;
  } else {
    checkbox1.disabled = false;
    checkbox2.disabled = false;
  }
};
})

const handleTen = (e) => {
  setTen(e.target.checked);
};
const handleFifty = (e) => {
  setFifty(e.target.checked===true);
};
const handle100 = (e) => {
  setOne100(e.target.checked===true);
};
const handle200 = (e) => {
  setTwo100(e.target.checked);
};
const handle500 = (e) => {
  setFive100(e.target.checked);
};
const handle2000 = (e) => {
  setTwo1000(e.target.checked);
};
const [arr1,setArr1]=useState(0)
const[arr,setArr]=useState(0);
const handleArr1 = (e) => {
  setArr1(e.target.value);
};
const handleArr = (e) => {
  setArr(e.target.value);
};
const [dispensed, setDispensed] = useState([]);
const handleClick = () => {
  let remaining = amount[0];
  let bills = [];
  let amt=1;
  while (remaining !==0) {
    if (fifty && remaining >0) {
          amt=arr1*50
          remaining -= amt;
          bills.push(amt);
    } 
    if (ten && remaining>0) {
      amt=arr*10
      remaining -= amt;
      bills.push(amt);
    } 
    else if((ten&&fifty)&&remaining>0){
      amt=(arr*10)+(arr1)*50;
      remaining-=amt;
      bills.push(amt)
    }
  }
  setDispensed(bills);
};

  return (
  <div>
    <h3 class="mt-5 mx-3">Denomination</h3>
    <div class='border border-warning rounded m-5 p-4 col-lg-10 d-flex text-left'>
      <div>
        <form> 
        <input type="checkbox"  id="1000" value={amount[0]} onChange={()=>handleAmout()} onClick={() => setBox1(!box1)} />
      1000
      {box1 && (
        <div class="text-justify mx-5">
          <div><input type="checkbox"  onChange={handleTen} />10 &nbsp;* &nbsp;<input type="number" class="w-25" value={arr} onChange={handleArr}/></div>
          <div><input type="checkbox"  onChange={handleFifty}/>50 &nbsp;* &nbsp;<input type="number" class="w-25 m-1 p-0"value={arr1} onChange={handleArr1}/></div>
          <div><input type="checkbox"  onChange={handle100}/>100 * <input type="number" class="w-25 m-1 p-0"/></div>
        </div>
      )}
      <div>
      <input type="checkbox" id="5000" value={amount[1]}onClick={() => setBox3(!box3)} />
      5000
      {box3 && (
        <div class="text-justify mx-5">
          <div><input type="checkbox" onChange={handle100}/>100 *<input type="number" class="w-25 m-1 p-0 "/></div>
          <div><input type="checkbox" onChange={handle200}/>200 *<input type="number" class="w-25 m-1 p-0"/></div>
          <div><input type="checkbox" onChange={handle500}/>500 *<input type="number" class="w-25 m-1 p-0"/></div>
        </div>
      )}</div>
      <div>
      <input type="checkbox" id="10000" value={amount[2]} onClick={() => setBox4(!box4)} />
      10000
      {box4 && (
        <div class="text-justify mx-5">
          <div><input type="checkbox" onChange={handle200}/>200 * &nbsp;<input type="number" class="w-25 m-1 p-0 "/></div>
          <div><input type="checkbox" onChange={handle500}/>500 * &nbsp;<input type="number" class="w-25 m-1 p-0"/></div>
          <div><input type="checkbox" onChange={handle2000}/>2000 *<input type="number" class="w-25 m-1 p-0"/></div>
        </div>
      )}
      </div>
        </form>
        </div>
        <button class="btn btn-primary p-1 h-25 d-flex justify-content-right" onClick={handleClick}>Total</button>
       <p>{dispensed.join(" ")}</p>
        </div>
        </div>
  )
}

export default Money

