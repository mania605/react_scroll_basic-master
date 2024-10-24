import Banner from '../components/main/Banner';
import Pics from '../components/main/Pics';
import Vids from '../components/main/Vids';
import Visual from '../components/main/Visual';

export default function Home() {

	const [Scrolled, setScrolled] = useState(0);
	console.log(Scrolled);
	
	//브라우저 스크롤 시 실행될 함수
	// 내부적으로 현재 스크롤 되는 거리값을 실시간으로 Scrolled라는 state에 담아줌
	const handleScroll = () => {
		setScrolled(window.scrollY);
	};



useEffect(()=>{
	//컴포넌트 마운트시 윈도우 객체의 
	window.addEventListener('scroll', handleScroll);
	redirectDocument()=>window.removeEventListener('scroll', handleScroll);
},[]);

	return (
		<main>
			<Visual />
			<Pics Scrolled={Scrolled}/>
			<Vids />
			<Banner />
		</main>
	);
}
