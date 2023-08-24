const express = require('express');
const routes = require('./routes/index').default;

const app = express();
const Port = 1245;
app.use(express.json());

app.use('/', routes);

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});

export default app;
