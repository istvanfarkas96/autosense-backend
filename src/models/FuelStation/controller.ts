import data from "./data.json"
import {FuelStation} from './types'
import {v4 as uuidv4} from 'uuid';
import {persistDataToFile} from "./storage";

export const getFuelStations = (): FuelStation[] => {
    return data;
}

export const postFuelStations = (FuelStation): void => {
    FuelStation.id = uuidv4();
    data.push(FuelStation)
    persistDataToFile(data);
}

export const updateFuelStations = (FuelStation): void => {
    const otherStations = data.filter(item => item.id !== FuelStation.id)
    otherStations.push(FuelStation);
    persistDataToFile(otherStations);
}

export const deleteFuelStation = (id): void => {
    const otherStations = data.filter(item => item.id !== id)
    persistDataToFile(otherStations);
}







