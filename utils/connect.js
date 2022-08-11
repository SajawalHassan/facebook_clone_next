import mongoose from "mongoose";

export default () => {
  try {
    mongoose.connect(
      process.env.MONGODB_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => console.log("connected to mongodb")
    );
  } catch (error) {
    console.log("could not connect");
  }
};
