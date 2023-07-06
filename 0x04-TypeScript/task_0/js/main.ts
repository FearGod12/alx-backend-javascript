interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'onyenike',
    lastName: 'FearGod',
    age: 20,
    location: 'ibadan'
};
const student2: Student = {
    firstName: 'Alfred',
    lastName: 'onyes',
    age: 23,
    location: 'Agbor'
};

const studentsList: Student[] = [student1, student2];
const table = document.createElement('table');

studentsList.forEach(student => {
    const row = document.createElement('tr');
    const firstName = document.createElement('td')
    const location = document.createElement('td')
    firstName.textContent = student.firstName;
    location.textContent = student.location;
    row.appendChild(firstName);
    row.appendChild(location);
    table.appendChild(row);
});

document.body.appendChild(table);