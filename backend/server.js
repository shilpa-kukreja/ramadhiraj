import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import dns from  "dns";
import contactRoutes from "./routers/contactroute.js";
import productEnquiryRoutes from "./routers/productenquiryroute.js";



dns.setServers(["1.1.1.1","8.8.8.8"]);
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("this is the ramadhiraj server");
});


app.use("/api/contact", contactRoutes);
app.use("/api/product-enquiry", productEnquiryRoutes);

const PORT = process.env.PORT;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
  });
});
