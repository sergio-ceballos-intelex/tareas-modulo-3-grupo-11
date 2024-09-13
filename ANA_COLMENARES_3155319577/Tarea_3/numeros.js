// muestre en consola solos los números que empiezan en 2 entre el 1 y el 2000
// convertir a string y verificar con starsWith
for (let n = 1; n<2001; n++) {
    if (n.toString().startsWith('2')) {
        console.log(n);
    }
}