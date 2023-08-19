interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const student_1: Student = {
  firstName: 'Adewale',
  lastName: 'Adelakun',
  age: 45,
  location: 'Alaska',
}

const student_2: Student = {
  firstName: 'Excel',
  lastName: 'Kelechi',
  age: 32,
  location: 'NewYork'
}

let studentsList: [Student, Student] = [student_1, student_2];


    let table = document.createElement('table');
    document.body.appendChild(table); // Drew the main table node on the document

    for (let i = 0; i<4; i++) { 
        let tr = document.createElement('tr'); //Create 3 <tr> elements assigned to a unique letiable BUT need a working alternative for 'tr[i]'
        table.appendChild(tr); // Append to <table> node

        for (const stud of studentsList) {
            // for name
            let tdname = document.createElement('td');
            tdname.innerHTML = stud.firstName;
            tr.appendChild(tdname); // Take string from placeholder letiable and append it to <tr> node

            //for location
            let tdlocation = document.createElement('td');
            tdlocation.innerHTML = stud.firstName;
            tr.appendChild(tdlocation); // Take string from placeholder letiable and append it to <tr> node
        }
    }