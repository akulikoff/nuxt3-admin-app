import axios from "axios";
import { eventHandler } from "h3";
import dotenv from "dotenv";
dotenv.config();
export default eventHandler(async (event) => {
  try {
    const response = await axios.get(
      `${process.env.RANDOMUSER_API}/?results=5`
    );
    return response.data;
  } catch (error) {
    return {
      statusCode: 500,
      body: { error: "Failed to fetch users" },
    };
  }
});
