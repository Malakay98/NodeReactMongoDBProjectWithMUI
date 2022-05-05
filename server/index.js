import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import routes from "./routes/post.js";

const app = express();
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};

// I need to add a limit, because when i upload a memorie with an image... CORS send me an error
app.use(express.json({ extended: true, limit: '10MB' }));
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

// Every route from "routes/post.js" is gonna start with posts
// The route need to be above the cors, otherway is gonna give us an error
app.use("/posts", routes);


// This URL is insecure, i need to edit this to make it more secure
const URL_CONNECTION =
  "mongodb+srv://Frank:OmyN8a7ByDFN9txr@cluster0.bcrxx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// this means whatever is in the environment variable PORT(default is 3000), or 420 if nothing is there
const PORT = process.env.PORT || 420;
// https://www.mongodb.com/cloud/atlas

// Connection with the database with a function that accepts 2 differents parameters
mongoose
  .connect(URL_CONNECTION)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
