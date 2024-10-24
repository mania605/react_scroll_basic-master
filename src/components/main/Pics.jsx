export default function Pics({ Scrolled }) {
	console.log(Scrolled);
	return (
		<section className='pics'>
			<div className='box' style={{ transform: `rotate(${Scrolled / 5}deg)` }}></div>
		</section>
	);
}
