import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { Product } from '../../types'
import { products } from './productdata'

const productsAdapter = createEntityAdapter<Product>()
const emptyInitialState = productsAdapter.getInitialState()
const initialState = productsAdapter.addMany(emptyInitialState, products)

const slice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		addProduct: productsAdapter.addOne,
		removeProduct: productsAdapter.removeOne,
		updateProduct: productsAdapter.updateOne,
		upsertProduct: productsAdapter.upsertOne
	}
})

export const { addProduct, removeProduct, updateProduct, upsertProduct } =
	slice.actions

export const { selectAll, selectById, selectEntities, selectIds, selectTotal } =
	productsAdapter.getSelectors()

export default slice.reducer
