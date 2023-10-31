import Image from "next/image";
import useFoodTruck from "../hooks/useFoodTruck";

export default function Category({category}) {
    const { categoryActually, handleClickCategories } = useFoodTruck()
    const {name, icon, id} = category;
  return (
    <div className={`${categoryActually?.id === id ? 'bg-amber-400' : ''} 
                      flex items-center gap-4 w-full border p-5 hover:bg-amber-400`}>
        <Image
        alt="Image Icon"
        width={70}
        height={70}
        src={`/assets/img/icono_${icon}.svg`}
        
        />
        <button
        type="button" className="text-2xl font-bold hover:cursor-pointer" onClick={() => handleClickCategories(id)}>
            {name}
        </button>
    </div>
  )
}
