import { Router } from 'express';
import { getFuelStations } from '../models/FuelStation';

const router = Router();

router.get('/fuel-stations', getFuelStations )

export default router;
