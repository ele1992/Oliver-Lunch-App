import { combineReducers,createReducer } from "@reduxjs/toolkit";
import * as actions from './actions'

interface CounterState {
   order:[{
            productId:number,
            amount:number,
        }]
}

const initialState = {order:[{productId:0,amount:0}]} as CounterState

const orderReducer = createReducer(initialState, (builder)=> {
    builder
        .addCase(actions.addOrder,(state,action)=>{
             state.order.push(action.payload.order)
    })
})

export default combineReducers({
    orders:orderReducer
})