import { Router, RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || 'supersecret123';

router.post('/login', ((req, res) => {
    const { username } = req.body;
    if (!username) {
        return res.status(400).json({ message: 'Username required' });
    }
    // Creează token
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
}) as RequestHandler);

export default router;