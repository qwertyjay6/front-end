import Banner from '../components/Banner';
import Highlights from '../components/Highlights';


export default function Home() {

	const data = {
		title: "RENT A CAR",
		content: "You can rent Any Car At any time you want.",
		destination: "/products",
		label: "RENT NOW!"
	}


	return (
		<>
		<Banner data={data} />
    	<Highlights />
    	
		</>
	)
}


