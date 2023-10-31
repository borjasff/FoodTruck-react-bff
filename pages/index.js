import Head from 'next/head'
import Image from 'next/image'
import Layout from '../layout/Layout'
import useFoodTruck from '../hooks/useFoodTruck'
import Product from '../components/Product'

export default function Home() {
  const {categoryActually} = useFoodTruck()

  return (
    <Layout page={`Menu ${categoryActually?.name}`}>  
      <h1 className='text-4xl font-black'>{categoryActually?.name}</h1>
      <p className='text-2xl mt-10'>Choose and customize your order</p>

    <div className='grid gap-4 grid-cols-1  md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
      {categoryActually?.products?.map(product => (
        <Product key={product.id} product={product}/>
        
      ))}
    </div>
      
    </Layout>
    
  )
}

