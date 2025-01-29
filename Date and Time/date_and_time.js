/*
-> Date and Time :

• JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).

• the Date object is used to work with dates and times. You can create, manipulate, and format dates using the built-in Date object.





>  1. Current Date and Time :

let currentDate = new Date(); 
console.log(currentDate); // > 2025-01-29T14:41:52.650Z

- This returns the current date and time based on the system clock.
- But, the value we got is a 'object' value, which is not readable. For readability we converted that to 'string'.

console.log(currentDate.toString()); // > Wed Jan 29 2025 20:23:05 GMT+0530 (India Standard Time)





-> Formatting Date Methods :

(i). toString() :
• Converts to full string format.

let currentDate = new Date();
console.log(currentDate.toString()); // > Wed Jan 29 2025 20:23:05 GMT+0530 (India Standard Time)



(ii). toDateString() :
• Returns only date part.

let currentDate = new Date();
console.log(currentDate.toDateString()); // > Wed Jan 29 2025



(iii). toTimeString() :
• Returns only time part.

let currentDate = new Date();
console.log(currentDate.toTimeString()); // > 20:42:15 GMT+0530 (India Standard Time)



(iv). toISOString() :
• Converts to ISO format.

let currentDate = new Date();
console.log(currentDate.toISOString()); // > 2025-01-29T15:06:40.223Z



(v). toJSON() :
• Converts a Date object into an ISO 8601 string format.

let currentDate = new Date();
console.log(currentDate.toJSON()); // > 2025-01-29T15:09:47.970Z

- The output is the same as 'toISOString()', but it is used for JSON serialization.



(vi). toUTCString() :
• Converts to UTC format

let currentDate = new Date();
console.log(currentDate.toUTCString()); // > Wed, 29 Jan 2025 15:13:52 GMT



(vii). toLocaleDateString() :
• Converts to local date format.

let currentDate = new Date();
console.log(currentDate.toLocaleDateString()); // > 1/29/2025



(viii). toLocaleTimeString() :
• Converts to local time format.

let currentDate = new Date();
console.log(currentDate.toLocaleTimeString()); // > 8:46:35 PM



(ix). toLocaleString() :
• Converts to local date & time format.

let currentDate = new Date();
console.log(currentDate.toLocaleString()); // > 1/29/2025, 8:47:39 PM


> Customizing toLocaleString() :

const date = new Date();

const formattedDate = date.toLocaleString("en-IN", {
    weekday: "long", // - "Wednesday"
    year: "numeric", // - "2024"
    month: "long", // - "January"
    day: "2-digit", // - "29"
    hour: "2-digit", // - "09"
    minute: "2-digit", // - "30"
    second: "2-digit", // - "15"
    hour12: true, // - 12-hour format (true) or 24-hour (false)
});

console.log(formattedDate); // > Wednesday, January 29, 2024, 09:30:15 AM





> 2. Specific Date :

let specificDate = new Date(2001, 0, 11); // > Year, Month (0-based), Day
console.log(specificDate.toDateString());  // > Thu Jan 11 2001

• We know in programming language number starts with '0'.

- We can give more values in it :

let myDate = new Date(2001, 0, 11, 7, 5); // > Year, Month (0-based), Day, Hour, Miniute, Seconds (We can add, if we want)
console.log(myDate.toLocaleString()); // > 1/11/2001, 7:05:00 AM 





> 3. Specific Date and Time :

let dateTime = new Date(2023, 11, 25, 14, 30, 0); // > Year, Month, Day, Hour, Min, Sec
console.log(dateTime.toLocaleString()); // > 12/25/2023, 2:30:00 PM





> 4. Using a Date String :

let dateString = new Date("2023-12-25T11:30:00"); // - "2023-12-25T11:30:00"
console.log(dateString.toLocaleString()); // > 12/25/2023, 11:30:00 AM

•  This method is recommended for better compatibility.


> Formatting With My Specification :
• We can format like : YYYY/MM/DD or MM/DD/YYYY 

let myFormat = new Date("12-31-2001"); // > we have to add '-' between dates and we have to write as string ""
console.log(myFormat.toLocaleDateString()); // > 12/31/2001 -> MM/DD/YYYY





> 5. Using Timestamps (Milliseconds Since Jan 1, 1970) :

let timestampDate = Date.now(); // - Milliseconds
console.log(timestampDate); // > 1738166907559


> Extracting millisecond from a specific date :

let myDate = new Date("01-11-2001");
console.log(myDate.getTime()); // > 979151400000 -> from Jan 1, 1970

• Now if we want to convert that in seconds :

console.log(Date.now() / 1000); // > 1738168771.7

- The value converted in seconds but it's in decimal values, so for that we can use 'Math.floor()'

console.log(Math.floor(Date.now() / 1000)); // > 1738168918





-> Getting Date Components :

• Once you have a date, you can extract different parts of it :

let date = new Date();

console.log(date.getFullYear());  // > Year (e.g., 2024)
console.log(date.getMonth());     // > Month (0-11, January = 0)
console.log(date.getDate());      // > Day of the month (1-31)
console.log(date.getDay());       // > Day of the week (0-6, Sunday = 0)
console.log(date.getHours());     // > Hours (0-23)
console.log(date.getMinutes());   // > Minutes (0-59)
console.log(date.getSeconds());   // > Seconds (0-59)
console.log(date.getMilliseconds()); // > Milliseconds (0-999)
console.log(date.getTime());      // > Timestamp (milliseconds since 1970)



->  Setting Date Components :

• You can modify a date using setter methods : 

let date = new Date();

date.setFullYear(2025);
date.setMonth(5);  // > June (0-based)
date.setDate(15);
date.setHours(12);
date.setMinutes(30);
date.setSeconds(0);

console.log(date.toLocaleString()); // > 6/15/2025, 12:30:00 PM





( Summary ) 

> new Date() 
- Creates a date object.

> getFullYear(), getMonth(), getDate() 
- Get parts of a date

> setFullYear(), setMonth(), setDate() 
- Modify a date

> toString(), toISOString(), toLocaleDateString() 
- Format dates

> Date.now() 
- Get current timestamp
*/

