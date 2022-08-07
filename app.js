const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

mongoose.connect('mongodb+srv://UerberTimei:test123@nodetest.zgnbl.mongodb.net/?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
    console.log('connected to mongoose')
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log('server has started on port 4000')
});