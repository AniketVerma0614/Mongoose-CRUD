//books.js
const mongoose = require('mongoose');

main()
    .then(()=> {
         console.log('Connection Successful');
    })
    .catch((err) => console.log(err));
    async function main() {
        await mongoose.connect('mongodb://127.0.0.1:27017/amozon');
    }

    const bookSchema = new mongoose.Schema({
        title:{
            type: String,
            required: true,
        },
        author:{
            type: String,
        
        },
        price: {
            type: Number,
            min: [1,"Price is too low for Amazon Selling !!!"],
        },
        discount:{
            type: Number,
            default: 0,
        },
        category: {
            type: String,
            enum: ['Fiction', 'Non-Fiction'],
            default: 'Non-Fiction'
        },
        genre: [String]
    });

const Book = mongoose.model("Book",bookSchema);

Book.findByIdAndUpdate("678cc550cab7cf3ca48df83a",
    {price: -500},
    {runValidators: true}
)
    .then(
    (res)=> {
        console.log(res);
    }
).catch(err => {
    console.log(err.errors.price.properties.message);
});

// let book1 = new Book({
//     title: "How to kill a MockingBird",
//     author: "Harper Lee",
//     price: "1234",
//     genre: ["comics", "friction", "superhoeros"]
// });
// book1.save().then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// });

/*
PS C:\Users\HP\OneDrive\Desktop\DELTA4\MONGO_NEW> node books.js
Price is too low for Amazon Selling !!!
Connection Successful

*/