function is_perfect(number) {
    var temp = 0;
    for (var i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            temp += i;
        }
    }

    if (temp === number && temp !== 0) {
        window.alert("It is a perfect number.");
    } else {
        window.alert("It is not a perfect number.");
    }
}
is_perfect(28);