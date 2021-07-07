export const initialState={
  name:'Jake',
  age:12,
  height:'1.5ft',
  id:1
};


export const reducer=(state, action)=>{
    switch(action.type){
        case 'Add_Smurf':
        console.log(state);
        return {
            ...state,
            name:action.payload.name,
            age:action.payload.age,
            height:action.payload.height,
            id:Date.now()
        }
        default:
            return state;
    }
}