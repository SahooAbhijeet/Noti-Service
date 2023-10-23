const { EmailService } = require('../services');
const { StatusCodes } = require('http-status-codes');
const {ErrorResponse, SuccessResponse} = require('../utils/common');

async function createEmail(req, res) {
    try {
        const response = await EmailService.createTicket({
            subject: req.body.subject,
            content: req.body.content,
            recipientEmail: req.body.recipientEmail
        });
        SuccessResponse.data = response;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json(ErrorResponse);
    }
}

module.exports = {
    createEmail
}