import {FuelStation} from './types'
import path from "path";
import fs from "fs";

export const persistDataToFile = (data:FuelStation[]):void => {
    const json = JSON.stringify(data);
    const filename = path.join(__dirname, './data.json')
    fs.writeFileSync(filename, json, 'utf8');
}
