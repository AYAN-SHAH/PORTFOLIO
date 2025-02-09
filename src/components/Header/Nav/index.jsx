import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { links, footerLinks } from "./data";
import { perspective, slideIn } from "./anim";
import Link from "next/link";

export default function index() {
	return (
		<div className={styles.nav}>
			<div className={styles.body}>
				{links.map((link, i) => {
					const { title, href } = link;
					return (
						<div key={`b_${i}`} className={styles.linkContainer}>
							<motion.div
								href={href}
								custom={i}
								variants={slideIn}
								initial="initial"
								animate="enter"
								exit="exit"
							>
								<Link href={href}>{title}</Link>
							</motion.div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
