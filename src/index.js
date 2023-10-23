const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
const maileSender = require('./config/email-config');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    try {
        const response = await maileSender.sendMail({
            from: ServerConfig.GMAIL_EMAIL,
            to: "abhijeetsahoomsd@gmail.com",
            subject: "IS the email working properly",
            text: "If not then report it" 
        });
        console.log(response);
    } catch (error) {
        console.log(error);
    }
});
