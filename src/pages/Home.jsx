import { useRef, useEffect, useState } from 'react';
import Banner from '../components/main/Banner';
import Pics from '../components/main/Pics';
import Vids from '../components/main/Vids';
import Visual from '../components/main/Visual';

export default function Home() {
	const [Scrolled, setScrolled] = useState(0);
	const ref_el = useRef(null);
	const ref_posArr = useRef([]);

	//브라우저 리사이즈시 해당 메일 프레임의 자식 요소를 반복돌며 각요소의 세로위치값을 ref_posArr에 담아주는 함수
	const getPos = () => {
		ref_posArr.current = [];
		console.log(ref_el.current.childern);
		for (const el of ref_el.current.childern) ref_posArr.current.push(el.offsetTop);
		console.log(ref_posArr.current.childern);
	};

	const handleScroll = () => {
		// 브라우저 스크롤시 실행될 함수: 내부적으로 현재 스크롤되는 거리값을 실시간으로 Scrolled라는 state에 담아줌
		setScrolled(window.scrollY);
	};

	//성능과 메모리 과다사용 방지를 위해 꼭 필요한 작업.
	useEffect(() => {
		// 컴포넌트 마운트시 윈도우 객체의 scroll 이벤트에 handleScroll 함수 연결
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
			<Pics Scrolled={Scrolled} />
			<Vids />
			<Banner />
		</main>
	);
}
