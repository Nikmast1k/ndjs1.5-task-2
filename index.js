const http = require('http')
require('dotenv').config()

const myAPIKey = process.env.myAPIKey
const city = 'Moscow'
const url = `http://api.weatherstack.com/current?access_key=${myAPIKey}&query=${city}`
const options = {headers: {apikey: myAPIKey}}

http.get(url, options, (res) => {
    const {statusCode} = res
    if (statusCode !== 200) {
        console.log(`statusCode: ${statusCode}`)
        return
    }
    res.setEncoding('utf8')
    let rowData = ''
    res.on('data', (chunk) => rowData += chunk)
    res.on('end', () => {
        let parsedData = JSON.parse(rowData)
        console.log(parsedData)
    })
}).on('error', (err) => {
    console.error(err)
})




