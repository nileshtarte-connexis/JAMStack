exports.config = {
  projectRoot: "./src",
  projectName: "workfromhome-store",
  outDir: './dist/static',
  routes: {
    '/users/:userId': {
        type: 'json',
        userId: {
            url: 'http://www.mocky.io/v2/5eb5458e3100005e0069944c',
            property: 'id'
        }
    }
  }
};