import mongoose from 'mongoose';
import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import path from 'path';

import { typeDefs, resolvers } from './schemas/index.js';

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/OnsiteComm', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

db.once('open', async () => {
    console.log('MongoDB connected successfully!');
    
    console.log('Starting Apollo Server...');
    await server.start();

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, '../client/dist')));
        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, '../client/dist/index.html'));
        });
    }

    app.use('/graphql', expressMiddleware(server));

    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
});
