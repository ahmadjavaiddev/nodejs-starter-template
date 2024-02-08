import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config();

connectDB()
     .then(() => {
          app.listen(process.env.PORT || 5000, () => {
               console.log(
                    `⚙️  Server is running at PORT : ${process.env.PORT || 5000}`
               );
          });
     })
     .catch((err) => {
          console.log("MONGODB CONNECTION FAILED ::", err);
     });
