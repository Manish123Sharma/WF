function test_prime(n) {

    if (n === 1) {
        return "Not Prime";
    } else if (n === 2) {
        return "Prime";
    } else {
        for (var x = 2; x < n; x++) {
            if (n % x === 0) {
                return "Not Prime";
            }
        }
        return "Prime";
    }
}
var num = prompt("Enter the number to be checked :", " ")
window.alert(test_prime(num))