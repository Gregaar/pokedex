module.exports = {
  app: {
    port: process.env.PORT,
  },
  mongo: {
    url: "mongodb+srv://admin:toast123!@kanto-6paqb.mongodb.net/test?retryWrites=true&w=majority",
  },
  pokeapi: {
    baseUrl: "https://pokeapi.co/api/v2",
  },
};
