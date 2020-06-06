const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});


const peopleSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

const People = mongoose.model("People", peopleSchema);
const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  rating: 34,
  review: "Sure why not"
});

const pineapple = new Fruit ({
  name: "Pineapple",
  rating: 6,
  review: "Sure why not"
});



//pineapple.save();

const Mango = new Fruit ({
  name: "Mango",
  rating: 10,
  review: "Pogchmap"
});

const Orange = new Fruit ({
  name: "Orange",
  rating: 5,
  review: "Meh"
});

// Fruit.insertMany([Mango, Orange], function(err){
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Success");
//   }
// })



// const person = new People ({
//   name: "John",
//   age: 37
// });

const person = new People ({
  name: "Amy",
  age: 33,
  favoriteFruit: pineapple
});

People.updateOne({name: "John"}, {favoriteFruit: Mango}, function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log("Updated");
  }
})

Fruit.find(function(err, fruits) {
  if(err) {
    console.log(err);
  } else {
    mongoose.connection.close();
    fruits.forEach(function(fruit) {
      console.log(fruit.name);
    })
  }
})
//person.save();
//fruit.save();
//
// Fruit.updateOne({name: "Apple"}, {name: "Peach"}, function(err) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Updated");
//   }
// })
//
// Fruit.deleteOne({name: "Orange"}, function(err) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Deleted");
//   }
// })
