import { useState, useEffect } from "react";
import Image from "next/image";
import useFoodTruck from "../hooks/useFoodTruck";
import { formatMoney } from "../helpers";
// to select the quantity of the product in a special window

export default function ModalProduct() {

    const { product, handleChangeModal, handleAddOrder, order } = useFoodTruck();
    const [quantity, setQuantity] = useState(1);
    const [edition, setEdition] = useState(false);

    // verification if the modal actually is in the order
    
        useEffect(() => {
            if(order.some((orderState) => orderState.id === product.id)){ 
                const productEdition = order.find((orderState) => orderState.id === product.id)
                setEdition(true);
                setQuantity(productEdition.quantity);}
        },[product, order])

  return (  
    //format to the modal product
    <div className="md:flex gap-10">
        <div className="md:w-1/3">
            <Image  width={300} height={400} alt={`Image product ${product.name}`} src={`/assets/img/${product.image}.jpg`} />
        </div>
        <div className="md:w-2/3">
            <div className="flex justify-end">
                <button onClick={handleChangeModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>
            <h1 className="text-3xl font-bold mt-5">{product.name}</h1>
            <p className="mt-5 font-black text-5xl text-amber-500">{formatMoney(product.price)}</p>
            
            <div className="flex gap-4 mt-5">
                {/*THE BUTTON SUBTRACT*/}
                <button type="button" onClick={() => {
                    if(quantity <= 1) return;
                    setQuantity(quantity -1)
                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>

                <p className="text-3xl">{quantity}</p>
                {/*THE BUTTON PLUS*/}
                <button type="button" onClick={() => {
                    if(quantity >= 7) return;
                    setQuantity(quantity +1)
                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>
            {/*THE BUTTON To submit changes or add to the cart*/}
                <button 
                    type="button"
                    className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded" onClick={() => handleAddOrder({...product, quantity})}
                >{edition ? 'Save Changes' : 'Add Cart'}</button>


        </div>

    </div>
  )
}
