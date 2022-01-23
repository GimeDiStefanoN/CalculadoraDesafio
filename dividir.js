function dividir (x,y){
    if (y === 0){
        return "No se puede dividir por cero";
    }
    return x / y;
}

module.exports = {dividir
}