const http = require("http");

function conversion(req, res) {
  const url = req.url;

  const [_, operacija, numbOne] = req.url.split("/");

  let result;
  switch (operacija) {
    case "milestokm":
      result = Number(numbOne) * 1.6;
      res.end(`${result}`);
      break;

    case "fttometers":
      result = Number(numbOne) * 0.3048;
      res.end(`${result}`);
      break;
    case "celsiustofahrenheit":
      result = (Number(numbOne) * 9/5)  + 32
      res.end(`${result}`);
      break;

    case "poundstokilograms":
      result = Number(numbOne) * 0.45359237;
      res.end(`${result}`);
      break;

    default:
      res.end("Welcome to the barber shop");
  }
}

const newServers = http.createServer(conversion);
newServers.listen(10011, () => {
  console.log("server start");
});
