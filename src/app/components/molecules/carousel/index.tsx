import CarouselItem from "../../atoms/carouselItem";
import {Carousel} from "flowbite-react";

import styles from "./customCarousel.module.css";

interface CustomCarouselProps {
	items: {
		title: string;
		description: string;
		img: unknown;
		button: boolean;
		alignLeft: boolean;
	}[];
}

const CustomCarousel = (props: CustomCarouselProps) => {
	return (
		<div className={`${styles.customCarousel}`}>
			<Carousel pauseOnHover slideInterval={4000} slide={true}>
				{props.items.map((item, index) => (
					<CarouselItem
						key={index}
						title={item.title}
						description={item.description}
						img={String(item.img)}
						button={item.button}
						alignLeft={item.alignLeft}
					/>
				))}
			</Carousel>
		</div>
	);
};

export default CustomCarousel;