/* ------------------------------------------------------------------------------------------------------------- */



// let currentDate = new Date();
// console.log(currentDate.toLocaleString()); // > 1/29/2025, 8:47:39 PM

// let specificDate = new Date(2001, 0, 11); // > Year, Month (0-based), Day
// console.log(specificDate.toLocaleString());  // > Thu Jan 11 2001

// let myDate = new Date(2001, 0, 11, 7, 5);
// console.log(myDate.toLocaleString()); // > 1/11/2001, 7:05:00 AM

// let myFormat = new Date("12-31-2001");
// console.log(myFormat.toLocaleDateString()); // > 12/31/2001

// let dateTime = new Date(2023, 11, 25, 14, 30, 0); // > Year, Month, Day, Hour, Min, Sec
// console.log(dateTime.toLocaleString());

// let dateString = new Date("2023-12-25T11:30:00");
// console.log(dateString.toLocaleString()); // > 12/25/2023, 11:30:00 AM

// let timestampDate = Date.now(); // - Milliseconds
// console.log(timestampDate); // > 1738166907559




// let date = new Date();

// console.log(Date.now() / 1000); // > 1738168771.7
// console.log(Math.floor(Date.now() / 1000)); // > 1738168918



// const date = new Date();

// const formattedDate = date.toLocaleString("en-IN", {
//     weekday: "long", // - "Wednesday"
//     year: "numeric", // - "2024"
//     month: "long", // - "January"
//     day: "2-digit", // - "29"
//     hour: "2-digit", // - "09"
//     minute: "2-digit", // - "30"
//     second: "2-digit", // - "15"
//     hour12: true, // - 12-hour format (true) or 24-hour (false)
// });

// console.log(formattedDate); // > Wednesday, January 29, 2024, 09:30:15 AM
