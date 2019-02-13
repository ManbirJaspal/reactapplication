const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const db = require('./queries')

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API'})   
})

app.get('/student', db.getStudents)
app.get('/student/:id', db.getStudentById)
app.post('/student', db.createStudent)
app.put('/student/:id', db.updateStudent)
app.delete('/student/:id', db.deleteStudent)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})
