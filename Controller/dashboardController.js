const { AddEmployeeModel } = require("../Model/dashboardModel")





const addEmployee = async (req, res) => {
    const { firstName, lastName, email, department, salary } = req.body
    try {
        const newEmployee = await new AddEmployeeModel({ firstName, lastName, email, department, salary })
        newEmployee.save()
        res.status(200).send({ "msg": "New Employee Has Been Added" })
    } catch (error) {
        res.status(400).send({ "msg": error.message })
    }

}

const getEmployees=async(req,res)=>{
   try {
    let employees=await AddEmployeeModel.find()
    res.status(200).send(employees)
   } catch (error) {
    res.status(400).send({ "msg": error.message })
   }
}

module.exports = {
    addEmployee,
    getEmployees
}