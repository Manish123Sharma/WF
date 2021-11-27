var str = prompt("Enter the String to be checked :", " ")
s = str
rev = s.split("").reverse().join("")
if (rev == s) {
    window.alert("Palindrome")
} else {
    window.alert("Not Palindrome")
}