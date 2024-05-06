import express from 'express';
import dotenv from 'dotenv';
import router from './src/routes/user.js';
dotenv.config();

const app = express()
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', router)


app.listen(port, () => console.log(`Server started on port ${port}`));