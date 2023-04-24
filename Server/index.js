const app = require('./src/utils/app')
const PORT = 3001;

app.listen(PORT, () => {
   console.log(`Server raised in port: http:localhost:${PORT}`);
});