const http = require("http")

function handler(req, res) {
    const url = req.url

    const [_, operacija, numOne, numTwo] = req.url.split("/")

    let result
    switch(operacija) {
        case "sobiranje":
            result = Number(numOne) + Number(numTwo)
              res.end(`${result}`)
            break 
        case "razlika": 
            result = Number(numOne) - Number(numTwo)
              res.end(`${result}`)
            break
        case "mnozenje":
          result = Number(numOne) * Number(numTwo)
              res.end(`${result}`)
            break
        case "delenje":
          result = Number(numOne) / Number(numTwo)
              res.end(`${result}`)
            break            
        default: 
            res.end("Welcome to the calculator app")      
    }
}

// const server = http.createServer(handler)
// server.listen(10001);

