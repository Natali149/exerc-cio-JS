var count = 0;

for (i = 1; i < 1000; i++) {
    if ((i % 5) == 0 || (i % 7) == 0) {
        count += i;
    }
}
console.log(`O resuldado da soma de todos os múltiplos de 5 ou 7 é de ${count} `);
