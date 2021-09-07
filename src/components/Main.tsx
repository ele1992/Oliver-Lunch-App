import { Button, makeStyles, Typography } from '@material-ui/core'
import { useAppSelector } from '../redux'
import { selectTotal } from '../redux/products'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(2)
	},
	navButton: {
		marginTop: theme.spacing(2)
	}
}))

const Main: React.FC = () => {
	const classes = useStyles()
	const productCount = useAppSelector((state) => selectTotal(state.products))

	return (
		<div className={classes.root}>
			<Typography variant="h6">Welkom bij de Oliver Lunch App</Typography>
			<Typography color="textSecondary" gutterBottom>
				Plaats svp uiterlijk 11:30 uur je bestelling.
			</Typography>
			<Button
				fullWidth
				variant="contained"
				color="primary"
				className={classes.navButton}
				component={Link}
				to="/producten"
			>
				Bekijk Producten ({productCount})
			</Button>
			<Button
				fullWidth
				variant="contained"
				color="primary"
				className={classes.navButton}
				component={Link}
				to="/bestellen"
			>
				Bestellen
			</Button>
		</div>
	)
}

export default Main
