// Your code here
function createEmployeeRecord(array){
    //Converts each nested Array into an employee record using createEmployeeRecord and accumulates it to a new Array
  let employee = {firstName: `${array[0]}`, familyName: `${array[1]}`, title: `${array[2]}`, payPerHour: parseInt(`${array[3]}`)}

  //let employee = Object.assign({}, array)
  return employee
}



function createEmployeeRecords(array){
    // Converts each nested Array into an employee record using createEmployeeRecord and accumulates it to a new Array
let employeeRecord =[]
for (let i = 0; i < array.length; i++){
    employeeRecord.push(createEmployeeRecord(array[i]))
}
console.log(employeeRecord) 
return employeeRecord

}

//createEmployeeRecords([[ 'Loki', 'Laufeysson-Odinsson', 'HR Representative', 35 ],['Natalia', 'Romanov', 'CEO', 150 ]])

function createTimeInEvent(obj, stamp){
obj.timeInEvents = []

let hourString = stamp.substring(11,15)
let dateString = stamp.substring(0,10)

let newEvent = {type: "TimeIn", hour: parseInt(`${hourString}`), date: `${dateString}`}

obj.timeInEvents.push(newEvent);
return obj
}

function createTimeOutEvent(obj, stamp){
    obj.timeOutEvents = []
    
    let hourString = stamp.substring(11,15)
    let dateString = stamp.substring(0,10)
    
    let newEvent = {type: "TimeOut", hour: parseInt(`${hourString}`), date: `${dateString}`}
    
    obj.timeOutEvents.push(newEvent);
    return obj
    }










//[ 'Loki', 'Laufeysson-Odinsson', 'HR Representative', 35 ]
//[ 'Natalia', 'Romanov', 'CEO', 150 ]

//  Object.keys(testEmployee) = ['firstName', 'familyName', 'title', 'payrate']