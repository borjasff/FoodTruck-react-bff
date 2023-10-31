import Layout from "../layout/Layout"
import useFoodTruck from "../hooks/useFoodTruck"
import AbstractProduct from "../components/AbstractProduct";

export default function Abstract() {
  const { order} = useFoodTruck();

  return (
    <Layout page='Abstract'>
        <h1 className="text-4xl font-black">Abstract</h1>
        <p className="text-2xl my-10">Order Check</p>

        {order.length === 0 ? (
          <p className="text-center text-2xl">No Products found in your order</p>
        ) : (
          order.map(product => (
              <AbstractProduct 
                  key={product.id}
                  product={product}
              
              />
          ))
        )}
    </Layout>

  )
}
