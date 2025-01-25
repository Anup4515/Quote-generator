import mongoose from "mongoose";
const todoschema = new mongoose.Schema({
    quote: {
        type: String,
        required: true,
        unique: true
    },
    writer: {
        type: String,
        required: true
      }
});
const Quote = mongoose.model("Quote",todoschema);
export default Quote;