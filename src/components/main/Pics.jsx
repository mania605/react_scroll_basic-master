export default function Pics({ Scrolled }) {
	console.log(Scrolled);
	return (
		<section className='pics'>
			<div className='box' style={{ transform: `roate ${Scrolled / 2}deg)` }}></div>
		</section>
	);
}
