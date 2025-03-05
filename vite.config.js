const path = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  root: "src/",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "src/index.html"),
        cart: path.resolve(__dirname, "src/cart/index.html"),
        checkout: path.resolve(__dirname, "src/checkout/index.html"),
        product1: path.resolve(__dirname, "src/product_pages/cedar-ridge-rimrock-2.html"),
        product2: path.resolve(__dirname, "src/product_pages/marmot-ajax-3.html"),
        product3: path.resolve(__dirname, "src/product_pages/northface-alpine-3.html"),
        product4: path.resolve(__dirname, "src/product_pages/northface-talus-4.html"),
      },
    },
  },
});
