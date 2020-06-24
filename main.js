function challenge(n) {
    console.log("######### Challenge " + n  + " #########");
}

function challenge1() {
    let i = 1;
    while(i < 6) {
        console.log(i);
        i++;
    }
}

function challenge2(n) {
    let i = 1;
    while(i <= n) {
        console.log(i);
        i++;
    }
}

function challenge3(start, end) {
    while(start <= end) {
        console.log(start);
        start++;
    }
}

function challenge4(n) {
    let i = 1;
    
    while(i <= n) {
        let isOdd = i % 2 !== 0 ? true : false;
        if(isOdd) {
            console.log("Odd");
        }

        else {
            console.log("Even");
        }
        
        i++;
    }
}

function challenge5(n) {
    let i = 1;
    while(i <= n) {
        let isEven = i % 2 === 0 ? true : false;
        if(isEven) {
            console.log(i);
        }

        i++;
    }
}

function challenge6() {
    let i = 10;
    while(i > 0) {
        console.log(i);
        i--;
    }
}

function challenge7() {
    let i = 10;
    while(i > 0) {
        console.log(i);
        i--;
    }

    console.log("Blast Off!");
}

function challenge8(n) {
    while(n > 1) {
        console.log(n);
        n -= 3;
    }
}

function challenge9() {
    let i = 1;
    while(i <= 7) {
        console.log(i + ". Hello!");
        i++;
    }
}

function challenge10(str) {
    let i = 1;
    while(i <= 7) {
        console.log(i + ". " + str);
        i++;
    }
}

function challenge11(str, n) {
    let i = 1;
    while(i <= n) {
        console.log(str);
        i++
    }
}

function challenge12(str) {
    let i = 0;
    let len = str.length;
    while(i < len) {
        console.log(str[i]);
        i++
    }
}

function challenge13(str) {
    let i = 1;
    let len = str.length;
    while(i < len) {
        console.log(str[i]);
        i += 2;
    }
}

function challenge14(str) {
    let i = str.length - 1;
    while(i >= 0) {
        console.log(str[i]);
        i--;
    } 
}

function challenge15(num) {
    let i = 1;
    while(i <= num) {
        let fizzbuzz = i % 3 === 0 && i % 5 === 0 ? true : false;
        let fizz = i % 3 === 0 ? true : false;
        let buzz = i % 5 === 0 ? true : false;
        
        console.log(i + ":");

        if(fizzbuzz) {
            console.log("FizzBuzz");
        }

        else if(fizz) {
            console.log("Fizz");
        }

        else if(buzz) {
            console.log("Buzz");
        }
        
        console.log("\n");
        i++;
    }
}

function challenge16(index) {
    let curr = 1;
    let prev = 0;

    while(curr <= index) {
        let temp = curr;
        console.log(curr);
        curr += prev;
        prev = temp;
    }
}

challenge(1);
challenge1();
console.log();

challenge(2);
challenge2(6);
console.log();

challenge(3);
challenge3(1, 5);
console.log();

challenge(4);
challenge4(5);
console.log();

challenge(5);
challenge5(11);
console.log();

challenge(6);
challenge6()
console.log();

challenge(7);
challenge7();
console.log();

challenge(8);
challenge8(20);
console.log();

challenge(9);
challenge9();
console.log();

challenge(10);
challenge10("Testing 1 2 3");
console.log();

challenge(11);
challenge11("Get out!", 6);
console.log();

challenge(12);
challenge12("think");

challenge(13);
challenge13("Nobody");

challenge(14);
challenge14("Mesuara");

challenge(15);
challenge15(15);

challenge(16);
challenge16(21);