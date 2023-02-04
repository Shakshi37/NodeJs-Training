const x=[
    {
        Emp_code: "SCIKEY01",
        Name: "Hardik",
        Designation: "PM",
        Business_unit: "Scikey",
        Branch: "Surat",
        DOB: "09/28/1997",
        Department: "PMS",
        DOJ: "22-02-2002",
        Email: "hardik@gmail.com",
        Mob_no: "9977886601",
        Gender: "MALE",
        Experience: 3
    },
    {
        Emp_code: "SCIKEY02",
        Name: "Vidhi",
        Designation: "AD",
        Business_unit: "Scikey",
        Branch: "Surat",
        DOB: "05/05/2000",
        Department: "AMS",
        DOJ: "04-09-2002",
        Email: "vidhi@gmail.com",
        Mob_no: "8237767340",
        Gender: "FEMALE",
        Experience: 2,
        salary: 30000
    },
    {
        Emp_code: "SCIKEY04",
        Name: "Pratik",
        Designation: "DEV",
        Business_unit: "Scikey",
        Branch: "Mumbai",
        DOB: "10/30/1987",
        Department: "GMS",
        DOJ: "10-02-2006",
        Email: "pratik.khan@gmail.com",
        Mob_no: "999978801",
        Gender: "MALE",
        Experience: 10,
        salary: 80000
    },
    {
        Emp_code: "SCIKEY05",
        Name: "Komal",
        Designation: "SDEV",
        Business_unit: "Scikey",
        Branch: "Surat",
        DOB: "05/28/1990",
        Department: "AMS",
        DOJ: "15-03-2001",
        Email: "komal@gmail.com",
        Mob_no: "997788000",
        Gender: "FEMALE",
        Experience: 1
    },
    {
        Emp_code: "SCIKEY06",
        Name: "Raj",
        Designation: "PM",
        Business_unit: "Scikey",
        Branch: "Mumbai",
        DOB: "09/28/1977",
        Department: "PMS",
        DOJ: "10-02-2000",
        Email: "raj@gmail.com",
        Mob_no: "9977885555",
        Gender: "MALE",
        Experience: 3,
        salary: 38000
    },
    {
        Emp_code: "SCIKEY07",
        Name: "Tisha",
        Designation: "PM",
        Business_unit: "Scikey",
        Branch: "Surat",
        DOB: "03/23/1997",
        Department: "PMS",
        DOJ: "22-02-2002",
        Email: "tisha@gmail.com",
        Mob_no: "2222286601",
        Gender: "FEMALE",
        Experience: 3,
        salary: 50000
    }
    ]
function byDesignation(a,b){
    if(a.Designation.toString() < b.Designation.toString())
    return -1
}

function byExperience(a,b){
    return (b.Experience - a.Experience)
}
function byCode(a,b){
    if(a.Emp_code.toString() < b.Emp_code.toString())
    return -1
}
a=[]

x.map(ele=>{
let txt=ele.DOB
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var date = new Date(ele.DOB);
// console.log(months[date.getMonth()] + ' ' +  (date.getDate()) + ' ,' + date.getFullYear());

ele.DOB=months[date.getMonth()] + ' ' +  (date.getDate()) + ' ,' + date.getFullYear();

// console.log(ele)
})
function byDOB(a,b){
    let da = new Date(a.DOB),
    db = new Date(b.DOB);
return db - da;
}

console.log(x.sort( byDOB))