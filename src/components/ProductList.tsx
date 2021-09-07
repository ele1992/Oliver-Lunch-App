import { useAppSelector } from '../redux'
import { selectAll } from '../redux/products'
import { List, ListItem, ListItemText, makeStyles, Typography, Divider } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(2),

	},
	listItems: {
		'&:hover': {
			backgroundColor: theme.palette.info.light,
			borderRadius: '0.25em',
		},
		marginBottom: '0.25em',
		marginTop: '0.5em',
		// position: 'relative',
		// '&::after': {
		// 	position: 'absolute',
		// 	top: '100%',
		// 	left: '0%',
		// 	width: 0,
		// 	height: '2px',
		// 	background: '#222',
		// 	display: 'block',
		// 	content: '" "',
		// 	transition: 'width 0.5s ease-in-out',
		// },
		// '&::after:hover': {
		// 	width: '100%',
		// }
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
