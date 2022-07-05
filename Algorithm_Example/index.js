// function recursion () {
//     function inner () {
//         console.trace();
//         inner();
//     }
//     inner();
// }
// setTimeout(() => {recursion();}, 5000);


// function iteration() {
//     while(1) {
//         console.log('iteration');
//     }
// }

// iteration();



// if (end === current) {
//     return current;
// }

function factorial(end, paramCur, paramTotal ) {

    if (end === 0) {
        return 1;
    }

    const current = paramCur ? paramCur : 1;
    const total = paramTotal ? paramTotal : 1;

    if (end < current) {
        return total;
    }

    factorial(end, current+1, total * current);
};

factorial(N);