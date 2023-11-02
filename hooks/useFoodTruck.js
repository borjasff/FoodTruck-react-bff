import { useContext } from "react";
import FoodTruckContext from "../context/FoodTruckProvider";

//to use context
export default function useFoodTruck() {
  return useContext(FoodTruckContext);
}
