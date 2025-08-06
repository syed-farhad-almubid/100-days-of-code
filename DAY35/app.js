
const user11 = {
    name:"Farhad",
    age:23
};

const user2 = Object.create(user11); //create a empty object and this line established a relationship betwenn user11 and user2

user2.name = "Farhad bro";

console.log(user2.__proto__);  //it will show the user11 object

//

const userMethods = {
	about : function(){
		return `${this.firstName} is ${this.age} yeasr old`},
	is18 : function(){
        return this.age >=18; 
    }
};

function createUser(firstName,lastName,age,email,address){
	const user = Object.create(userMethods);  
	user.firstName = firstName ; 
	user.lastName = lastName,
	user.age = age,
	user.email = email,
	user.address = address;	
    return user;
}


const user1 = createUser("syed farhad","almubid",23,"abc@gmail","myaddress");
console.log(user1);
console.log(user1.about());
