// Spread Operator (Expands)
// If ... expands an array or object into individual elements, it's the spread operator.

function spread(...args){
    for(let i in args)
    {
        console.log(args[i]);
    }
}
spread(1,2,3,4,5,6)

//Rest

function Rest(...data){
    const[firstnumber, secondnumber,,fourthnumber,...othernumbers] = data
    console.log("this is restnumber",firstnumber);
    console.log("this is restnumber",secondnumber);
    console.log("this is restnumber",fourthnumber);
    console.log("Other number",othernumbers);
}
const array = [1,2,3,4,5,56,6767]
Rest(...array)
