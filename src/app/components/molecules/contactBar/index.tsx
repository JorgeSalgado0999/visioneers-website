import React from "react";
import styles from "./contactBar.module.css";

import {FaFacebook} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaTiktok} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaYoutube} from "react-icons/fa";
import {FaPhone} from "react-icons/fa";
import {FaWhatsapp} from "react-icons/fa";

const ContactBar = () => {
	return (
		<div className={styles.contactBar}>
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
	);
};

export default ContactBar;
