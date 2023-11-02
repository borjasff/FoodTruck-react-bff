import Image from "next/image";
import useFoodTruck from "../hooks/useFoodTruck";

export default function Category({category}) {
    /*import category*/
    const { categoryActually, handleClickCategories } = useFoodTruck()
    const {name, icon, id} = category;
  return (
         /*all datas need to categories in the menu*/
    <div className={`${categoryActually?.id === id ? 'bg-amber-400' : ''} 
                      flex items-center gap-4 w-full border p-5 hover:bg-amber-400`}>
        <Image
        alt="Image Icon"
        width={70}
        height={70}
        src={`/assets/img/icono_${icon}.svg`}
        
        />
                {/*when we touch the button, we are redirecting to respective category*/}
        <button
        type="button" className="text-2xl font-bold hover:cursor-pointer" onClick={() => handleClickCategories(id)}>
            {name}
        </button>
    </div>
  )
}
