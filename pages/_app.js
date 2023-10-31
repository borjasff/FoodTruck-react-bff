import '../styles/globals.css'
import { FoodTruckProvider } from '../context/FoodTruckProvider' 

function MyApp({ Component, pageProps }) {
  return (
    <FoodTruckProvider> 
      <Component {...pageProps} />
    </FoodTruckProvider>
    
  )
}

export default MyApp
