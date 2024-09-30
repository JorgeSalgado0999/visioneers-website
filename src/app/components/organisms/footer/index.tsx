import Image from "next/image";
import React from "react";
import styles from "./footer.module.css";
import {Logo} from "@/assets";
import {FaPhone} from "react-icons/fa";
import Link from "next/link";

export const Footer = () => {
	return (
		<footer className={`${styles.footer}`}>
			{/* logo img  */}
			<div className={styles.logo}>
				<Link href="/">
					<Image
						src={Logo}
						alt="logo"
						layout="responsive"
						width={150}
						height={150}
					/>
				</Link>
			</div>

			<ul className={styles.menuOptions}>
				<li className={styles.option}>
					<Link href="/mentorias">Acompañamientos personalizados</Link>
				</li>
				<li className={styles.option}>
					<Link href="/servicios">Servicios</Link>
				</li>
				<li className={styles.option}>
					<Link href="/nosotros">Nosotros</Link>
				</li>
				<li className={styles.option}>
					<Link href="/contacto">Contacto</Link>
				</li>
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
