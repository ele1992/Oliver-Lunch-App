import {
	Button,
	FormControl,
	Grid,
	InputLabel,
	makeStyles,
	MenuItem,
	Select
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import { useState,useEffect } from 'react'
import { useAppSelector } from '../redux'
import { selectAll } from '../redux/products'
import { OrderData } from '../types'




const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(2)
	},
	formControl: {
		marginBottom: theme.spacing(1),
		marginTop: theme.spacing(1)
	},
	orderButton: {
		marginTop: theme.spacing(2)
	},

	orderRemoveButton: {
		width:'10px',
		height:'55px',
		marginTop:'8px',
		borderRadius:'0.5em'
	}
}))

const Order: React.FC = () => {
	const classes = useStyles()

	const [selectedProductIds, setSelectedProductIds] = useState([0])
	const [amounts, setAmounts] = useState([1])
	const [order, setOrder] = useState<OrderData[]>([])


	const products = useAppSelector((state) => selectAll(state.products))
	let productMenuItems = products.map((product) => (
		<MenuItem key={product.id} value={product.id}>
			{product.description}
		</MenuItem>
	))
	productMenuItems = [
		<MenuItem key={0} value={0}>
			Selecteer een broodje
		</MenuItem>
	].concat(productMenuItems)

	const amountMenuItems = [ 1, 2, 3, 4, 5].map((amount) => (
		<MenuItem key={amount} value={amount}>
			{amount}
		</MenuItem>
	))


	useEffect(()=>{
		const combinedArray=()=>{
			const combinedArray = (selectedProductIds.map((productId,index)=>(

					{productId:productId, amount:amounts[index]}
				
				  )
				
				))	
				return 	setOrder(combinedArray)
		}
		combinedArray()
	
	},[selectedProductIds,amounts])




	const handleProductChange =
		(index: number) => (event: React.ChangeEvent<{ value: unknown }>) => {
			const newSelectedProducts = [...selectedProductIds]
			newSelectedProducts[index] = parseInt(event.target.value as string, 10)
			setSelectedProductIds(newSelectedProducts)
		}

	const handleAmountChange =
		(index: number) => (event: React.ChangeEvent<{ value: unknown }>) => {
			const newAmounts = [...amounts]
			newAmounts[index] = parseInt(event.target.value as string, 10)
			setAmounts(newAmounts)
		}
	const handleAddButton = () => {
		setSelectedProductIds([...selectedProductIds].concat(0))
		setAmounts([...amounts].concat(1))
	}

	const handleRemoveButton = (index: number) => {
		const newSelectedProductIds = [...selectedProductIds]
		const newAmounts = [...amounts]

		newSelectedProductIds.splice(index, 1)
		newAmounts.splice(index, 1)

		setSelectedProductIds(newSelectedProductIds)
		setAmounts(newAmounts)
	}

	const handleOrderButton = () =>{
		console.log(order)
		setSelectedProductIds([0])
		setAmounts([1])
	}

	const productRows = selectedProductIds.map((selectedProductId, index) => (
		<Grid key={index} container spacing={2}>
			<Grid item xs={8}>
				<FormControl
					fullWidth
					variant="outlined"
					className={classes.formControl}
				>
					<InputLabel>Broodje</InputLabel>
					<Select
						value={selectedProductIds[index]}
						onChange={handleProductChange(index)}
						label="Broodje"
					>
						{productMenuItems}
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={2}>
				<FormControl
					fullWidth
					variant="outlined"
					className={classes.formControl}
				>
					<InputLabel>Aantal</InputLabel>
					<Select
						value={amounts[index]}
						onChange={handleAmountChange(index)}
						label="Aantal"
					>
						{amountMenuItems}
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={1}>
				<Button

					variant="contained"
					color="secondary"
					onClick={() => handleRemoveButton(index)}
					className={classes.orderRemoveButton}><DeleteIcon/>
				</Button>
			</Grid>
		</Grid >
	))

	return (
		<div className={classes.root}>
			{productRows}

			<Button
				fullWidth
				variant="contained"
				color="primary"
				onClick={() => handleAddButton()}
				className={classes.orderButton}>Broodje Plus
			</Button>


			<Button
				fullWidth
				variant="contained"
				color="primary"
				className={classes.orderButton}
				onClick={()=>handleOrderButton()}
			>
				Plaats bestelling
			</Button>
		</div>
	)
}

export default Order
