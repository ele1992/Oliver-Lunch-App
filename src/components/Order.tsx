import {
	Button,
	FormControl,
	Grid,
	InputLabel,
	makeStyles,
	MenuItem,
	Select
} from '@material-ui/core'
import { useState } from 'react'
import { useAppSelector } from '../redux'
import { selectAll } from '../redux/products'

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
	totalAmountButtons: {
		display: 'flex',
		justifyContent: 'space-around'
	},
	orderButtonAddition: {
		flex: 1,
		margin: '0.25em'
	},
}))

const Order: React.FC = () => {
	const classes = useStyles()

	const [selectedProductIds, setSelectedProductIds] = useState([0, 0, 0])
	const [amounts, setAmounts] = useState([0, 0, 0])

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

	const amountMenuItems = [0, 1, 2, 3, 4, 5].map((amount) => (
		<MenuItem key={amount} value={amount}>
			{amount}
		</MenuItem>
	))

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

	const productRows = selectedProductIds.map((selectedProductId, index) => (
		<Grid key={index} container spacing={2}>
			<Grid item xs={9}>
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
			<Grid item xs>
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
		</Grid>
	))

	return (
		<div className={classes.root}>
			{productRows}
			<div className={classes.totalAmountButtons}>
				<Button
					variant="contained"
					color="primary"
					className={classes.orderButtonAddition}>Broodje Plus
				</Button>
				<Button
					variant="contained"
					color="primary"
					className={classes.orderButtonAddition}>Broodje Min
				</Button>
			</div>
			<Button
				fullWidth
				variant="contained"
				color="primary"
				className={classes.orderButton}
			>
				Plaats bestelling
			</Button>
		</div>
	)
}

export default Order
