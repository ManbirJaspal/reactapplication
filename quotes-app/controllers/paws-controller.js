const Paws = require('../models/paws');

const pawsController= {};

console.log("inside paws controller");
pawsController.login = (req, res) => {
    Paws.login()
    .then(student => {
        res.json({
            message: 'Success',
            data: email
        });
    })
    .catch(err => {
    // If something goes wrong it logs the error in the console and sends it as a JSON object
    console.log(err);
    res.status(500).json({err});
  });
};
