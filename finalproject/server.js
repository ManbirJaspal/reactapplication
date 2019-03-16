const express = require('express');
const bodyParser = require('body-parser');
const Pool = require('pg').Pool;

const app = express();
const port = 8082;

var hosts = ['http://localhost:8080'].join(', ');

const pool = new Pool({
    user: 'manbirsinghjaspal',
    host: 'localhost',
    database: 'graddb',
    password: 'msnjaspal',
    port: 5432,
});


app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);

app.use((req, res, next) => {
    res.header('access-control-allow-origin', hosts);
    next();
});

app.get('/student', getStudents);
app.post('/student', createStudent);
app.post('/login', loginStudent);


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

    const email = request.body.emailId,
        password = request.body.password,
        fname = request.body.fname,
        lname = request.body.lname,
        address1 = request.body.address1,
        address2 = request.body.address2,
        city = request.body.city,
        state = request.body.state,
        zip = parseInt(request.body.zip);
 

    pool.query('INSERT INTO student (email, password, fname, lname, address1, address2, city, state, zip) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)', [email, password, fname, lname, address1, address2, city, state, zip], function(error, result) {
        if (error) {
            throw error
        }
        response.status(200);
    });

}

function loginStudent (request, response) {
    console.log("inside Login Student!!");
    console.log(request.query.email);
    const email = request.query.email;
    
    pool.query('SELECT * FROM STUDENT WHERE email=$1)', [email], function(error, result) {
        if(error) {
            throw error;
        }
        console.log(result.rows)
        response.status(200).json(result.rows);
    });
    
}
    

app.listen(port);
