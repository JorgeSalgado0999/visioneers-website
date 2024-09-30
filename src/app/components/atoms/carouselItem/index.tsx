import Image from "next/image";
import React from "react";

import styles from "./carouselItem.module.css";
import {FaWhatsapp} from "react-icons/fa";

// set interface to define props
interface CarouselItemProps {
	// define props here
	img: string;
	title: string;
	description: string;
	button: boolean;
	alignLeft: boolean;
}

const CarouselItem = (props: CarouselItemProps) => {
	return (
		<div className={styles.carouselItem}>
			<Image
				src={props.img}
				alt="Slide 1"
				layout="fill"
				objectFit="cover"
				className={styles.carouselItem_image}
			/>
			<div
				className={`${styles.carouselItem_content} ${
					props.alignLeft ? styles.contentLeft : styles.contentRight
				}`}
			>
				<div className="">
					<h2 className={styles.title}>{props.title} </h2>
					<p className={styles.description}> {props.description} </p>
				</div>

				{props.button && (
					<div className={styles.whatsappButtonContainer}>
						<a
							href="https://wa.me/5213311855150"
							target="_blank"
							className={styles.whatsappButton}
						>
							<FaWhatsapp className={styles.whatsIcon} />
							Contáctanos
						</a>
					</div>
				)}
			</div>
		</div>
	);
};

export default CarouselItem;
