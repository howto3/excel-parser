'use strict';

var XLSX = require('xlsx');

function getSheetNames(file) {
	var wb = XLSX.readFile(file);
	return wb.SheetNames;
}

function load_data (file, sheetName) {
	var wb = XLSX.readFile(file);
	
	/* generate array of arrays */
	var data = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[1]], {header: 1});
	return data;
}

module.exports.load_data = load_data;
