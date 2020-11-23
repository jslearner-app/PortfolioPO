import React, { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

// don't forget to add device viewability 

//Components
import ScrollForMore from "../components/scrollForMore";

//Ease
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const lastName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

const Model = ({ imageDetails }) => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [canScroll]);

  return (
    <motion.div
      onAnimationComplete={() => setCanScroll(true)}
      className='single'
      initial='initial'
      animate='animate'
      exit='exit'>
      <div className='container fluid'>
        <div className='row center top-row'>
          <div className='top'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.2, ...transition },
              }}
              className='details'>
              <div className='location'>
                <span>Front-End Developer</span>
                <span>-In Belgium</span>
              </div>
              <div className='mua'>Blogger: 
               @fashionablystingy</div> 
            </motion.div>
            <motion.div className='model'>
              <motion.span className='first' variants={firstName}>
                <motion.span variants={letter}>P</motion.span>
                <motion.span variants={letter}>a</motion.span>
                <motion.span variants={letter}>t</motion.span>
                <motion.span variants={letter}>i</motion.span>
                <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter}>n</motion.span>
                <motion.span variants={letter}>c</motion.span>
                <motion.span variants={letter}>e</motion.span>
              </motion.span>
              <motion.span className='last' variants={lastName}>
                <motion.span variants={letter}>O</motion.span>
                <motion.span variants={letter}>r</motion.span>
                <motion.span variants={letter}>a</motion.span>
              </motion.span>
            </motion.div>
          </div>
        </div>
        <div className='row bottom-row'>
          <div className='bottom'>
            <motion.div className='image-container-single'>
              <motion.div
                initial={{
                  y: "-50%",
                  width: imageDetails.width,
                  height: imageDetails.height,
                }}
                animate={{
                  y: 0,
                  width: "100%",
                  height: window.innerWidth > 1440 ? 800 : 400,
                  transition: { delay: 0.2, ...transition },
                }}
                className='thumbnail-single'>
                <motion.div
                  className='frame-single'
                  whileHover='hover'
                  transition={transition}>
                  <motion.img
                    src={require("../images/patienceora.jpg")}
                    alt='an image'
                    style={{ scale: scale }}
                    initial={{ scale: 1.0 }}
                    animate={{
                      transition: { delay: 0.2, ...transition },
                      y: window.innerWidth > 1440 ? -1200 : -600,
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          <ScrollForMore />
          
        </div>
      </div>
      <div className='detailed-information'>
        <div className='container'>
          <div className='row'>
            <h2 className='title'>
              Get to know me & <br /> More.
            </h2>
            <p>
              I'm a 21-year-old currently studying web development and design. 

I've grown as a developer, as I've studied alongside other developers who have raised my standards for whats expected of any web application.

Through these experiences, I've had the opportunity to create minimalistic and responsive websites that are not only enjoyable to use but are written in code that's maintainable and easy to understand.
            </p>
          </div>
        </div>
      </div>

      <div className='detailed-information-skills'>
      <div className='container'>
          <div className='row'>
            <h2 className='title'>
              Skills & <br /> More.
          </h2>
          {/* Not sure how if I want to add a skill bar or a pie circular with label */}
            </div>
             </div>
             







        
       
      </div>
      <div className='detailed-information-work'>
        <div className='container'>
          <div className='row'>
            <h2 className='title'>
              My Works & <br /> More.
            </h2>
            {/* I'm also not sure on what design I want to use to showcase my works maybe through
             some responsive image cards? or like a sticky polariod image so it can look more like a magazine?  */}
</div>
</div>
</div>
<div className='detailed-information-social'>
        <div className='container'>
          <div className='row'>
            <h2 className='title'>
              Get Connected & <br /> More.
            </h2>
            {/* <h3 className="contact-title">Just say hi.</h3> */}
            <div className="contact-description">
              <p> I'm always open to discuss projects and connect!</p>
            
            <div className="mail-me">
            <p className="title">Contact me <a href="mailto:patienceora@hotmail.com">patienceora@hotmail.com</a></p>
            
            </div>
            </div>
       </div>
</div>
</div>

</motion.div>
  );
};


// add footer to this page/  add some social links to it.

export default Model;
