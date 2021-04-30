const  express = require('express')
const router  =  express.Router()
const User = require('../models/User')

router.post('/registration', async(req,res)=>{
  try {
    const {name,email,password}=req.body
    // console.log(name,password);
    const newUser = await User.create({
      name,email,password
    })
    res.status(200).json({newUser})
  } catch (error) {
    res.status(404).json({ succes: false, msg: error.message });
  }
})



module.exports = router
