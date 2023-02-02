import express, { json } from 'express';
import cors from 'cors';
import 'express-async-errors';
import { ValidationError, handleError } from './utils/errors';

const app = express();

//cors jest do komunikacji BE-FE
app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(json());

// Routers....
app.get('./', async (req, res) => {
    throw new ValidationError('Deaaam..!');
});
app.use(handleError);

// uzywamy inny port, bo 3000 jest zajety przez reacta
app.listen(3001, '0.0.0.0', () => {
    console.log('Listening on port http://localhost:3001')
});