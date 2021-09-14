import * as Joi from 'joi'

export const postFuelStationSchema = Joi.object({
    name: Joi.string(),
    city: Joi.string(),
    address: Joi.string(),
    latitude: Joi.number(),
    longitude: Joi.number(),
    prices: Joi.array().items(
        Joi.object({
            price: Joi.number(),
            currency: Joi.string(),
            product_id: Joi.string()
        })
    ),
    products: Joi.array(),
}).options({
    'presence':'required'
});

export const updateFuelStationSchema = Joi.object({
    id: Joi.string(),
    name: Joi.string(),
    city: Joi.string(),
    address: Joi.string(),
    latitude: Joi.number(),
    longitude: Joi.number(),
    prices: Joi.array().items(
        Joi.object({
            price: Joi.number(),
            currency: Joi.string(),
            product_id: Joi.string()
        })
    ),
    products: Joi.array()
})
