function isRotation(str1, str2) {
    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
        return "Invalid input";
    }

    if (str1.length !== str2.length) {
        return false;
    }

    const concatenatedStr = str1 + str1;

    return concatenatedStr.includes(str2);
}

// Example usage:
const string1 = "JavaJ2eeStrutsHibernate";
const string2 = "StrutsHibernateJavaJ2ee";
const result = isRotation(string1, string2);
console.log("Are the strings rotations?", result); // Output: true