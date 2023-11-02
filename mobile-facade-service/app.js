const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use('/user', userRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
