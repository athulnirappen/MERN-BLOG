const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const authRouter = require("./routes/auth");
const userRoutes = require("./routes/userRoutes")
const postRoutes = require("./routes/postRoutes")
const categoryRouter = require("./routes/categoryRoutes")
const multer = require("multer");

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log("connected to mongoDb")).catch(err => console.log(err));


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images")
    }, filename: (req, file, cb) => {
        cb(null, req.body.name)
    }
});

const upload = multer({ storage: storage });
app.post('/api/upload', upload.single("file"), (req, res) => {
    res.status(200).json("file has been uploaded")
})


app.use('/api/auth', authRouter)
app.use('/api/users', userRoutes)
app.use("/api/posts", postRoutes)
app.use("/api/categories",categoryRouter)




app.listen(process.env.PORT, () => {
    console.log("server is running on port ");
})