const express = require('express')
var cors = require('cors')

const app = express()
app.use(cors())
const port = 3000

app.get('/', () => {
  res.status(200).send("OK")
})

app.get('/gameService', (req, res) => {
  
  const reelValues = [
    [4, 5, 2, 4, 5, 1, 3, 4, 2, 2, 6, 1],
    [2, 8, 3, 4, 2, 2, 2, 2, 1, 11, 3, 1],
    [1, 2, 9, 3, 4, 5, 2, 1, 1, 2, 10, 1],
    [1, 1, 4, 1, 5, 4, 5, 2, 4, 4, 10, 1],
    [11, 5, 9, 2, 4, 6, 11, 3, 1, 11, 10, 1]
    // [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    // [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    // [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    // [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11],
    // [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11]
  ];

  const formattedReelValues = reelValues.map(row => row.join(','));

  const paytablePattern = [
    [9,9,9,9,9],
    [10,10,10,10,10],
    [11,11,11,11,11],
    [9,10,11,10,9],
    [11,10,9,10,11],
    [9,9,10,9,9],
    [11,11,10,11,11],
    [10,9,9,9,10],
    [10,11,11,11,10],
    [11,9,9,9,9],
    [9,10,10,10,10],
    [11,10,10,10,10],
    [10,10,11,10,10],
    [10,10,11,10,11],
    [9,10,11,10,11]
  ]

  const formattedPaytablePattern = paytablePattern.map(row => row.join(','));
  
  res.status(200).json({
    "reel_set0": formattedReelValues.join('~'),
    "reel_set1": formattedReelValues.join('~'),
    "reel_set2": formattedReelValues.join('~'),
    "reel_set3": formattedReelValues.join('~'),
    "paytable": formattedPaytablePattern.join(';')
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})