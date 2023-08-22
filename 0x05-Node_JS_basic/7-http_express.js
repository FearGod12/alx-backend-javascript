const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  let response = 'This is the list of our students\n';
  try {
    const { students, csStudents, sweStudents } = await countStudents(process.argv[2]);
    response += `Number of students: ${students.length}\n`;
    response += `Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}\n`;
    response += `Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`;
    res.send(response);
  } catch (err) {
    res.send(response + err.message);
  }
});

app.listen(1245);

module.exports = app;
