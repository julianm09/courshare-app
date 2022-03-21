import { connectToDatabase } from "../../utils/mongodb";
export default async (req, res) => {
  try {
    const { email, password, user } = req.query;

    const { db } = await connectToDatabase();

    await db.collection("users").insert(
        
    );

    return res.json({
      message: "Post added successfully",
      success: true,
    });
  } catch (error) {
    // return an error
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
};
