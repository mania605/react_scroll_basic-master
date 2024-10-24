import { useRef, useEffect, useState } from 'react';
import Banner from '../components/main/Banner';
import Pics from '../components/main/Pics';
import Vids from '../components/main/Vids';
import Visual from '../components/main/Visual';

export default function Home() {
	const [Scrolled, setScrolled] = useState(0);
	const [PosArr, setPosArr] = useState([]);
	const ref_el = useRef(null);
	const ref_posArr = useRef([]);

	//브라우저 리사이즈시 해당 메일 프레임의 자식 요소를 반복돌며 각요소의 세로위치값을 ref_posArr에 담아주는 함수
	const getPos = () => {
		ref_posArr.current = [];
		for (const el of ref_el.current.childern) ref_posArr.current.push(el.offsetTop);
		console.log(ref_posArr.current);
	};

	// 브라우저 스크롤시 실행될 함수: 내부적으로 현재 스크롤되는 거리값을 실시간으로 Scrolled라는 state에 담아줌
	const handleScroll = () => {
		setScrolled(window.scrollY);
	};

	//성능과 메모리 과다사용 방지를 위해 꼭 필요한 작업.
	useEffect(() => {
		// 컴포넌트 마운트시 윈도우 객체의 scroll 이벤트에 handleScroll 함수 연결
		getPos();
		window.addEventListener('resize', getPos);
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('resize', getPos);
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<main>
			<Visual />
			{/* 해당 Home컴포넌트에서 만들어지는 자식 섹션들의 세로 위치 배열값 중 2번째에 해당하는 Pics의 위치값만 pos라는 이름의 props로 전달*/}
			{/* pos값이 필요한 이유 해당 컴포넌트는 문서 상단에 위치해 있지 않기 때문에 현재 스크롤되고 있는 거리값에서 섹션의 위치값을 빼줘야지 0 으로 초기화된 값으로 스타일 적용 가능 */}
			<Pics Scrolled={Scrolled} pos={ref_posArr.current[1]} />
			<Vids />
			<Banner />
		</main>
	);
}
