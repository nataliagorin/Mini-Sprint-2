import { Request, Response, RequestHandler } from 'express';
import Hotel from '../models/Hotel';

export const hotelController = {
    // Get all hotels
    getAllHotels: (async (req: Request, res: Response) => {
        console.log('getAllHotels called!');
        try {
            const limit = parseInt(req.query.limit as string) || 10;
            const offset = parseInt(req.query.offset as string) || 0;
            const hotels = await Hotel.findAll({ limit, offset });
            res.json(hotels);
        } catch (error) {
            console.error('Error fetching hotels:', error);
            res.status(500).json({ message: 'Error fetching hotels', error: error instanceof Error ? error.message : error });
        }
    }) as RequestHandler,

    // Get hotel by name
    getHotelByName: (async (req: Request, res: Response) => {
        try {
            const hotel = await Hotel.findOne({
                where: { GlobalPropertyName: req.params.name }
            });
            if (!hotel) {
                return res.status(404).json({ message: 'Hotel not found' });
            }
            res.json(hotel);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching hotel', error });
        }
    }) as RequestHandler,

    // Create new hotel
    createHotel: (async (req: Request, res: Response) => {
        try {
            const hotel = await Hotel.create(req.body);
            res.status(201).json(hotel);
        } catch (error) {
            res.status(400).json({ message: 'Error creating hotel', error });
        }
    }) as RequestHandler,

    // Update hotel
    updateHotel: (async (req: Request, res: Response) => {
        try {
            const hotel = await Hotel.findByPk(req.params.id);
            if (!hotel) {
                return res.status(404).json({ message: 'Hotel not found' });
            }
            await hotel.update(req.body);
            res.json(hotel);
        } catch (error) {
            res.status(400).json({ message: 'Error updating hotel', error });
        }
    }) as RequestHandler,

    // Delete hotel
    deleteHotel: (async (req: Request, res: Response) => {
        try {
            const hotel = await Hotel.findByPk(req.params.id);
            if (!hotel) {
                return res.status(404).json({ message: 'Hotel not found' });
            }
            await hotel.destroy();
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: 'Error deleting hotel', error });
        }
    }) as RequestHandler
}; 