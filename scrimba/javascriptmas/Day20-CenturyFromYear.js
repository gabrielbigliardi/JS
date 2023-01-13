// Given a year, return the century it is in.
// The first century spans from the year 1 up to and including year 100,
// the second from the year 101 up to and including year 200, etc...

function centuryFromYear(num) {
    //  write code here.
    return Math.ceil(num/100)
}


console.log(centuryFromYear(1700));
console.log(centuryFromYear(1801));