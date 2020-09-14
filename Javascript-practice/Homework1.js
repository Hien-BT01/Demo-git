// check one number is equal to 100 or sum of two number is 100
var equal = function isEqualTo(a,b){
    if(a === 100 || b === 100 ||  a + b === 100){
        return true;
    }
    else{
        return false;
    }
}
console.log(equal(100,100));
console.log(equal(50,50));
console.log(equal());

// take the extension of a file
var getExtension = (str) => str.slice(str.lastIndexOf('.'))
console.log(getExtension('index.html'));

// make a next position of the position by standard alphaber
var rePlace = (strr) => 
strr.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join(', ')
console.log(rePlace('abcd'))

//get a new day/month/year
const  formateDate = (date = new Date()) => {
    const days = date.getDate()
    const Months = date.getMonth()
    const years = date.getFullYear()
    const time = date.getTime()
    return ` ${days}/${Months}/${years} \n ${time}`
}
console.log(formateDate())