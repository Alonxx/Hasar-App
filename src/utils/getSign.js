const signs = [
	{
		name: 'aries',
		dateMin: [3, 21],
		dateMax: [4, 20],
	},
	{
		name: 'tauro',
		dateMin: [4, 21],
		dateMax: [5, 21],
	},
	{
		name: 'geminis',
		dateMin: [5, 22],
		dateMax: [6, 21],
	},
	{
		name: 'cancer',
		dateMin: [6, 22],
		dateMax: [7, 22],
	},
	{
		name: 'leo',
		dateMin: [7, 23],
		dateMax: [8, 22],
	},
	{
		name: 'virgo',
		dateMin: [8, 23],
		dateMax: [9, 23],
	},
	{
		name: 'libra',
		dateMin: [9, 24],
		dateMax: [10, 23],
	},
	{
		name: 'escorpion',
		dateMin: [10, 24],
		dateMax: [11, 22],
	},

	{
		name: 'sagitario',
		dateMin: [11, 23],
		dateMax: [12, 21],
	},

	{
		name: 'capricornio',
		dateMin: [12, 22],
		dateMax: [1, 20],
	},
	{
		name: 'acuario',
		dateMin: [1, 21],
		dateMax: [2, 19],
	},
	{
		name: 'piscis',
		dateMin: [2, 20],
		dateMax: [3, 20],
	},
];

const getSign = (date) => {
	var arrayDate = date
		.toString()
		.split('-')
		.map((el) => Number(el));
	arrayDate.shift();

	let result = signs.filter((el) => {
		if (arrayDate[0] === el.dateMin[0] && arrayDate[1] >= el.dateMin[1]) {
			return true;
		} else if (
			arrayDate[0] === el.dateMax[0] &&
			arrayDate[1] <= el.dateMax[1]
		) {
			return true;
		}
		return false;
	});

	return result[0].name;
};

export default getSign;
