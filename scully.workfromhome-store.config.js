exports.config = {
  projectRoot: "./src",
  projectName: "workfromhome-store",
  outDir: './dist/static',
  routes: {
    '/users/:userId': {
        type: 'json',
        userId: {
            url: 'http://www.mocky.io/v2/5eb3fe2a0e00006700081816',
            property: 'id'
        }
    }
  }
};