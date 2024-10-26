import express from 'express'
import cors from 'cors'
import connectDb from './db/connectToMongoDb.js'
import userRoutes from './routes/user.router.js'
import applyUserRoutes from './routes/applyCardUser.router.js'
import adminRoutes from './routes/admin.router.js'
const app = express();
const port = process.env.PORT || 6001;


connectDb()


// middleware

app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from any origin
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());
app.use("/uploads", express.static("uploads"));





//   import routes here
app.use('/user',userRoutes);
app.use('/apply-user',applyUserRoutes);
app.use('/admin',adminRoutes)


app.get("/", (req, res) => {
  res.send("Hello Foodi Client Server!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});