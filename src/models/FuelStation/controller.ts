import data from "./data.json"
import { FuelStation } from './types'

export const getFuelStations = (): FuelStation[] => {
    return data;
}
