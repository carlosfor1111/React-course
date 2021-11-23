import { useParams } from 'react-router'

const ProductDetail = () => {
  const params = useParams()
  return (
    <section>
      <h1>Product Detail</h1>
      {params.productId}
    </section>
  )
}

export default ProductDetail
