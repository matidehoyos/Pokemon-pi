const server = require('./src/app.js');
const { conn } = require('./src/db.js');

conn.sync().then(() => {
  server.listen(3002, () => {
    console.log('%s listening at 3002'); 
  });
});
