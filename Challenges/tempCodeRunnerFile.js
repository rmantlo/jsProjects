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