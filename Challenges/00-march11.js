/**challenge
 * 
 * create a function that can take in 2 arrays
 * create an array of colors
 * create an array of suffixes for placement (ie. st, nd, rd, th)
 * 
 * in the function, filter through both arrays and print out the placement and the color for each individual colors( 1st is green, second is blue, 3rd is etc) until all the colors are listed out with appropriate placement
 * 
 * not to make it too hard on yourslef, you can stop the count at ten
 */

/**
 * list:
 * function
 * 2 arrays
 * loops combining them
 * for each?
 * 
 * result: 1st is green
 * need # + array2 + 'is' + array1
 */

// let colors = ['green','blue','red','purple','yellow','teal','pink','brown','black','white'];
// let numbers = ['st','nd','rd','th'];
// //                  1   2    3    4

// function colorPlacement(){
//     for( let x in colors){
//         if(colors[x] == placement[x]){
//             console.log(placement[x], "is", colors[x]);
//         }
//     }
// }
// colorPlacement();
// //this is not right and doesnt work

//correct way:

let colors = ['green','blue','red','purple','yellow','teal','pink','brown','black','white'];
let suf = ['st','nd','rd','th','th','th','th','th','th','th'];

function colorPlace(){
    for (let x = 1; x <=10 ; x++){
        console.log(x+suf[x-1]+ ' is '+colors[x-1]);
    }
}
colorPlace(); 



//teach added the place holders in the function
//and links in the console.log

let colors = ['green','blue','red','purple','yellow','teal','pink','brown','black','white'];
let suf = ['st','nd','rd','th','th','th','th','th','th','th'];

function colorPlace(color, sufx){
    for (let x = 0; x <10 ; x++){
        console.log(`${x+1}${sufx[x]} is ${color[x]}`);
    }
}
colorPlace(colors, suf); 


