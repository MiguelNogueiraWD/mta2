// import components
import Footer from './../components/footer.jsx';
import Header from "./../components/Header/Header";
import Main from "./../components/MainSection/MainSection";
import TextImage from "./../components/basic_components/TextImage";
import { Quality } from "./../components/card/card";

//imports img
import photo1 from "./../assets/img/about_us/photo1.jpg";
import photo2 from "./../assets/img/about_us/photo2.jpg";

export default function AboutUs() {
	return (
		<>
			<Main />
			<TextImage 	styleBox="no-full-image"
						img={photo1}
						alt="About us" 
						firstPosition="text" 
						title="Some words about us" 
						text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi eaque culpa at fugiat a illum fuga expedita dolor officia soluta? Sint, nobis placeat ipsam aliquam consequuntur ex quam facilis et."/>
			<Quality />
			<TextImage 	styleBox="full-image"
						img={photo2}
						alt="Fast food quality" 
						firstPosition="picture" 
						title="FAST FOOD QUALITY" 
						text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi eaque culpa at fugiat a illum fuga expedita dolor officia soluta? Sint, nobis placeat ipsam aliquam consequuntur ex quam facilis et."/>
		</>
	)
}

