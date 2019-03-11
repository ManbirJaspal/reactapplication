const express = require('express');
const bodyParser = require('body-parser');
const Pool = require('pg').Pool;

const app = express();
const port = 8082;

const pool = new Pool({
    user: 'manbirsinghjaspal',
    host: 'localhost',
    database: 'graddb',
    password: 'msnjaspal',
    port: 5432,
});


app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
)

app.get('/student', getStudents);
app.post('/student', createStudent);


function getStudents (request, response) {
    console.log("inside getStudents");

    pool.query('SELECT * FROM student ORDER BY sid ASC', function(error, results) {
        if(error) {
            throw error;
        }
        response.status(200).json(results.rows)
    })
}


function createStudent (request, response) {
    console.log("inside createStudent");
    console.log(request.body);

    const email = request.body.emailId, password = request.body.password, fname = request.body.fname, lname = request.body.lname;
    console.log(email)
    pool.query('INSERT INTO student ( email, password, fname, lname ) VALUES ($1, $2, $3, $4)', [email, password, fname, lname], function(error, result) {
        if (error) {
            throw error
        }
        response.status(200);
    });

}


app.listen(port);
