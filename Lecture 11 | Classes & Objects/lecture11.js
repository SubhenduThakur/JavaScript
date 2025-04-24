/* 
Q. You are creating a website for your college. Create a class User with 2 properties, name & email.
.  It also has a method called viewData() that allows user to view website.
*/
let data = "Secret Data"
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log(`Data = ${data}`);
        
    }
}

const student1 = new User("Peter", "peter123@gmail.com");
const student2 = new User("MJ", "mj69@gmail.com");
 

/* 
Q. Create a new class called Admin which inherits from User.
.  Add a new method called editData to Admin that allows it to edit website
*/

class Admin extends User {
    editData() {
        data = "some new data";
    }
}

const teacher = new Admin("teacher", "teacher123@gmail.com");


