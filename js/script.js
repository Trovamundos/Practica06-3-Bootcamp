// 1º SQUARE

var square = (n, char) => {
    for (let i = 0; i < n; i++) {
        
        console.log(i, char.repeat(n));
    }
}

console.log('-- 1º SQUARE --');
square(5, '*');


// 2º SQUARE WITH BORDER

var squareWithBorder = (n, charBorder, charInner) => {
    for (let i = 0; i < n; i++) {
        if (i === 0 || i === n - 1) {
            console.log(i, charBorder.repeat(n));
        } else {
            console.log(i, charBorder + charInner.repeat(n-2) + charBorder);
        }    
    }
}

console.log('-- 2º SQUARE WITH BORDER --');
squareWithBorder(5, '0', '*')


// 3º SQUARE DIAGONAL LEFT-RIGHT

var squareDiagonalLR = (n, charDiagonal, charUp, charDown) => {
    for (let i = 0; i < n; i++) {
        console.log(i, charDown.repeat(i) + charDiagonal + charUp.repeat(n - i - 1));
    }
}

console.log('-- 3º SQUARE DIAGONAL LEFT-RIGHT --');
squareDiagonalLR(5, '\\', 'A', 'B');


// 4º SQUARE DIAGONAL RIGHT-LEFT

var squareDiagonalRL = (n, charDiagonal, charUp, charDown) => {
    for (let i = 0; i < n; i++) {
        console.log(i, charUp.repeat(n - i - 1) + charDiagonal + charDown.repeat(i));
    }
}

console.log('-- 4º SQUARE DIAGONAL RIGHT-LEFT --');
squareDiagonalRL(5, '/', 'A', 'B')


// 5º HALF DIAMOND

var halfDiamond = (n, char) => {
    let counter = 0;
    for (let i = 0; i < n; i++) {
        console.log(counter,char.repeat(i + 1));
        counter++;
    }
    for (let i = n - 2; i >= 0; i--) {
        console.log(counter,char.repeat(i + 1));
        counter++;

    }
}

console.log('-- 5º HALF DIAMOND --');
halfDiamond(5, '*');


// 6º PYRAMID

var pyramid = (n, char) => {
    let aux = ' ';
    for (let i = 0; i < n; i++) {
        console.log(i,aux.repeat(n - i - 1) + char.repeat(1 + i * 2));
    }
}

console.log('-- 6º PYRAMID --')
pyramid(5, '*');


// 7º DIAMOND

var diamond = (n, char) => {
    let aux = ' ';
    let counter = 0;
    for (let i = 0; i < n; i++) {
        console.log(counter,aux.repeat(n - i - 1) + char.repeat(1 + i * 2));
        counter++;
    }
    for (let i = n - 2; i >= 0; i--) {
        console.log(counter,aux.repeat(n - i - 1) + char.repeat(1 + i * 2));
        counter++;
    }
}

console.log('-- 7º DIAMOND --');
diamond(5, '*');
