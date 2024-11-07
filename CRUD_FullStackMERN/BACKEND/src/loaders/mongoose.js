import mongoose from "mongoose";

async function startDB() {
  await mongoose.connect(
    "mongodb+srv://alancolli:OtL0TxBemPk4pkJy@firstcrud.6u3ex.mongodb.net/"
  );
}

export default startDB;
