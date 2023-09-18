import { useEffect } from "react";
import { motion } from "framer-motion";

/**
 * Represents the Loader component.
 * Displays an animated loader with SVG icons.
 *
 * @component
 * @param {function} setShowLoader - A function to set whether the loader should be displayed.
 */

const Loader = ({ setShowLoader }) => {
  useEffect(() => {
    // Automatically hide the loader after a delay
    setTimeout(() => {
      setShowLoader(false);
    }, 2800);
  }, [setShowLoader]);

  // Animation variants for the SVG icons
  const iconVariant1 = {
    hidden: {
      pathLength: 0,
      fill: "rgb(19, 26, 34)",
    },
    visible: {
      pathLength: 5,
      fill: "rgb(243, 243, 243)",
      stroke: "rgb(243, 243, 243)",
      strokeWidth: 3,
      scale: 0,
      transition: {
        default: { duration: 3, ease: "easeIn" },
        fill: { duration: 3, ease: [1, 0, 0.8, 1] },
        stroke: { duration: 3, ease: [1, 0, 0.8, 1] },
        scale: { duration: 3, ease: [1, 1, 0.5, 0] },
      },
    },
  };

  const iconVariant2 = {
    hidden: {
      pathLength: 0,
      fill: "rgb(19, 26, 34)",
    },
    visible: {
      pathLength: 5,
      fill: "rgb(72, 163, 198)",
      stroke: "rgb(72, 163, 198)",
      scale: 0,
      strokeWidth: 3,
      transition: {
        default: { duration: 3, ease: "easeIn" },
        fill: { duration: 3, ease: [1, 0, 0.8, 1] },
        stroke: { duration: 3, ease: [1, 0, 0.8, 1] },
        scale: { duration: 3, ease: [1, 1, 0.5, 0] },
      },
    },
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      {/* Animated SVG */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
        style={{ width: "500", height: "500" }}
      >
      {/* First SVG path */}
      <motion.path
          d="M206.393 211.493C206.393 251.774 285.482 241.331 285.482 278.3C285.482 291.93 271.357 305.071 253.429 305.071C224.2 305.071 208.112 275.842 208.112 275.842H206.883V292.3C215.971 299.055 230.341 307.284 246.549 307.284C274.919 307.284 292.607 290.336 292.607 273.264C292.607 230.279 214.987 242.191 214.987 208.545C214.987 194.909 227.513 181.034 250.357 181.034C276.638 181.034 284.133 201.665 284.133 201.665H285.357V185.211C275.903 182.014 265.466 179.56 250.357 179.56C221.987 179.56 206.393 194.42 206.393 211.493Z"
          variants={iconVariant2}
          initial="hidden"
          animate="visible"
        />
        {/* Second SVG path */}
        <motion.path
          d="M206.096 295.771V297H239.258V295.771C228.695 295.771 227.961 287.052 227.961 262.859V236.698C227.961 230.927 230.169 225.891 236.554 225.891C245.273 225.891 251.539 236.698 266.523 236.698C276.221 236.698 282.242 230.437 282.242 223.193H281.013C281.013 227.49 276.591 230.193 271.924 230.193C261.117 230.193 254.362 222.578 242.205 222.578C234.836 222.578 229.429 226.505 227.961 229.823V175.417H248.221C276.466 175.417 292.679 182.052 292.679 190.276V190.771H293.909V174.187H206.096V175.417C216.659 175.417 217.398 184.135 217.398 208.333V262.859C217.398 287.052 216.659 295.771 206.096 295.771Z"
          variants={iconVariant1}
          initial="hidden"
          animate="visible"
        />
      </motion.svg>{" "}
    </div>
  );
};

export default Loader;
