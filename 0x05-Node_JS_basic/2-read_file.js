const fs = require('fs');

function countStudent (path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  const data = fs.readFileSync(path, 'utf8');

  const alldata = data.split('\n');
  const splitdata = alldata.map((each) => each.split(','))
    .filter((each) => each.length === 4 && each[0] !== 'firstname');
  const dbdata = splitdata.map((each) => {
    return {
      firstname: each[0],
      lastname: each[1],
      age: each[2],
      field: each[3]
    };
  });
  const SWE = dbdata.filter((student) => student.field === 'SWE').map((student) => student.firstname);
  const CS = dbdata.filter((student) => student.field === 'CS').map((student) => student.firstname);
  console.log(`Number of students: ${dbdata.length}`);
  console.log(`Number of students in CS: ${CS.length}. List: ${CS.join(', ')}`);

  console.log(`Number of students in SWE: ${SWE.length}. List: ${SWE.join(', ')}`);
  return { dbdata, SWE, CS };
}

module.exports = countStudent;
