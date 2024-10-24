export default function Pics({ Scrolled, pos }) {
	return (
		<section className='pics'>
{/* pos ||0의 의미는 초기에 pos값이 undefined이면 일단은 0으로 대신 값을 집어넣음 */}
{/* pos가 usRef로 참조된 값이므로 첫번째 렌더링시에 pos값이 undefined로 나오면서 - 연산에서 발생 */}
			<h2 style {{left: Scrolled-pos || 0}}>TYPOGRAPHY</h2>
			<div className='box' style={{ transform: `rotate(${Scrolled - pos}deg)` }}></div>
		</section>
	);
}
