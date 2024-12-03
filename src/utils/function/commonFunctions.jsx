export const ValidEmailId = (value) => {
    return value.includes("@") ? "Valid Email" : "Invalid Email";
};

export const validatePassword = (value) => {
    return value.length >= 6 ? "Strong Password" : "Weak Password";
};
