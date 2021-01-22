// let hien = {
//     array:[1,2,3],
//     name:"Hien",
//     age:28,
//     plusAge:function(){
//         let self = this;
//         function total(){
//             return this.age + 1;
//         }
//         return total();
//     }
// }
// console.log(hien.plusAge())

function Person(firstName,hobbies){
    this.firstName = firstName; 
    this.hobbies = hobbies;
    this.listHobbies = function(){
        return this.hobbies.map((function(hobby){
            console.log(this.firstName + " love" + hobby);
        }).bind(this)) 
    }
}

let Alex = new Person("Alex",[
    "Racing",
    "Playing game",
    "Watching video"
])
Alex.listHobbies();


// let myInfor = {
//     name:"Hien",
//     age:18,
//     gender:"male"
// }

// function showMyInfor(){
//     console.log(`${this.name},${this.age},${this.gender}`);
// }

// let newFunc = showMyInfor.bind(myInfor);
// newFunc();


//using arrays method in object
// let argsToArray = function(){
//     let a = [].slice.call(arguments);
//     console.log(a);
// }

// argsToArray(1,2,3)

// let mammal = function(legs){
//     this.legs = legs;
// }
// let cat = function(legs,isDomesticated){
//     // mammal.call(this,legs);
//     // this.isDomesticated = isDomesticated;
//     mammal.call(cat,legs)
//     this.isDomesticated = isDomesticated
// }

// let lion = new cat(4,false);
// console.log(lion)

//Bind pratical
// let button = function(content){
//     this.content = content;
// } 
// button.prototype.click = function(){
//     console.log(`${this.content} clicked`)
// }
// let newButton = new button("add");

// let boundButton = newButton.click.bind(newButton);
// boundButton()


// let myObj = {
//     asyncGet(callback){
//         callback();
//     },
//     parse(){
//         console.log("parse called")
//     },
//     render(){
//         this.asyncGet((function(){
//             this.parse()
//         }).bind(this))
//     }
// }
// myObj.render();

