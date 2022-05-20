import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import userRouter from "./routes/user.js";

const port = 5006;

const app = express();

app.use(morgan("dev"));
app.use(express.json({limit: "300mb", extended: true}));
app.use(express.urlencoded({limit: "300mb", extended: true}));
app.use(cors());

app.use("/users", userRouter); //https://localhost:5006/users/signup


const MONGODB_URL = "mongodb+srv://admin:admin@cluster0.3vkmanc.mongodb.net/?retryWrites=true&w=majority";

app.get('/', (req, res) => {
    res.send("Hello World!");
});

mongoose.connect(MONGODB_URL).then(() => {
    app.listen(port, () => console.log(`server listening on ${port}`));
}).catch((error) => console.log(`${error} did not connect`));
  



