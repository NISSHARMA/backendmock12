

const express=require ("express")
const { addEmployee, getEmployees } = require("../Controller/dashboardController")

const dashboardRoute=express.Router()

dashboardRoute.post("/postemployees",addEmployee)
dashboardRoute.get("/getemployees",getEmployees)

module.exports={
    dashboardRoute
}