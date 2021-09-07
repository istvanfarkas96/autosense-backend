type Price = {
    "price": number,
    "currency": string,
    "product_id": string
}

type Point = {
    "id": string,
    "status": string
}

type Product =  {
    "product_id": string,
    "points": Point[]
}

export type FuelStation = {
    "id": string,
    "name": string,
    "address": string,
    "city": string,
    "latitude": number,
    "longitude": number,
    "prices": Price[]
    "products": Product[]
}
