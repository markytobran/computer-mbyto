module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
            @import "./src/assets/scss/_variables.scss";
          `,
      },
    },
  },
};
