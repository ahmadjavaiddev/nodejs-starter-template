import express from "express";
import cors from "cors";

const app = express();
app.use(
     cors({
          origin: `${process.env.ORIGIN}`,
          credentials: true,
     })
);

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.get("/", (req, res) => {
     res.send("Hello to Memories API");
});

export { app };
