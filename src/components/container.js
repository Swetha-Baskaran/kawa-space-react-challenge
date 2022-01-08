import { useEffect, useState } from "react";
import Card from "./card.js";
import Details from "./details.js";
import useAxios from "axios-hooks";


const Container = () => {
    
    const [{data, loading, error, response}, refetch] = useAxios({
        method : 'GET',
        url : "https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20"
    })

    console.log(data, loading, error, response);
    
     let cards = [];
     let initial = {"gender":"loading...","name":{"title":"loading...","first":"loading...","last":"loading..."},"location":{"street":{"number":"loading...","name":"loading..."},"city":"loading...","state":"loading...","country":"loading...","postcode":"loading...","timezone":{"offset":"loading...","description":"loading..."}},"email":"loading...","picture":{"medium":"loading..."}};

     if(loading && !data){
         for(let i=0; i<20; i++){
             cards.push(initial)
         }
     }
     else{
            cards = [...data.results];
     }

     let [state, setState] = useState(cards[0]);
    
     useEffect(()=>{
        if(loading && !data){
            for(let i=0; i<20; i++){
             cards.push(initial)
        }
        setState(initial)
        }
        else{
            cards = [...data.results];
        }
     }, [data, loading, error])

    
  
    let change = (i) =>{
        setState(i);
    }

    

    
       
    return (
        
        <div className = "home">
           {!loading ? <Details value={state} /> : <div>loading...</div>}
           {!loading ? 
               <div className="cards_holder">
                 { 
                   cards.map((e, index)=>{return <Card value={e} index={index} key={`${index}`} onClick={() => {change(e)} } />})
                 }
                 {()=>{setState(cards[0])}}
               </div> : <div>loading...</div>}
        </div>
        
    )
}

export default Container;


