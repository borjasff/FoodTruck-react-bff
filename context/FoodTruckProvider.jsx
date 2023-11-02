import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const FoodTruckContext = createContext()

const FoodTruckProvider = ({children}) => {

    const [categories, setCategories] = useState([])
    const [categoryActually, setCategoryActually] = useState({})
    const [product, setProduct] = useState({})
    const [modal, setModal] = useState(false)
    const [order, setOrder] = useState([])
    const [name, setName] = useState('')
    const [total, setTotal] = useState(0)

    const router = useRouter();

    //get categories
    const getCategories = async  () => {
        const {data} = await axios('/api/categories')
        setCategories(data)
    }
    //to redirect
    const handleClickCategories = id => {
        const category = categories.filter( cat => cat.id === id)
        setCategoryActually(category[0])
        //this is for send a user to page 
        router.push('/')
    }
    //change product
    const handleSetProduct = product => {
        setProduct(product)
    }

    //open or close modal
    const handleChangeModal = () => {
        setModal(!modal)
    }


    const handleAddOrder = ({categoryId, ...product}) => {
        if(order.some(productState => productState.id == product.id)) {
            //update quantity
            const orderUpdate = order.map(productState => productState.id == product.id ? product : productState)
            setOrder(orderUpdate)
            toast.success('Update product')
        } else  {
            setOrder([...order, product])
            toast.success('Added product')
        }
        setModal(false);
    } 

    //edit the quantity in the abstract
    const handleEditQuantity = id => {
        const updateProduct = order.filter( product => product.id == id)
        setProduct(updateProduct[0])
        setModal(!modal)
    }
    // or delete the product
    const handleDeleteQuantity = id => {
        const updateProduct = order.filter( product => product.id !== id)
        setOrder(updateProduct)
    }
    //send order in async becouse we need wait the info in the db
    const sendOrder = async(e) => {
        e.preventDefault()

        try {
            await axios.post('/api/orders', {order, name, total, date: Date.now().toString()})
            
            //Reset App
            setCategoryActually(categories[0])
            setOrder([])
            setName('')
            setTotal(0)

            toast.success('Order send successfully')
            
            setTimeout(() => { router.push('/') }, 3000)

        } catch (error) {
            console.error(error)
        }
        console.log("send")
      }


    useEffect(() => {
        getCategories()
    }, []);

    useEffect(() => {
        setCategoryActually(categories[0])
    }, [categories]);

    useEffect(()=>{
        const newTotal = order.reduce((total, product) => (product.price * product.quantity) + total, 0)
        setTotal(newTotal)
    },[order])

    return(
        /*all need export*/
        <FoodTruckContext.Provider
        value={{
            categories,
            handleClickCategories,
            categoryActually,
            product,
            handleSetProduct,
            modal,
            handleChangeModal,
            handleAddOrder,
            order,
            handleEditQuantity,
            handleDeleteQuantity,
            name,
            setName,
            sendOrder,
            total
        }}
        >
            {children}
        </FoodTruckContext.Provider>
    )
}
export {FoodTruckProvider}

export default FoodTruckContext