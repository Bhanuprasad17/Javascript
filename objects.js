/**
 * objects in javascript
 *----------------------- 
 *  
 *   objects are collection of key value pairs, where keys can be string or sybol
 *   in objects value can be any type of datatype, but to access the values from object
 *   we need a unique key
 *   Thare are three ways to create object 
 * ------------------------------------------
 *   1.literal object 
 *   2.using constructor
 *   3.Object.create()
 *   In js every datatype is an object(prototype)
 *   Ojects are represented in {}
 *   key and value pairs are separated by , (comma)
 *   Syntax :
 *            variable refVar = {}
 * 
 *   variable refVar = {
 *                    key : value,
 *                    key1 : value 
 *             }
 * 
 *   how to acccess value from obj
 *  --------------------------------
 *   1. refVar.keyName (dotNoation)
 *   2. refVar["keyName"] (square Notation) (rec)
 *   3. object.values(refVar)
 * 
 *   "Note : if there no key available in object then it will return undefined"
 *   -------------------------------------------------------------------------
 */


var obj = {
    "name": "Bhanu",
    "address": "hyderabad",
    "hno": 110,
    1234: "one two three"
}

// console.log(obj[1234]) if key in numbers formate than to access it we can use notation 
// if we use literal notation it will give syntax error



console.log(obj)
console.log(obj.name)
console.log(obj["name"])


console.log(obj.address)
console.log(obj["address"])

console.log(obj.hno)
console.log(obj["hno"])


// update the data

obj.name = "Bhanuprasad"
// console.log(obj.name)
obj["name"] = "virat"
obj["hno"] = 12346
console.log(obj)


// Add the data into object

obj["phone"] = "93811"
obj.email = "bhanu@123"
console.log(obj)
console.table(obj)

// delete the data from object

delete obj.phone
delete obj["address"]
console.table(obj)

var obj2 = {
    "empName": "Rajesh",
    "empId": 1,
    "empName": "Raghu"
}
// "if we write duplicate keys in object than old value will replaced with latest value"
console.log(obj2)
console.clear()

var obj3 = {
    "studentName": "satya",
    "studentId": 101,
    "studentAddress": {
        "city": "Hyderabad",
        "pincode": "500072",
        "state": "TG",
        "street": "Kphb metro"
    }
}

console.table(obj3)
console.table(obj3.studentName)
console.table(obj3.studentAddress)
console.table(obj3.studentAddress.city)


var obj4 = {
    "studentName": "suraji",
    "studentImages": ["iamge1", "image2", "image3"],
    "studentBikes": [{
        "name": "pulsar",
        "cc": 220,
        "color": "black"
    },
    {
        "name": "Yamaha r1",
        "cc": "1000",
        "color": "blue"
    },
    {
        "name": "Ns 250",
        "cc": "150",
        "color": "black"
    }
    ]
}

// console.table(obj4)

for (var element of obj4.studentImages){
    console.log(element)
}

console.log(obj4.studentBikes)

for (var element of obj4.studentBikes){
    console.log(element.cc)
}

// obj5.results[0].gender
// obj5["results"][0].gender

// obj5.results[0].name.titile
// obj5.results[0].name.first
// obj5.results[0].name.last


// obj5.reults[0].location.street.number


var obj6 = {
    "studentName": "satya",
    "studentId": 101,
    "studentAddress": {
        "city": "Hyderabad",
        "pincode": "500072",
        "state": "TG",
        "street": "Kphb metro"
    }
}

// for (var key in obj6){
//     // console.log(obj6.key) // undefind --> it is considered as key not object key 
//     // console.log(obj6[key])

//     if( key != "studentAddress"){
//         console.log(obj6[key])
//     }else{
//         for(var addkey in obj6.studentAddress){
//             console.log(obj6[key][addkey])
//         }
//     }
// }

console.log(obj6)

var {studentName, studentId, studentAddress : {city, pincode, state, street, pc}} = obj6
console.log(studentName, studentId)
// console.log(studentAddress)
console.log(city, pincode, state,street, pc)


var obj7 = {
    "hello" : "hello there"
}
// shallow copy vs deep copy in js
var obj8 = obj7

console.log(obj7)
console.log(obj8)

obj8.hello = "Hey there"

console.log(obj7)
console.log(obj8)


