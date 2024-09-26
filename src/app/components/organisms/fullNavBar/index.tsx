import React from "react";
import ContactBar from "../../molecules/contactBar";
import NavBar from "../../molecules/navBar";
import styles from "./fullNavBar.module.css";

const FullNavBar = () => {
	return (
		<div className={styles.fullNavBar}>
			<ContactBar />
			<NavBar />
		</div>
	);
};

export default FullNavBar;
