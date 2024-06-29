import { handleAsyncTryCatch } from "../../utlis/asyncTryCatch.utlis";

const createUser = handleAsyncTryCatch(async (req, res) => {
  //     git init
  // git add README.md
  // git commit -m "first commit"
  // git branch -M main
  // git remote add origin https://github.com/1104Anikbarua/next-portfolio-server.git
  // git push -u origin main
});

export const authControllers = {
  createUser,
};
