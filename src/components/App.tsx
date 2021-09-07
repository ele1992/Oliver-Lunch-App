import {
	AppBar,
	CssBaseline,
	IconButton,
	makeStyles,
	Toolbar,
	Typography
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link, Route, Switch } from 'react-router-dom'
import Order from './Order'
import Main from './Main'
import ProductList from './ProductList'

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		minHeight: '100vh',
		width: 500
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	}
}))

const App: React.FC = () => {
	const classes = useStyles()

	return (
		<>
			<CssBaseline />
			<div className={classes.root}>
				<AppBar position="static">
					<Toolbar>
						<IconButton
							edge="start"
							className={classes.menuButton}
							color="inherit"
							component={Link}
							to="/"
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" className={classes.title}>
							Oliver Lunch
						</Typography>
					</Toolbar>
				</AppBar>
				<Switch>
					<Route exact path="/" component={Main} />
					<Route path="/producten" component={ProductList} />
					<Route path="/bestellen" component={Order} />
				</Switch>
			</div>
		</>
	)
}

export default App
