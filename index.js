const PORT = 8080;
const express = require('express');
const app = express();

items = ['Chair', 'Table', 'Lamp'];
cost = [10, 50, 5];

app.use('/static/', express.static('static'));

app.get('/items/', function (req, res) {
    res.send(items);
});
app.get('/items/:itemId/cost/', function (req, res) {
    res.send(cost[req.params.itemId].toString());
});

app.listen(PORT, function () {
    console.log('Server started at port ' + PORT);
});
