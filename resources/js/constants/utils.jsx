export const validateEmail = (mail) => {
    const regexMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regexMail.test(String(mail).toLowerCase());
}

export const passwordConfirmed =(password, passwordConfirmation) => {
    return password == passwordConfirmation;
}

export const inputFile = (e) => {
    // regex pour verifier les extensions, vérifie toutes les lettres derrière le '.' jpg jpeg png pdf
    const regexFile = /.+\.[jpegndf]/;
    return regexFile.test(e);
}