#! /usr/bin/env node

const bioCrypt = require('.')
const express = require('express')
const app = express()

app.get('/ids/:id', function (req, res) {
  bioCrypt(req.params.id)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

//bioCrypt()
