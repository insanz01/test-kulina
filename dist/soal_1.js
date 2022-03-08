"use strict";
// fungsi untuk membuat nilai pada sebuah array
function kulinaFood(val) {
    if (val % 3 == 0 && val % 5 == 0) { // value dapat habis jika dibagi 3 dan 5
        return "Kulina x Food";
    }
    else if (val % 3 == 0) { // value hanya dapat habis jika dibagi 3
        return "Kulina";
    }
    else if (val % 5 == 0) { // value hanya dapat habis jika dibagi 5
        return "Food";
    }
    else {
        return `${val}`; // kembalikan nilai asli jika tidak bisa dibagi 3 ataupun 5
    }
}
// membuat list array dengan sejumlah n
function generateList(n) {
    // variabel penampung
    let result = [];
    for (let i = 1; i <= n; i++) {
        let answer = kulinaFood(i); // mengambil nilai yang dibuat oleh fungsi kulinaFood
        result = [...result, answer]; // append nilai baru ke dalam list
    }
    return result;
}
const result = generateList(15);
console.log(result);
