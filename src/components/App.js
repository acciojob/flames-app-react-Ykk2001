import React, { useState } from "react";

function App() {
    const[name1,setName1]=useState('');
    const[name2,setName2]=useState('');
    const[result,setResult]=useState('')
    const flamesArr=["Siblings","Friends","Love","Affection","Marriage","Enemy"];
   
    function calculateFLAMES()
    {
        if(name1.trim()==='' || name2.trim()=='')
        {
            setResult("Please Enter a valid input");
            return;
        }


        let str1=name1.split('');//[r,a,d,h,a]
        let str2=name2.split('');//[d,h,a,r,a]
       
        for(let i=0;i<str1.length;i++)
        {
            let matchIndex=str2.indexOf(str1[i]);//index of str2 and i is the index of str1
            if(matchIndex!==-1)
            {
                str1.splice(i,1);//removing the elements from the first array
                str2.splice(matchIndex,1)//removing the elements from the second array
                i--;
            }

        }

        let totalCount=str1.length+str2.length;
        let mod=totalCount%6;
        setResult(flamesArr[mod])//pushing the output from the flames array into the result state
    }

    function clearFields()
    {
        setName1("");
        setName2("");
        setResult("");
    }
  return (
  <div id="main">
        <input type="text" data-testid="input1" name="name1" value={name1} placeholder="Enter first name" onChange={(e)=>setName1(e.target.value)} ></input>
        <input type="text" data-testid="input2" name="name2" value={name2}   placeholder="Enter second name" onChange={(e)=>setName2(e.target.value)} ></input>
        <button data-testid="calculate_relationship" name="calculate_relationship" onClick={calculateFLAMES}>Calculate Relationship Future</button>
        <button data-testid="clear" name="clear" onClick={()=>clearFields()}>Clear</button>
        <h3 data-testid="answer">{result}</h3>
  </div>)
}

export default App;
