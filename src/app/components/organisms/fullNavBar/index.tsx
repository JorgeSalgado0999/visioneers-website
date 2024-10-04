import React from "react";
import ContactBar from "../../molecules/contactBar";
import NavBar from "../../molecules/navBar";
import styles from "./fullNavBar.module.css";
import {ResponsiveBar} from "../responsiveBar";

const FullNavBar = () => {
	return (
		<nav className={styles.fullNavBar}>
			<div className={styles.desktop}>
				<ContactBar />
				<NavBar />
			</div>
			<div className={styles.mobile}>
				<ResponsiveBar />
			</div>
		</nav>
	);
};

export default FullNavBar;
