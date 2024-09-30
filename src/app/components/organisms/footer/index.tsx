import Image from "next/image";
import React from "react";
import styles from "./footer.module.css";
import {Logo} from "@/assets";
import {FaPhone} from "react-icons/fa";

export const Footer = () => {
	return (
		<footer
			className={`row-start-3 flex gap-6 flex-wrap items-center justify-center ${styles.footer}`}
		>
			{/* logo img  */}
			<div className={styles.logo}>
				<Image
					src={Logo}
					alt="logo"
					layout="responsive"
					width={150}
					height={150}
				/>
			</div>

			<ul className={styles.menuOptions}>
				<li className={styles.option}>Acompañamientos personalizados</li>
				<li className={styles.option}>Servicios</li>
				<li className={styles.option}>Nosotros</li>
				<li className={styles.option}>Contacto</li>
			</ul>

			<div className={styles.phonesContainer}>
				<div className={styles.phoneContainer}>
					<FaPhone className={styles.phoneIcon} />
					<a href="tel:+13322688620" className={styles.phoneNumber}>
						1 33 2268 8620
					</a>
				</div>
				<div className={styles.phoneContainer}>
					<FaPhone className={styles.phoneIcon} />
					<a href="tel:+13311855150" className={styles.phoneNumber}>
						1 33 1185 5150
					</a>
				</div>
			</div>
		</footer>
	);
};
