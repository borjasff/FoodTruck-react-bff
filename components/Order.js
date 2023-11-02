import Image from "next/image"
import axios from "axios"
import { toast } from "react-toastify"
import  {formatMoney} from "../helpers"

//orders
export default function Order({orders}) {
    {/*if the order is complete*/}
    const { id, name, total, order} = orders
    
    const completeOrder = async () => {
        try {
            const data = await axios.post(`/api/orders/${id}`)
            toast.success('Order completed successfully')
        } catch (error) {
            toast.error('Error complete order')
        }
    }
  return (
    <div className="border p-10 space-y-5">
        <h3 className="text-2xl font-bold">Order: {id}</h3>
        <p className="text-lg font-bold">Client: {name}</p>

        <div>
            {order.map( orderTo => (
                <div key={orderTo.id} className="py-3 flex border-b last-of-type:border-0 items-center">
                    <div className="w-32">
                        <Image
                            width={400}
                             height={500}
                            src={`/assets/img/${orderTo.image}.jpg`}
                            alt={`Image plate ${orderTo.name}`}
                        />                   
                    </div>
                    <div className="p-5 space-y-2">
                        <h4 className="text-xl font-bold text-amber-500">{orderTo.name} </h4>
                        <p className="text-lg font-bold">Quantity: {orderTo.quantity}</p>

                    </div>

                </div>
            ))}
        </div>
        <div className="md:flex md:items-center md:justify-between my-10">
        <p className="mt-5 text-4xl font-black text-amber-500">Pay Total: {formatMoney(total)}</p>

        <button className="bg-indigo-600 hover:bg-indigo-800 text-white mt-5 md:mt-0 py-3 px-10 rounded-lg uppercase font-bold"
            type="button" 
            onClick={completeOrder}
        > Complete Order</button>
        </div>

    </div>
  )
}
