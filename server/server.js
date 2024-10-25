import express from 'express'
import cors from 'cors'
import connectDb from './db/connectToMongoDb.js'
import userRoutes from './routes/user.router.js'
const app = express();
const port = process.env.PORT || 6001;


connectDb()


// middleware
app.use(cors());
app.use(express.json());




//   import routes here
app.use('/user',userRoutes)


app.get("/", (req, res) => {
  res.send("Hello Foodi Client Server!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});