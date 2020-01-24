import React, { useEffect,useState,useReducer } from "react";
import {reducer, initialState} from './reducers/reducer'
import axios from 'axios';
import "./App.css";
import SmurfsList from './SmurfsList';

import {SmurfContext} from '../context/context';
function  App(){
  const [state,dispatch]=useReducer(reducer,initialState);
  const [name,setName]=useState('');
  const [age,setAge]=useState('');
  const [height,setHeight]=useState('');
  const [smurfs, setSmurfs] = useState([]);;
  useEffect(() => {
       axios
        .get(`http://localhost:3333/smurfs`)
        .then(response => {
          setSmurfs(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[]);
    const handleChanges=(e)=>{
      if(e.target.id==='name'){
        setName(e.target.value);
      }else if(e.target.id==='age'){
        setAge(e.target.value);
      }else if(e.target.id==='height'){
        setHeight(e.target.value);
      }
    }
    const addSmurf=(e)=>{
      e.preventDefault();
      dispatch({type:'Add_Smurf', payload:{name,age,height}})
      setSmurfs([...smurfs, state]);
      axios.post("http://localhost:3333/smurfs", state)
      .then(response=>{
        console.log(response);
      })
      .catch(error=>{
        console.log(error)
      })
    }
    return (
      <div className="App">
        <h1>Smurf Registry</h1>
        <form>
          <label htmlFor="name" name="name">Name: </label>
          <input id="name" type="text" onChange={handleChanges}/>
          <label htmlFor="age" name="age">Age: </label>
          <input id="age" type="text" onChange={handleChanges}/>
          <label htmlFor="height" name="height">Height: </label>
          <input id="height"type="text" onChange={handleChanges}/>
          <button onClick={addSmurf} type="Submit" >Join</button>
        </form>
        <SmurfContext.Provider value={smurfs}>
          <SmurfsList/>
        </SmurfContext.Provider>
      </div>
    );
}

export default App;
