//  Online Food Delivery


function orderReceived(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Order Reveiced")
            // reject("Order Failed")
        },1000)
    })
}

function preparingFood(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Food Preparing")
            // reject("Failed to prepare the Food")
        },3000)
    })
}

function packingFood(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Food Packed successfully")
            // reject("Failed To Pack The food")
        },2000)
    })
}

function AssignDeliveredPerson(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("successfully Assign delvered person")
            // reject("Failed to assign the delivery person")
        },2000)
    })
}


function deliveringFood(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("delivered food Successfully ")
            // reject("Failed to the delivery food")
        },4000)
    })
}


orderReceived()
          .then(res => {console.log(res); return preparingFood()})
          .then(res => {console.log(res); return packingFood()})
          .then(res => {console.log(res); return AssignDeliveredPerson()})
          .then(res => {console.log(res); return deliveringFood()})
          .then(res => console.log(res))
          .catch(err => console.error(res))


// Movie Ticket Booking

function selectTheSeats(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("seats successfully selected ")
            // reject("Failed to select the seats")
        },2000)
    })
}

function paymentRecieved(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Payment received")
            // reject("Failed to receive the payment")
        },3000)
    })
}

function generatingTicket(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("tickets booked successfully")
            // reject("Failed to book the tickets")
        },1000)
    })
}


function emailedTickets(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("booked ticket successfully send to email")
            // reject("Failed to send the tickets to email")
        },2000)
    })
}

selectTheSeats() 
             .then(res => {console.log(res); return paymentRecieved()})
             .then(res => {console.log(res); return generatingTicket()})
             .then(res => {console.log(res); return emailedTickets()})
             .then(res => console.log(res))
             .catch(err => console.error(err))




// Car Service Center 

function carCheck_in(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("car chech-in completed")
            // reject("Failed to car check-in")
        },1000)
    })
}

function oilChange(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Oil chenged successfully")
            // reject("Failed to change the oil")
        },2000)
    })
}

function EngineCheck(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Engine checked successfully")
            // reject("Failed to check the engine")
        },3000)
    })
}

function carWashed(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("car washed successfully")
            // reject("Failed to wash the car")
        },2000)
    })
}

function finalQualityCheck(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("final quality checked")
            reject("Failed to to check final quality check")
        },2000)
    })
}


carCheck_in()
        .then(res => {console.log(res); return oilChange()})
        .then(res => {console.log(res); return EngineCheck()})
        .then(res => {console.log(res); return carWashed()})
        .then(res => {console.log(res); return finalQualityCheck()})
        .then(res => console.log(res))
        .catch(err => console.error(err))

        
//  Laptop Repair Service 


function diagnosiongIssue(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Laptop Diagnosed successfully")
            // reject("Failed to check Laptop Diagnose")
        },3000)
    })
}

function replacingFaultyParts(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Issue parts repared successfully")
            // reject("Failed to repare the parts")
        },4000)
    })
}

function updatingSoftware(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("software updated successfully")
            // reject("Failed to upate the software")
        },2000)
    })
}

function finalTesting(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Final check done found no issues")
            // reject("Failed to check the final Testing")
        },2000)
    })
}

function returnToCustomer(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("successfully retured to customer")
            // reject("Failed to return to the customer")
        },1000)
    })
}


diagnosiongIssue()
             .then(res => {console.log(res); return replacingFaultyParts()})
             .then(res => {console.log(res); return updatingSoftware()})
             .then(res => {console.log(res); return finalTesting()})
             .then(res => {console.log(res); return returnToCustomer()})
             .then(res => console.log(res))
             .catch(err => console.error(err))

// Online Course Enrollment

function checkingCourseAvailability(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Course is available")
            // reject("Course is not available")
        },1000)
    })
}

function paymentRecieved(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("payment received successfully")
            // reject("Failed to process the payment")
        },3000)
    })
}

function generatedEnrollmentId(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("generated EnrollmentId successfully")
            // reject("failed to generate the entrollmentId")
        },1000)
    })
}

function courseMaterials(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("send course material successfully")
            // reject("Failed to send the course Materials")
        },2000)
    })
}

function accessToLiveClassess(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("granted live classes access")
            // reject("Failed to grant live classes access")
        },2000)
    })
}


checkingCourseAvailability()
                         .then(res => {console.log(res); return paymentRecieved()})
                         .then(res => {console.log(res); return generatedEnrollmentId()})
                         .then(res => {console.log(res); return courseMaterials()})
                         .then(res => {console.log(res); return accessToLiveClassess()})
                         .then(res => console.log(res))
                         .catch(err => console.error(err))