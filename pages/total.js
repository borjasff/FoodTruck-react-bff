import Layout from "../layout/Layout"
import {useEffect, useCallback} from "react";
import useFoodTruck from "../hooks/useFoodTruck";
import { formatMoney } from "../helpers";

export default function Total() {
  //to ckeck the order and send when it have new items
  const {order, name, setName, sendOrder, total} = useFoodTruck();

  const checkOrder = useCallback(() => {
    return  order.length === 0 || name === '' || name.length < 3
  }, [order, name])

  useEffect(() => {
    checkOrder()
  }, [order, checkOrder])

  return (


    <Layout page='Data and Total'>

    <h1 className="text-4xl font-black">Total and order confirmation</h1>
    <p className="text-2xl my-10">Order confirmation</p>


    <form onSubmit={sendOrder}>
      <div>
        <label htmlFor="name" className="block uppercase text-slate-800 font-bold text-xl">
          Name
        </label>
        <input id="name" type="text" className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
              value={name}
              onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mt-10">
          <p className="text-2xl">Pay total: {''} <span className="font-bold">{formatMoney(total)}</span></p>
      </div>
      <div className="mt-5">
        <input
        disabled={checkOrder()}
        type="submit" className={`${checkOrder() ? 'bg-indigo-100' : 'bg-amber-500 hover:bg-amber-800 hover:cursor-pointer'} w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center`}
        value="Confirm Order"/>
      </div>
    </form>
</Layout>
  )
}
