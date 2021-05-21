import Gender1 from '../assets/gen-1.png';
import Gender2 from '../assets/gen-2.png';
import Gender3 from '../assets/gen-3.png';

export const USER_URL = 'https://randomuser.me/api/';
export const HOROSCOPE_URL = 'https://api.adderou.cl/tyaas/';

export const genders = [
	{name: 'Male', img: Gender1},
	{name: 'Non-binary', img: Gender2},
	{name: 'Female', img: Gender3},
];

export const arrayForm = [
	{type: 'text', label: 'Nombre', name: 'name'},
	{type: 'text', label: 'EMail', name: 'email'},
	{type: 'date', label: 'Fecha de nacimiento', name: 'date'},
];
