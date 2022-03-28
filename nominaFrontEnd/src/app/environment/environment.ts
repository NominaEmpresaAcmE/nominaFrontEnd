import { Asesor } from "../models/asesor.model";
import { Venta } from "../models/venta.model";

export const environment ={
    apiUrl: 'http://localhost:3000/',
    Asesor: new Asesor,
    Asesores: new Array <Asesor>(),
    Venta: new Venta,
}