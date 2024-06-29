import app from "./app";
const port = 5000;

const main = async () => {
  try {
    app.listen(port, () => {
      console.log(`server is running in port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

main();
