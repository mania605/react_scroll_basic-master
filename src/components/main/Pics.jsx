export default function Pics({ Scrolled, pos }) {
	console.log(pos);
	return (
		<section className='pics'>
			{/* pos ||0 의 의미는 초기에 pos값이 undefined이면 일단은 0으로 대신 값을 집어넣음 */}
			{/* pos가 useRef로 참조된 값이므로 첫번째 렌더링시에 pos값이 undefined로 나오면서 - 연산에서 발생 : 해당 에러를 스킵하기 위함 */}
			<h2 style={{ left: Scrolled - pos || 0 }}>TYPOGRAPHY</h2>
			<div className='box' style={{ transform: `rotate(${Scrolled - pos}deg)` }}></div>
		</section>
	);
}
