import React from 'react'
import useSWR from 'swr'
import axios from 'axios'
import AdminLayout from '../layout/adminLayout'
import Order from '../components/Order'



export default function Admin() {

    const fetcher = () => axios('/api/orders').then(data => data.data)
    const { data, error, isLoading } = useSWR('/api/orders', fetcher, { refreshInterval: 100 })

    //console.log(data)
  return (
    <AdminLayout page={'admin'}>
        <h1 className="text-4xl font-black">Administration  Panel</h1>
        <p className="text-2xl my-10">Manage your orders</p>
        {data && data.length ? data.map(order => 
            <Order 
                key={order.id}
                orders={order}
            />
            ) : <p>Not found orders</p>}
    </AdminLayout>
  )
}
