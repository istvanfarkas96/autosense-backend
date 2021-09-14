import {Request, Response} from "express";
import * as FuelStationController from './controller'
import {postFuelStationSchema, updateFuelStationSchema} from './validator'

export const getFuelStations = (request:Request, response:Response) => {
    try {
        response.send(FuelStationController.getFuelStations());
    } catch (error) {
        response.status(500).send();
    }
}

export const postFuelStations =  (request:Request, response:Response) => {
    try {
        const {error,value} = postFuelStationSchema.validate(request.body);
        if (error) {
            return response.status(400).send(error.message);
        }

        response.send(FuelStationController.postFuelStations(value));
    } catch (error) {
        response.status(500).send();
    }
}

export const updateFuelStations =  (request:Request, response:Response) => {
    try {
        const {error,value} = updateFuelStationSchema.validate(request.body);
        if (error) {
            return response.status(400).send(error.message);
        }

        response.send(FuelStationController.updateFuelStations(value));
    } catch (error) {
        response.status(500).send();
    }
}

export const deleteFuelStations = (request: Request, response: Response) => {
    try {
        response.send(FuelStationController.deleteFuelStation(request.params.id));
    } catch (error) {
        response.status(500).send();
    }
}


