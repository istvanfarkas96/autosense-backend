import { Router } from 'express';
import {deleteFuelStations, getFuelStations, postFuelStations, updateFuelStations} from '../models/FuelStation';

const router = Router();

router.get('/fuel-stations', getFuelStations )
router.post('/fuel-stations', postFuelStations )
router.put('/fuel-stations/:id', updateFuelStations )
router.delete('/fuel-stations/:id', deleteFuelStations )

export default router;
