import React, {useContext} from 'react';
import {SmurfContext} from '../context/context';
import SmurfsItem from './SmurfsItem';

export const SmurfsList=()=>{
    const addOne=function(){
        let count=0;
        return function(){
          count++
          return count;
        }
      }
    let newCount=addOne();
    const smurfs=useContext(SmurfContext);
    return (
        <div>
            {smurfs.map(smurf=>(
              <SmurfsItem key={newCount()} name={smurf.name} age={smurf.age} height={smurf.height} />
             ))}
        </div>
    )
}
export default SmurfsList;