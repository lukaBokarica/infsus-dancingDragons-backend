import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

// importanje routera
import userRoutes from './routes/User.js';
import artistRoutes from './routes/Artist.js';
import albumRoutes from './routes/Album.js';
import genreRoutes from './routes/Genre.js';
import agentRoutes from './routes/Agent.js';
import adminRoutes from './routes/Admin.js';
import songRoutes from './routes/Song.js';



const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

// postavljanje početnih ruta
app.use('/user', userRoutes)
app.use('/artist', artistRoutes)
app.use('/album', albumRoutes)
app.use('/genre', genreRoutes)
app.use('/agent', agentRoutes)
app.use('/admin', adminRoutes)
app.use('/song', songRoutes)


app.get('/',(req,res)=>{
    res.send("Hello to app.")
})

// BAZA PODATAKA -> POPRAVITI USER I PASSWORD!!!!!!!
const CONNECTION_URL= 'mongodb+srv://user:password1234@cluster0.r230f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));
