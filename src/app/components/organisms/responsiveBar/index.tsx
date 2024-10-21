"use client";
import React, {useState} from "react";
import styles from "./responsiveBar.module.css";

import {FaPhone} from "react-icons/fa";
import {FaWhatsapp} from "react-icons/fa";
import {GiHamburgerMenu} from "react-icons/gi";
import {IoClose} from "react-icons/io5";
import Link from "next/link";

export const ResponsiveBar = () => {
	const [open, setOpen] = useState(false);

	return (
		<div className={styles.navBar}>
			<div className={styles.topBar}>
				<div
					className={styles.menuButtonContainer}
					onClick={() => setOpen(!open)}
				>
					<GiHamburgerMenu className={styles.menuButton} />
				</div>

				<div className={styles.rightSide}>
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
					<div className={styles.whatsappButtonContainer}>
						<a
							href="https://wa.me/13322688620"
							target="_blank"
							className={styles.whatsappButton}
						>
							<FaWhatsapp className={styles.whatsIcon} />
							Contáctanos
						</a>
					</div>
				</div>
			</div>

			<div
				className={`${styles.hiddenMenu} ${open ? styles.show : styles.hide}`}
			>
				<div
					className={styles.navButtonContainer}
					onClick={() => setOpen(!open)}
				>
					<IoClose className={styles.menuButtonClose} />
				</div>

				<ul className={styles.navList}>
					<li className={styles.navItem}>
						<Link href="/">Inicio</Link>
					</li>
					<li className={styles.navItem}>
						<Link href="/mentorias">Acompañamientos personalizados</Link>
					</li>
					<li className={styles.navItem}>
						<Link href="/servicios">Servicios</Link>
					</li>
					<li className={styles.navItem}>
						<Link href="/nosotros">Nosotros</Link>
					</li>
					<li className={styles.navItem}>
						<Link href="/contacto">Contacto</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};
