function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("ce n'est pas un nombre");
    }
    return a + b;
}

function subtract(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("ce n'est pas un nombre");
    }
    return a - b;
}

function multiply(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("ce n'est pas un nombre");
    }
    return a * b;
}

function divide(a, b) { 
    
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("ce n'est pas un nombre");
    }
    if (b === 0) {
        throw new Error("division par 0 pas valide.");
    }
    return a / b;
}

module.exports = { add, subtract, multiply, divide };