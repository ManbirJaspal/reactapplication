const Pool = require('pg').Pool
const pool = new Pool({
    user: 'manbirsinghjaspal', 
    host: 'localhost',
    database: 'graddb',
    password: 'msnjaspal',
    port: 5432,
})

const getStudents = (request, response) => {
    pool.query('SELECT * FROM student ORDER BY sid ASC', (error, results) => {
        if(error) {
            throw error;
        }
        response.status(200).json(results.rows)
    })
}

const getStudentById = (request, response) => {
    const sid = parseInt(request.params.id)
    console.log("inside getStudentsbyID")
    console.log(body);
    
    
    pool.query('SELECT * FROM student WHERE sid = $1', [sid], (error, results) => {
        if(error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createStudent = (request, response) => {
    console.log("inside createStudent")
    console.log(request.body)
  const { sid, email, password, fname, lname } = request.body
  console.log(email)
  pool.query('INSERT INTO student ( email, password, fname, lname ) VALUES ($1, $2, $3, $4)', [email, password, fname, lname], (error, result) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${result.insertId}`)
  })
}

const updateStudent = (request, response) => {
    const sid = parseInt(request.params.id);
    const { email, password } = request.body;
    
    pool.query(
    'UPDATE student SET email = $1, password = $2 WHERE sid = $3', [email, password, sid], (error, results) => {
        if (error) {
        throw error
      }
    })
          response.status(200).send(`User modified with ID: ${sid}`)

}

const deleteStudent = (request, response) => {
  const sid = parseInt(request.params.id)

  pool.query('DELETE FROM studentudents WHERE sid = $1', [sid], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${sid}`)
  })
}

module.exports = {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
}