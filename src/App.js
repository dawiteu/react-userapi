import React, { useState, Fragment, useEffect } from 'react';
import Header from './component/Header'; 
import User from './component/User'; 


const App = () => {
  const [person, setPerson] = useState(false); // on n'as choisi encore personne. 

  const [persData, setPersData] = useState([]); // un objet utilisateur, qui regroupera les donnees recues (key/val);
  
  const componentDidMount = async() => {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url); 
    const data = await response.json();
    let upData = data.results[0]; 
    //let upDateData = [...persData]; 

    //console.log(response);
    if(response.ok){
      setPersData(upData);
      setPerson(true);
    }


    //for(const key in upData){
    //  upDateData.push( { key: key, val: upData[key] } );
    //  setPersData(upDateData);
    //}
  }

  const getPerson = () => {
    if(!person){
      return componentDidMount(); 
    }
  }

  useEffect(() => {
      // <User data={persData} />
      console.log('ch sur pers');
  }, [person]);

  return (
    <Fragment>
      <Header /> 
      <button onClick={getPerson}>Get user!</button>
      <br/>

      {
        person ? 
        ( 
          <div>
            <User data={persData} />
          </div>
        ) 
        :
        (
          "pas de personne choisie "
        )
      }

    </Fragment>
  );
}




export default App;
