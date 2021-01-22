//Call

// const animals = [
//     { species: 'Lion', name: 'King' },
//     { species: 'Whale', name: 'Fail' }
//   ];
  
//   for (let i = 0; i < animals.length; i++) {
//     (function(i) {
//       this.print = function() {
//         console.log('#' + i + ' ' + this.species
//                     + ': ' + this.name);
//       }
//       this.print();
//     }).call(animals[i], i);
//   }

// function greet() {
//     const reply = [this.animal, 'typically sleep between', this.sleepDuration].join(' ');
//     console.log(reply);
//   }
  
//   const obj = {
//     animal: 'cats', sleepDuration: '12 and 16 hours'
//   };
  
//   greet.call(obj);  // cats typically sleep between 12 and 16 hours


//Apply

// const numbers = [5, 6, 2, 3, 7];

// const max = Math.max.apply(this, numbers);

// console.log(max);
// // expected output: 7

// const min = Math.min.apply(null, numbers);

// console.log(min);



// const array = ['a', 'b'];
// const elements = [0, 1, 2];
// array.push.apply(array, elements);
// console.log(array); 

let newObj = {
    firstName:"Bui",
    middleName:"The",
    lastName:"Hien",
    fullName:function(){
        return `${this.firstName} ${this.middleName} ${this.lastName}`
    }
}
function showFullName(){
    return this.fullName();
}
let result = showFullName.bind(newObj);
console.log(result())