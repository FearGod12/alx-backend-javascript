import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents (request, res) {
    try {
      const { cs, swe } = await readDatabase(process.argv[2]);
      let response = 'This is the list of our students\n';
      response += `Number of students in CS: ${cs.length}. List: ${cs.join(', ')}\n`;
      response += `Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`;
      res.status(200).send(response);
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor (req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    try {
      const { cs, swe } = await readDatabase(process.argv[2]);
      let response;
      if (major === 'CS') {
        response = `List: ${cs.join(', ')}`;
      } else {
        response = `List: ${swe.join(', ')}`;
      }
      res.status(200).send(response);
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
