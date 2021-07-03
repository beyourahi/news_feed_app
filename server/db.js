const mongoose = require("mongoose");

(async () => {
    try {
        await mongoose.connect(process.env.mongodbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });

        console.log("DB Connected 🥳");
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
})();
