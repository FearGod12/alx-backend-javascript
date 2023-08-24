class AppController {
  static getHomepage (request, response) {
    response.status(200);
    return response.send('Hello Holberton School!');
  }
}

export default AppController;
