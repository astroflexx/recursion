function fibs(n) {
    if (n < 0) {
        console.log("Invalid size");
    } else {
        let fib = [0, 1];

        for (let i = 2; i < n; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }

        while (fib.length > n) {
            fib.pop();
        }

        return fib;
    }
}

function fibsRec(n) {
    if (n < 0) {
        console.log("Invalid size");
    } else {
        if (n <= 1) {
            return n;
        }

        return fibsRec(n - 1) + fibsRec(n - 2);
    }
}