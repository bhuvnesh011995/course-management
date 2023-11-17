const mongoose = require("mongoose");

mongoose.connect(process.env.MONGOOSE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let conn = mongoose.connection


conn.on("error",()=>{
  console.log("error occured")
})
conn.once("open",()=>{
  console.log("connected to db")
})