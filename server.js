const express = require ('express');
const dotenv = require ('dotenv');
const productRoutes=require('./src/routes/productRoutes');
const authRoutes=require('./src/routes/authRoutes');
const cartRoutes=require('./src/routes/cartRoutes');
const logger = require('./src/middlewares/logger');
const errorHandler = require('./src/middlewares/errorHandler');
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const protect = require('./src/middlewares/authMiddleware');

dotenv.config();
mongoose
.connect(process.env.MONGODB_STRING)
.then(()=> console.log("Database connected successfully"))
.catch((err)=> console.log(err.message))
const app = express();
app.use(express.json())
app.use(cookieParser())
app.use(logger)

app.get('/',(req,res)=>{
res.send("server is running");
});

app.use("/api",productRoutes);
app.use("/api/cart",protect, cartRoutes);

app.use("/api/auth",authRoutes);

app.use(errorHandler);

app.listen(3000,()=>{
console.log("Server running on port 3000");
});