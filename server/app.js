//import {express} from 'express';
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require ('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//permite requests desde varios origenes
app.use(cors()); 


//connect to mlab database
mongoose.connect('mongodb://esteban2054:3385723Junker@ds239578.mlab.com:39578/graphql-start')
mongoose.connection.once('open', ()=>{
    console.log('connected to database');
})

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening in the 4000 port');
})