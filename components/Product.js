import Image from "next/image";
import { formatMoney } from "../helpers";
import useFoodTruck from "../hooks/useFoodTruck";

export default function Product({product}) {
    
    const { handleSetProduct, handleChangeModal } = useFoodTruck()
    const { name, price, image} = product
  return (
    //product description in the pricipal panel
    <div className="border p-3">
        <Image src={`/assets/img/${image}.jpg`} alt={`Image recipe ${name}`}
                width={400} height={500} className="m-auto"/>
                <div className="p-5">
                    <h3 className="text-2xl font-bold">{name}</h3>
                    <p className="mt-5 font-black text-4xl text-amber-500">{formatMoney(price)}</p>

                    <button type="button" className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
                            onClick={() => {
                              handleChangeModal();
                              handleSetProduct(product);
                              }}
                            >
                      Add
                    </button>

                </div>
    </div>
  )
}
