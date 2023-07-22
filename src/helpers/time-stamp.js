/**
 * This file declares variables to capture different attributes for time which are being used in testscripts and defining loggers
 */

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();
var hr = String(today.getHours());
var min = String(today.getMinutes());
var sec = String(today.getSeconds());
var loc = mm + "-" + dd + "-" + yyyy;
var filename = mm + "-" + dd + "-" + yyyy + "_" + hr + "_" + min + "_" + sec;
var timer = mm + "-" + dd + "-" + yyyy + "_" + hr + "_" + min;

//exporting variables
export { filename, loc, timer };
