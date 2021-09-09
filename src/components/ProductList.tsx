import { useAppSelector } from '../redux'
import { selectAll } from '../redux/products'
import { List, ListItem, ListItemText, makeStyles, Typography, Divider } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(2),
		overflow: 'scroll',
		height: '90vh',

	},
	listItems: {
		'&:hover': {
			backgroundColor: theme.palette.info.light,
			borderRadius: '0.25em',
		},
		marginBottom: '0.25em',
		marginTop: '0.5em',
	},
	listItemText: {

	},
	list: {

	},
}))

const ProductList: React.FC = () => {
	const classes = useStyles()
	const products = useAppSelector((state) => selectAll(state.products))
	const productRows = products.map((product) => (
		<>
			<ListItem className={classes.listItems} key={product.id}>
				<ListItemText className={classes.listItemText}>
					<Typography>{product.description}</Typography>
					<Typography>€ {product.price.toString().replace('.', ',')}</Typography>
				</ListItemText>

			</ListItem>
			<Divider />
		</>
	))

	return <div><List className={classes.root}>{productRows}</List></div>
}

export default ProductList
