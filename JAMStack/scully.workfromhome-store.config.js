exports.config = {
  projectRoot: "./src",
  projectName: "workfromhome-store",
  outDir: './dist/static',
  routes: {
    '/users/:userId': {
        type: 'json',
        userId: {
            url: 'http://localhost:1337/user-details',
            property: 'id'
        }
    }
  }
};