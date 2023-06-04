const app = require("./app");

const mongooseConnect = require("./db/connection");
const { PORT } = process.env;

async function startServer() {
  try {
    await mongooseConnect();
    app.listen(PORT, (err) => {
      if (err) {
        console.log("Server connection error");
      }
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  } catch (error) {
    console.log(error.message);
  }
}

startServer();
