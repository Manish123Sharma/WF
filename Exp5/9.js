function detect_data_type(value) {
    var dtypes = [Function, RegExp, Number, String, Boolean, Object],
        x, len;

    if (typeof value === "object" || typeof value === "function") {
        for (x = 0, len = dtypes.length; x < len; x++) {
            if (value instanceof dtypes[x]) {
                return dtypes[x];
            }
        }
    }

    return typeof value;
}
document.write("Hello is : " + detect_data_type("Hello"))
document.write("<br>97 is : " + detect_data_type(97))