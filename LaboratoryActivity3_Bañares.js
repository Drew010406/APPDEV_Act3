let base = 4;

console.log(calculateGrade(base), "\n");
console.log(isPrime(base), "\n");
multiplicationTable(base);
showStars(base);

function calculateGrade(base_number) {

    if (typeof base_number != "number")
        return "Invalid Score!";

    score = base_number * 10 + 5;


    if (score < 0 || score > 100)
        return "Invalid Score!";

    if (score >= 90 && score <= 100) 
        return 'A'; 

    else if (score >= 80 && score <= 89)
        return 'B'; 
    
    else if (score >= 70 && score <= 79)
        return 'C'; 
    
    else if (score >= 60 && score <= 69)
        return 'D'; 
    
    else
        return 'F';
}


function showStars(row) {

    if (typeof row != "number" || row <= 0) {
        console.log("Invalid amount of rows!");
        return; 
    }

    let rows = row + 2;
    let stars = 1;
    let spaces = rows -1;

    console.log("");
    for (let i = 0; i < rows; i++) {

        console.log(" ".repeat(spaces) + "*".repeat(stars));
        stars += 2;
        spaces --;
    } 
    
}

function isPrime(n) {

    if (typeof n != "number")
        return `${n} is not a number!`;
    
    number = n +10;    

    for (let i = 0; i <= Math.sqrt(number); i++ ) {
        
        if (number % i == 0) {
            return `${number} is NOT A PRIME NUMBER.`;
        }
    }

    return `${number} is PRIME.`;
    
}

function multiplicationTable(n) {

    if (typeof n != "number")
        return `${n} is not a number!`;

    console.log(`Multiplication Table of ${n}:`);
    for (let i = 1; i <=10; i++) {

        console.log(`${n} x ${i} = ${n*i}`);
    } 
    return;
}