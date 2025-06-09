import { Router } from 'express';
import { hotelController } from '../controllers/hotelController';
import { authenticateToken } from '../middleware/auth';

const router = Router();

// Public routes
router.get('/', hotelController.getAllHotels);
router.get('/:name', hotelController.getHotelByName);

// Protected routes
router.post('/', authenticateToken, hotelController.createHotel);
router.put('/:id', authenticateToken, hotelController.updateHotel);
router.delete('/:id', authenticateToken, hotelController.deleteHotel);

export default router; 