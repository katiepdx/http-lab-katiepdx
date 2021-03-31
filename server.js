const app = require('./lib/app');
const PORT = 7890;

app.listen(PORT, () => {
  console.log(`Application started! on ${PORT}`);
});
