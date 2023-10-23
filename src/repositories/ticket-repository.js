const CrudRepository  = require("./crud-repository");
const { Ticket } = require('../models'); 

class TicketRepository extends CrudRepository {
    constructor() {
        super(Ticket);
    }

    async getPendingEmails() {
        const response = await Ticket.findAll({
            where: {
                status: "PENDING"
            }
        });
        return response;
    }
}

module.exports = TicketRepository;