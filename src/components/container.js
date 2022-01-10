import React, { useEffect, useState } from "react";
import Card from "./card.js";
import Details from "./details.js";
import useAxios from "axios-hooks";


const Container = () => {
    
    const [{data, loading, error, response}] = useAxios({
        method : 'GET',
        url : "https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20"
    })

    console.log(data, loading, error, response);
    
     let cards = [];
     let initial = {"gender":"loading...","name":{"title":"loading...","first":"loading...","last":"loading..."},"location":{"street":{"number":"loading...","name":"loading..."},"city":"loading...","state":"loading...","country":"loading...","postcode":"loading...","timezone":{"offset":"loading...","description":"loading..."}},"email":"loading...","picture":{"medium":"loading..."}};

     let [state, setState] = useState(initial);
     

     if(!loading && data){
        cards = [...data.results]
     }
     else{
         
     }
   
     useEffect(()=>{

        if(!loading && data){
            cards = [...data.results]
            setState(cards[0])
        }
     }, [!loading])
  
    let change = (i) =>{
        setState(i);
    }

    

    
       
    return (
        <div className = "home container-fluid">
           <div className="container">
              {(!loading && data && data.results && (state !== {})) ? <Details value={state} /> : <div>loading...</div>} 
           </div>
           {(!loading && data && data.results) ? 
               <div className="cards_holder d-flex justify-content-center row">
                 { 
                   cards.map((e, index)=>{return <Card value={e} index={index} key={`${index}`} onClick={() => {change(e)} } />})
                 }
               </div> : <div>loading...</div>}
        </div>
    )
}

export default Container;


