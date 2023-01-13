// n children have got m pieces of candy. 
// They want to eat as uch candy as they can.
// But each child must eat exacly the same amount of candy as any other child.
// Determine how many pieces of candy will be eaten by all the children together. 
// Individual pieces of candy cannot be split.

function candies(children, candy) {
    //  write code here.
    return Math.floor(candy / children) * children
}


console.log(candies(3, 10));