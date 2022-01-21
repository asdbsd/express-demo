const express = require('express');
const hbs = require('express-handlebars');
const port = 3000;

const { homeController } = require('./controllers/homeController');
const catalogRouter = require('./src/catalog');


const app = express();

app.engine('.hbs', hbs.create({
    extname: '.hbs'
}).engine);
app.set('view engine', '.hbs');

app.use(express.urlencoded({ extended: true }));
app.use('/content', express.static('static'));
app.get('/', homeController);
app.use('/catalog', catalogRouter);


app.listen(port, () => 'Listening on port 3000');
