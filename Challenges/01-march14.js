/*
Challenge (Strings):
Pig Latin:

Create a function that takes in strings
In the function, translate a phrase into pig latin and print both the original and pig latin version to the console.

If able to do so, return the value into another variable and print that variable

What is Pig Latin?
    * If the word begins with a consonant, remove the consonant to the first vowel, place it at the end of the word, and add an 'ay' to the end (i.e. Pig Latin => IgPay Atinlay)
    * If the word begins with a vowel, simply add an 'ay' at the end of the word
    * 
    * check if something is not a vowel instead of not a consonant
    * 
    * 
gameplan:
function
function call
print original and variable
if statement to find vowel
.split()
.join()?
make function work for single words, then find a way to make it work for multiple?
    split phrase into array of single strings, loop through each word to translate into piglatin, recombine into string phrase from array
*/


function piggie(str) {
    str.toLowerCase();
    if (str.split(' ').length > 1) {
        let x = str.split(' ');
        for (y of x) {
            switch (y[0]) {
                case 'a':
                    console.log(`${y}ay`);
                    break;
                case 'e':
                    console.log(`${y}ay`);
                    break;
                case 'i':
                    console.log(`${y}ay`);
                    break;
                case 'o':
                    console.log(`${y}ay`);
                    break;
                case 'u':
                    console.log(`${y}ay`);
                    break;
                default:
                    let newArr = y.split('');
                    console.log(`${newArr.splice(1).join('')}${y[0]}ay`);
                    break;
            }
        }
    } else {


        switch (str[0]) {
            case 'a':
                console.log(`${str}ay`);
                break;
            case 'e':
                console.log(`${str}ay`);
                break;
            case 'i':
                console.log(`${str}ay`);
                break;
            case 'o':
                console.log(`${str}ay`);
                break;
            case 'u':
                console.log(`${str}ay`);
                break;
            default:
                let newArr = str.split('');
                console.log(`${newArr.splice(1).join('')}${str[0]}ay`);
                break;
        }
    }
}
piggie('Good Day');


//my shitty way:
const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
function piglatin(ar) {

    arr = ar.split(' ');
    console.log(arr); //split into array
    let newArr = [];
    arr.forEach(x => {
        
        if (vowels.includes(x[0])) {
            newV = x + 'ay';
            newArr.push(newV);

        } else if (x.charAt(0) !== vowels) {

            let y = x.split('');
            newC = y.splice(1).join('') + x[0] + 'ay';
            newArr.push(newC);
        }
    })
    let final = newArr.join(' ');
    console.log(ar);
    console.log(final);
};
piglatin('hello how are you');





