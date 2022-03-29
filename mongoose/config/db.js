const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
// dotenv.config();
// const uri = process.env.MONGO_URI;
const PORT = process.env.PORT || 5222
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster2.ofkfp.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;

module.exports.connect = () => {
  mongoose
    .connect(uri)
    .then(() =>
      app.listen(PORT, () =>
        console.log(`Server running on http://localhost:${PORT}`)
      )
    )
    .catch((error) => {
      throw error;
    });
}
/*    */
/*   mongoose
mongoose
  .connect(uri)
  .then(() => {
    console.log("💻 MongoDB Connected");
  })
  .catch((error) => console.error("issue connecting", error));
    .connect(uri)
    .then(() => {
      console.log("💻 MongoDB Connected");
    })
    .catch((error => console.error('issue connecting', error)));
    // .catch((err) => console.error(err));
} */
