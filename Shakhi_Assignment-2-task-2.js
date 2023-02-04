var a= "John;Smith;954-000-0000;200.5\nMich;Tiger;305-000-0000;11.50\nMonique;Vasquez;103-000-0000;25.25\nJohn;Smith;954-000-0000;110.45\nMich;Tiger;305-000-0000;350.10"
let newmyarr=[], newarr = [],myarr=[],out=[]
//--------------replace ; with , ----------------------------------------------------
const rep=a.replace(/;/g,",")
// console.log(rep)
//-------------------------split elements and store in myArray----------------------------
const myArray = rep.split("\n");
// console.log(myArray)
//--------Individual elements of myArray store in another array (myarr)--------------------
for(i=0;i<myArray.length;i++){
    myarr.push(new Array(myArray[i]))
}
// console.log(myarr)
//---Convert myarr elements in proper format (collection of unique values.)using split------
myarr.map((i)=>{
    newmyarr.push(i[0].split(','))
    newarr.push(i[0].split(',')[1])
    
})

//--Extract value of array and store in anothe array (collection of unique values)using set ---
var set = new Set(newarr)
var arrfinal = []
set.forEach(element => {

    arrfinal.push(element)
});
//--------match column specified by the number and calculate sum of that --------
let str=myarr.toString()
// console.log(str)
sumout=[]
var priceRegex = /[0-9]*[.][0-9]*/g
var match = str.match(priceRegex);
// console.log(match)
    var sum = 0;
    for (let i = 0; i < match.length; i++) {
        // console.log(match[i])
        sum += parseFloat(match[i]);
    }
        sumout.push(sum)
        // console.log(sumout)
out.push(match)
out.push(sumout)


console.log(newmyarr)
console.log(arrfinal)
console.log(out)

