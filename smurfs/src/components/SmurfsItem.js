import React, {useContext} from 'react';
export const SmurfsItem=(props)=>{
    return (
        <div className="smurfies">
            <h1>Name: {props.name}</h1>
            <h2>Age: {props.age}</h2>
            <h2>Height: {props.height}</h2>
        </div>
    )
}

export default SmurfsItem;