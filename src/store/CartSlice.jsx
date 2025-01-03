import { createSlice } from '@reduxjs/toolkit'



const initialState = [];


const CartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        add:(state,action)=>{
            const item=state.find((item)=>item.id===action.payload.id)
            if(item){
                item.itemquantity++;
            }
            else{
                state.push({...action.payload,itemquantity:1})
            }
            
            // state.push(action.payload)
        },
        remove:(state,action)=>{
          return state.filter((item)=>item.id!==action.payload)
        },
        IncrementQuantity:(state,action)=>{
            const index=state.findIndex((item)=>item.id===action.payload);
            if(index!==-1){
                state[index].itemquantity++;
            }
        },
        DecrementQuantity:(state,action)=>{
            const index=state.findIndex((item)=>item.id===action.payload);
            if(index!==-1&&state[index].itemquantity>1){
                state[index].itemquantity--;
            }
            else{
                state.splice(index,1)
            }
        },
}})

export const { add,remove,IncrementQuantity,DecrementQuantity } = CartSlice.actions;
export default CartSlice.reducer;