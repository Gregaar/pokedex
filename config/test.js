module.exports = {
  app: {
    port: 3000,
  },
  mongo: {
    url: "mongodb://127.0.0.1:27017/poke-project-test-api",
  },
  pokeapi: {
    baseUrl: "https://pokeapi.co/api/v2",
  },
  JWT_SECRET: {
    signature: "testytester",
    refresh: "testietickles",
  },
};
