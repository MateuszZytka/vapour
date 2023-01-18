const mongoose = require('mongoose');

mongoose.set("strictQuery", false);

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb+srv://vapour:vapour123@cluster0.k7nw0g1.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

module.exports = mongoose.connection;
