var express = require('express');
var excelParser = require('../lib/excel');
var router = express.Router();

/* GET home page. */
router.get('/read', function(req, res, next) {
  var data = excelParser.load_data('public/docs/manage_list.xlsx', '2018-관리비');
  var resultToJson = new Array();
  if (data.length > 0){
    for (var i in data) {
      if (data[i].length > 0) {
        resultToJson.push(data[i]);
      }
    }
    res.send(resultToJson);
  } else {
    res.send('data is nothing.');
  }
  // res.render('excel/read', { title: 'excel-read' });
});

module.exports = router;
