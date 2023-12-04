const path = require("path");

module.exports = {
  entry: "./index.js", // Arquivo de entrada do seu aplicativo
  output: {
    filename: "bundle.js", // Nome do arquivo de saída
    path: path.resolve(__dirname, "dist"), // Diretório de saída
  },
};
