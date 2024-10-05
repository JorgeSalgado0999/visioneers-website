import Image from "next/image";
import React from "react";
import styles from "./footer.module.css";
import {Logo} from "@/assets";
import {FaPhone} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaTiktok} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaYoutube} from "react-icons/fa";
import Link from "next/link";

export const Footer = () => {
	return (
		<footer className={`${styles.footer}`}>
			<div className={styles.firstRow}>
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

				<div className={styles.socialMedia}>
					<div className={styles.iconContainer}>
						<FaFacebook className={styles.icon} />
					</div>
					<div className={styles.iconContainer}>
						<FaInstagram className={styles.icon} />
					</div>
					<div className={styles.iconContainer}>
						<FaTiktok className={styles.icon} />
					</div>
					<div className={styles.iconContainer}>
						<FaLinkedin className={styles.icon} />
					</div>
					<div className={styles.iconContainer}>
						<FaYoutube className={styles.icon} />
					</div>
				</div>
			</div>
			<div className={styles.secondRow}>
				<p className={styles.copyRight}>
					&copy; <strong>Visioneers 2024</strong> | Cookies
				</p>
			</div>
		</footer>
	);
};
