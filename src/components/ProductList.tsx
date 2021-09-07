import { useAppSelector } from '../redux'
import { selectAll } from '../redux/products'

const ProductList: React.FC = () => {
	const products = useAppSelector((state) => selectAll(state.products))
	const productRows = products.map((product) => (
		<span key={product.id}>
			<dt>{product.description}</dt>
			<dd>{product.price}</dd>
		</span>
	))

	return <dl>{productRows}</dl>
}

export default ProductList
