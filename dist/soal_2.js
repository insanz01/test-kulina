"use strict";
;
// fungsi untuk melakukan check ketidaksamaan
function isDissimilarity(s, t, char) {
    if (!s.hasOwnProperty(char)) {
        return true;
    }
    return t[char] > s[char];
}
// fungsi untuk mencari ketidaksamaan antar 2 string
function findDissimilarity(s, t) {
    // memecah string menjadi array sehingga mudah untuk mencari tahu frekuensi huruf
    const s_array = s.split('');
    const t_array = t.split('');
    // variabel penampung
    let dissimilarity = [];
    let sourceFrequency = {};
    // menghitung frekuensi huruf pada string s
    s_array.forEach(data => {
        if (!sourceFrequency.hasOwnProperty(data)) {
            sourceFrequency[`${data}`] = 1;
        }
        else {
            sourceFrequency[`${data}`] += 1;
        }
    });
    let targetFrequency = {};
    // menghitung frekuensi huruf pada string t
    t_array.forEach(data => {
        if (!targetFrequency.hasOwnProperty(data)) {
            targetFrequency[data] = 1;
        }
        else {
            targetFrequency[data] += 1;
        }
    });
    // melihat semua frekuensi huruf pada variabel t
    for (let char in targetFrequency) {
        /*param1: object variabel s
        param2: object variabel t
        param3: huruf / karakter yang diuji*/
        if (isDissimilarity(sourceFrequency, targetFrequency, char)) {
            dissimilarity = [...dissimilarity, char]; // tambahkan karakter yang tidak cocok
        }
    }
    return dissimilarity;
}
const s = "annqalff";
const t = "fqlnannaf";
const dissimilarityChar = findDissimilarity(s, t);
console.log(dissimilarityChar);
