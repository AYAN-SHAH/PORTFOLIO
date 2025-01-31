import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Header from "../components/Header";
import StickyCursor from "../components/stickyCursor";
import "@/styles/styles.scss";
import "@/styles/globals.css";
import Lenis from "lenis";
import Footer from "@/components/Footer";
import { useEffect } from "react";

import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="" style={{ backgroundColor: "#F7F2F2" }}>
      {/* <Header /> */}
      <StickyCursor />
      <AnimatePresence mode="wait">
        <motion.div key={router.pathname}>
          <Component {...pageProps} />
          <motion.div
            className="slide-in"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          ></motion.div>
          <motion.div
            className="slide-out"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          ></motion.div>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
