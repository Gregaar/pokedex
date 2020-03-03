module.exports = {
  app: {
    port: process.env.PORT,
  },
  mongo: {
    url: process.env.MONGODB_URI,
  },
  pokeapi: {
    baseUrl: "https://pokeapi.co/api/v2",
  },
};
