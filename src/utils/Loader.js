import ContentLoader from 'react-content-loader';
const singinLoder = (props) => (
	<ContentLoader
		speed={2}
		width={600}
		height={600}
		viewBox='0 0 600 600'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
		{...props}
	>
		<circle cx='300' cy='231' r='70' />
		<rect x='194' y='362' rx='0' ry='0' width='216' height='45' />{' '}
	</ContentLoader>
);

export default singinLoder;

export const horoscopeLoader = (props) => (
	<ContentLoader
		speed={2}
		width={375}
		height={712}
		viewBox='0 0 375 812'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
		{...props}
	>
		<circle cx='61' cy='302' r='55' />
		<rect x='7' y='393' rx='0' ry='0' width='371' height='31' />
		<rect x='135' y='413' rx='0' ry='0' width='1' height='0' />
		<rect x='134' y='493' rx='0' ry='0' width='1' height='0' />
		<rect x='144' y='503' rx='0' ry='0' width='1' height='0' />
		<rect x='72' y='585' rx='0' ry='0' width='216' height='45' />
		<rect x='7' y='436' rx='0' ry='0' width='371' height='31' />
		<rect x='7' y='478' rx='0' ry='0' width='371' height='31' />
		<rect x='135' y='498' rx='0' ry='0' width='1' height='0' />
		<rect x='136' y='578' rx='0' ry='0' width='1' height='0' />
		<rect x='146' y='588' rx='0' ry='0' width='1' height='0' />
		<rect x='7' y='521' rx='0' ry='0' width='371' height='31' />
	</ContentLoader>
);



