import app from "./app";
import { createUser } from "./app/db/db.seed";
const port = 5000;

const main = async () => {
  try {
    app.listen(port, () => {
      console.log(`server is running in port ${port}`);
    });
    createUser();
  } catch (error) {
    console.log(error);
  }
};

main();
