//index.js
const mongoose = require('mongoose');

// let url="https://localhost:8080/users"

// Connect to MongoDB
main()
    .then(()=> {
         console.log('Connection Successful');
    })
    .catch((err) => console.log(err));
    async function main() {
        await mongoose.connect('mongodb://127.0.0.1:27017/test');
    }

const userSchema = new mongoose.Schema({
    name : String,
	email: String,
	age: Number
    });


const User = mongoose.model('User', userSchema);

User.deleteOne({name:"Bruce"}).then((res) => {
    console.log(res);
});

// User.findOneAndUpdate({name: "Bruce"},{age: 42},{new: true}).then((res) => 
//     {
//          console.log(res); 
//     }).catch((err) =>{
//         console.log(err)
//     });

// User.findById({_id:"678b6a3a87d7304b973540db"})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err)
//     });

// const Employee = mongoose.model('Employee', userSchema);

// Create and Save a new User
// const user2 = new User({
//     name: "Aniket",
//     email: "aniket@gmail.com",
//     age: 48
// });

// User.insertMany([
//     {name: "Tony",email:"tony@gmail.com",age: 50},
//     {name: "Peter",email:"peter@gmail.com",age: 45},
//     {name: "Bruce",email:"bruce@gmail.com",age: 49},
// ]).then((res)=>{ //Promise return kare ga !!! And we will return the .then() function => with a callback 
//     console.log(res);
// });

// user2
//     .save()
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err)
//     });

/*
PS C:\Users\HP\OneDrive\Desktop\DELTA4\MONGO_NEW> node index.js
Connection Successful
{ acknowledged: true, deletedCount: 1 }

*/
