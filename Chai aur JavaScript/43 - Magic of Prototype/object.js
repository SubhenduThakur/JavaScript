/* 
function multiply(num) {
  return num * 5;
}
multiply.power = 2;

console.log(multiply(5));
console.log(multiply.power); 
*/

function createUser(username, score) {
  this.username = username;
  this.score = score;
}
createUser.prototype.increment = function () {
  this.score++;
};

const user = new createUser("Subho", 24);
console.log(user);
user.increment();
