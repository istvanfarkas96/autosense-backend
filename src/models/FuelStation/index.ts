import {Request, Response} from "express";
import * as FuelStationController from './controller'

export const getFuelStations = async (request:Request, response:Response):Promise<void> => {
    try {
        const data = FuelStationController.getFuelStations();
        response.send(data);
    } catch (error) {
        console.log(error);
        response.status(500).send();
    }
}
