const now = new Date();
console.log(now);
//Tue Dec 03 2024 18:32:55 GMT+0530 (India Standard Time)

console.log(new Date ('May 13, 2024'))
// 4 Mon May 13 2024 00:00:00 GMT+0530 (India Standard Time)


console.log(new Date(2024,9,10,6,37,54));  // year , month starts at 0 , Date starts at 1, hours, min, sec
// Thu Oct 10 2024 06:37:00 GMT+0530 (India Standard Time)

const date = new Date (2024,11,15,11,30);
console.log("a",date.getFullYear());  //2024
console.log("b",date.getMonth()); //11
console.log("c",date.getDate()); //15
console.log("d",date.getDay()); //0  => as it is Sunday
console.log("e",date.getHours()); //11
console.log("f",date.getMinutes()); //30
console.log("g",date.getSeconds()); //0
console.log("h",date.getUTCSeconds()); //0
console.log("i",date.toString());  // Sun Dec 15 2024 11:30:00 GMT+0530 (India Standard Time)
console.log("j",date.toISOString()); //2024-12-15T06:00:00.000Z
console.log("k",date.toUTCString()); //Sun, 15 Dec 2024 06:00:00 GMT
console.log("l",date.toDateString()); //Sun Dec 15 2024
console.log("m",date.toLocaleDateString()); //15/12/2024
console.log("n",date.toLocaleString()); //15/12/2024, 11:30:00 am
console.log("o",date.toTimeString()); //11:30:00 GMT+0530 (India Standard Time)
console.log("p",date.toLocaleTimeString()); //11:30:00 am

const time_set = date.getTime()
console.log("q",time_set); // to set a timeset which can be further used to get the exact date //1734242400000
console.log("r",new Date (time_set)); //2024-12-15T06:00:00.000Z
console.log("s",Date.now()) //1733328886925