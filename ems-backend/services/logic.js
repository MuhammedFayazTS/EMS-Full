// import db
const db = require('./db')

// get all emoloyees details
const  getAllEmployee =()=>{
    return db.Employee.find().then((response)=>{
        if(response){
            return {
                statusCode: 200,
                employee:response
            }
        }
        else{
            return{
                statusCode: 404,
                message: 'no such employee found'
            }
        }
    })
}


// add a new employee
const addEmployee=(id,name,age,designation,salary)=>{
    return db.Employee.findOne({id}).then((result)=>{
        if(result){
            return {
                statusCode: 401,
                message: 'Employee already exists'
            }
        }
        else{
            // store employee details in db
            const newEmployee = db.Employee({id,name,age,designation,salary})
            // to save employee details in db
            newEmployee.save()
            return {
                statusCode: 200,
                message: 'Employee added successfully'
            }
        }
    })
}

// delete an employee from database
const deleteEmployee=(id)=>{
    return db.Employee.deleteOne({id}).then((result)=>{
        if(result){
            return {
                statusCode: 200,
                message: 'Employee deleted successfully'
            }
        }
        else{
            return {
                statusCode: 404,
                message: 'Employee not found'
            }
        }
    })
}

// view an employee
const  viewEmployee =(id)=>{
    return db.Employee.findOne({id}).then((response)=>{
        if(response){
            return {
                statusCode: 200,
                employee:response
            }
        }
        else{
            return{
                statusCode: 404,
                message: 'no such employee found'
            }
        }
    })
}

// edit an employee
const updateEmployee =(id,name,age,designation,salary)=>{
    return db.Employee.findOne({id}).then((result)=>{
        if(result){
            result.id = id;
            result.name = name;
            result.age = age;
            result.designation = designation;
            result.salary = salary;
            result.save(); //to update the changes in db
            return {
                statusCode:200,
                message:'Emplyee data updated successfully'
            }
        }
        else{
            return{
                statusCode:404,
                message: 'no such employee found'
            }
        }
    })
}

module.exports ={
    getAllEmployee,
    addEmployee,
    deleteEmployee,
    viewEmployee,
    updateEmployee
}