// membuat interface untuk membuat custom key pada object
interface RomanNumber {
	[key: string]: number;
};

// membuat object baru untuk angka romawi
const romanNumber: RomanNumber = {
	I: 1,
	V: 5,
	X: 10,
	L: 50,
	C: 100,
	D: 500,
	M: 1000
};

function convertToDecimal(value: string): number {
	// Initialize result
  let convertResult = 0;

  for (let i = 0; i < value.length; i++) {
    // Mengambil karakter index sekarang
	  let char_1 = romanNumber[value.charAt(i)];

	  // Mengambil karakter index setelahnya
	  if (i + 1 < value.length) {

    	let char_2 = romanNumber[value.charAt(i + 1)];

      // Membandingkan karakter 1 bernilai lebih besar dari 2
      if (char_1 >= char_2) {
        convertResult = convertResult + char_1;
      } else {
        convertResult = convertResult + char_2 - char_1;
        i++;
      }
    } else {
      convertResult = convertResult + char_1;
    }
  }

  return convertResult;
}

const roman = 'XII';
const convertResult = convertToDecimal(roman);
console.log(convertResult);

const roman2 = 'LIV';
const convertResult2 = convertToDecimal(roman2);
console.log(convertResult2);

const roman3 = 'MMXXII';
const convertResult3 = convertToDecimal(roman3);
console.log(convertResult3);

const roman4 = 'XC';
const convertResult4 = convertToDecimal(roman4);
console.log(convertResult4);

const roman5 = 'IV';
const convertResult5 = convertToDecimal(roman5);
console.log(convertResult5);

