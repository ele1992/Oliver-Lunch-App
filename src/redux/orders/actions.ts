import { createAction } from "@reduxjs/toolkit";
import { OrderData } from "../../types";

export const addOrder = createAction('order/show',({productId,amount}:{productId:number,amount:number}):{payload:{order:OrderData}}=>({
    payload:{
        order:{
            productId,
            amount
        }
    }
}))