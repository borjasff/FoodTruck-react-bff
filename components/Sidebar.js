import Image from "next/image"
import useFoodTruck from "../hooks/useFoodTruck"
import Category from "./Category"

const Sidebar = () => {
  const{ categories} = useFoodTruck()
  return (
    // sidebar to the pricipal menu
    <>  
      <div>
        <div className="mt-5 ml-15 md:flex">
        <a href="/" className="m-auto md:flex"><Image width={200} height={90} src="/assets/img/logo.svg" alt="Image Logo"/></a>
        </div>
        
        <nav className="mt-10">
          {categories.map(category => (
            <Category
              key={category.id}
              category={category}
            />
          ))}
        </nav>
      </div>
      
    </>
  )
}

export default Sidebar