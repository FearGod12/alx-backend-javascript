const http = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    const { students, csStudents, sweStudents } = await countStudents(process.argv[2]);
    res.write(`Number of students: ${students.length}\n`);
    res.write(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}\n`);
    res.write(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}\n`);
    res.end();
  }
});

app.listen(port);

module.exports = app;