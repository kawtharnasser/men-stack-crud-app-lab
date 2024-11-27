const Desert = require('../models/deserts')

const router = require('express').Router()

router.get('/deserts/new',(req,res)=>{
  res.render('deserts/new.ejs')
})

//add a desert to DB
router.post('/deserts', async (req,res)=>{
  if(req.body.isReadyToEat === "on"){
    req.body.isReadyToEat = true
  }else{
    req.body.isReadyToEat = false
  }

  await Desert.create(req.body)
  res.redirect("./deserts/")
})

router.get('/deserts', async (req,res)=>{
  const deserts = await Desert.find()
  res.render('deserts/index.ejs',{deserts})
})

router.get('/deserts/:desertId', async (req,res)=>{
  const desert = await Desert.findById(req.params.desertId)
  
  res.render('deserts/show.ejs',{desert})

})

router.delete('/deserts/:desertId',async (req,res)=>{
  await Desert.findByIdAndDelete(req.params.desertId)
  res.redirect('/deserts')
})

router.get('/deserts/:desertId/edit', async (req,res)=>{
  const desert = await Desert.findById(req.params.desertId)
  res.render('deserts/edit.ejs',{desert})
})

router.put('/deserts/:desertId', async (req,res)=>{
  if(req.body.isReadyToEat === "on"){
    req.body.isReadyToEat = true
  }else{
    req.body.isReadyToEat = false
  }

  await Desert.findByIdAndUpdate(req.params.desertId, req.body)

  res.redirect(`/deserts/${req.params.desertId}`)
})


module.exports = router