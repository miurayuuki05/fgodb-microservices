const exp = require('express');
const app = exp();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
});

app.listen(process.env.LOCAL_PORT , () => {
    console.log(`Server is running at http://localhost:${process.env.LOCAL_PORT}`);
});

