const DUMMY_TOKEN =
  "eyJlbWFpbCI6InNob2FpYjQwMzA4OTFAZ21haWwuY29tIiwiaWQiOiI2MWQyYWI1ZjA0NjU4NTNmOTEzNGUyZWQiLCJyb2xlIjoiVXNlciIsImlhdCI6MTY1MDAxNjA2NiwiZXhwIjoxNjgxNTUyMDY2fQ";
const parseAuthorizationHeader = (req) => {
  const header = req.header.authorization;
  if (typeof header === "undefined" || header === "null") {
    return null;
  }
  const token = header.split(" ")[1];

  return token;
};

const verifyToken = (token) =>
  new Promise((resolve, reject) => {
    if (token !== DUMMY_TOKEN) {
      const error = new Error("UNAUTHORIZED");
      error.code = 401;
      reject(error);
    }
    resolve();
  });

module.exports = {
  parseAuthorizationHeader,
  verifyToken,
};
