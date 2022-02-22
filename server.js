import fetch from "node-fetch";
import morgan from "morgan";
import  express  from "express";
import cors from "cors";

// ------- OLD VERSION ---------
// const express = require('express')
// const cors = require('cors')
// const morgan = require('morgan')
//const fetch = require ('node-fetch')

const app = express()

app.use(cors())
app.use(morgan('coins'))

//-H x-access-token: 53a0b0a7e4f2fa59519e4
//routes 
app.get("/coins", (req, res) => {
    const url= "https://api.coinranking.com/v2/coins";
    (async () => {
        try{
            await fetch(`${url}`, {
                headers: {"x-access-token": `${process.env.COIN_RANKING_API_KEY}`}
            }).then((response)=> response.json())
            .then((json)=> {
                console.log(json)
                res.json(json)
            })
        }catch (error){
            console.log(error)
        }     
    })()
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
console.log(`Listening on Port, ${port}`)
})

