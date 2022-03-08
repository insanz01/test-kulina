// membuat interface untuk object pada typescript agar dapat membuat custom key
interface StringFrequency {
	[key: string]: number;
};

// fungsi untuk melakukan check ketidaksamaan
function isDissimilarity(s: StringFrequency, t: StringFrequency, char: string): boolean {
	if(!s.hasOwnProperty(char)) {
		return true;
	}

	return t[char] > s[char];
}

// fungsi untuk mencari ketidaksamaan antar 2 string
function findDissimilarity(s: string, t: string): Array<string> {
	// memecah string menjadi array sehingga mudah untuk mencari tahu frekuensi huruf
	const s_array: Array<string> = s.split('');
	const t_array: Array<string> = t.split('');

	// variabel penampung
	let dissimilarity: Array<string> = [];

	let sourceFrequency: StringFrequency = {};

	// menghitung frekuensi huruf pada string s
	s_array.forEach(data => {
		if(!sourceFrequency.hasOwnProperty(data)) {
			sourceFrequency[`${data}`] = 1;
		} else {
			sourceFrequency[`${data}`] += 1;
		}
	});

	let targetFrequency: StringFrequency = {};

	// menghitung frekuensi huruf pada string t
	t_array.forEach(data => {
		if(!targetFrequency.hasOwnProperty(data)) {
			targetFrequency[data] = 1;
		} else {
			targetFrequency[data] += 1;
		}
	});

	// melihat semua frekuensi huruf pada variabel t
	for(let char in targetFrequency) {
		/*param1: object variabel s
		param2: object variabel t
		param3: huruf / karakter yang diuji*/
		if(isDissimilarity(sourceFrequency, targetFrequency, char)) {
			dissimilarity = [...dissimilarity, char]; // tambahkan karakter yang tidak cocok
		}
	}

	return dissimilarity;
}

const s: string = "annqalff";
const t: string = "fqlnannaf";

const dissimilarityChar = findDissimilarity(s, t);

console.log(dissimilarityChar);