import express from "express";
import axios from "axios";
import cors from "cors";
import { Request, Response } from "express";
import * as dotenv from "dotenv";

dotenv.config();

const SHOPIFY_API_URL = "https://xaadq2-q9.myshopify.com/admin/api/2024-10";
const SHOPIFY_ACCESS_TOKEN = process.env.SHOPIFY_API_KEY;
console.log(SHOPIFY_ACCESS_TOKEN);

const app = express();

const corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));
app.use(express.json());

const fetchProducts = async (page_info: string | null, limit: number) => {
  let url = `${SHOPIFY_API_URL}/products.json?limit=${limit}`;
  if (page_info) {
    url += `&page_info=${page_info}`;
  }

  const response = await axios.get(url, {
    headers: {
      "X-Shopify-Access-Token": SHOPIFY_ACCESS_TOKEN,
    },
  });

  return {
    products: response.data.products,
    linkHeader: response.headers.link || "",
  };
};

app.get("/api/products", async (req: Request, res: Response) => {
  try {
    const { page_info, limit } = req.query;
    const data = await fetchProducts(page_info as string, Number(limit) || 10);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
