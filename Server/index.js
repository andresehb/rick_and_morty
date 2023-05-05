const app = require('./src/utils/app');
const { conn } = require('./src/DB_connection');
const PORT = 3001;

app.listen(PORT, async () => {
   console.log(`Server raised in port: http:localhost:${PORT}`);
   await conn.sync({ force: true });
});