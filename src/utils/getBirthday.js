
const getBirthday = (date) => {

	let myBirthday, today, bday, diff, days;
	myBirthday = date
		.toString()
		.split('-')
		.map((el) => Number(el));
	myBirthday.shift();

	today = new Date();
	bday = new Date(today.getFullYear(), myBirthday[0] - 1, myBirthday[1]);
	if (today.getTime() > bday.getTime()) {
		bday.setFullYear(bday.getFullYear() + 1);
	}
	diff = bday.getTime() - today.getTime();
	days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
	return days;
};

export default getBirthday;
