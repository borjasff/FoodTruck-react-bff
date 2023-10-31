import { useContext } from "react";
import FoodTruckContext from "../context/FoodTruckProvider";

export default function useFoodTruck() {
  return useContext(FoodTruckContext);
}
