// const express = require('express');
// const { womenProducts, WnewProducts,WomenXclusive, MenProducts, MenXclusive,MnewProducts,kidsProducts,KidsXclusive,KnewProducts, relatedProducts,newproducts } = require('./database/data')

// const app = express();

// app.get('/api/women',(req,res)=>{
//     res.status(200).send(womenProducts)
// })
// app.get('/api/womenNew', (req,res)=>{
//     res.status(200).send(WnewProducts)
// })
// app.get('/api/wxclusive',(req,res)=>{
//     res.status(200).send(WomenXclusive)
// })
// app.get('/api/women/:id',(req,res)=>{
//     const womenProduct = womenProducts.find((el)=>el._id===req.params.id)
//     res.status(200).send(womenProduct) 
// })
// app.get('/api/men',(req,res)=>{
//     res.status(200).send(MenProducts)
// })
// app.get('/api/men/:id',(req,res)=>{
//     const menProduct = MenProducts.find((el)=> el._id===req.params.id)
//     res.status(200).send(menProduct)
// })
// app.get('/api/mxclusive',(req,res)=>{
//     res.status(200).send(MenXclusive)
// })
// app.get('/api/menNew', (req,res)=>{
//     res.status(200).send(MnewProducts)
// })
// app.get('/api/related',(req,res)=>{
//     res.status(200).send(relatedProducts)
// })
// app.get('/api/kids',(req,res)=>{
//     res.status(200).send(kidsProducts)
// })
// app.get('/api/kids/:id',(req,res)=>{
//     const kidProduct = kidsProducts.find((el)=>el._id===req.params.id)
//     res.status(200).send(kidProduct)
// })
// app.get('/api/kxclusive',(req,res)=>{
//     res.status(200).send(KidsXclusive)
// })
// app.get('/api/kidsNew',(req,res)=>{
//     res.status(200).send(KnewProducts)
// })
// app.get('/api/newProducts',(req, res)=>{
//     res.status(200).send(newproducts)
// })
// app.listen(7000,()=>{
//     console.log(`server listening on port 7000....`)
// })