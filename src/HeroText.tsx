import { motion } from "framer-motion";
import Compass from "./Compass";
import { animationStart, reveal } from "./utils/animation";

function HeroText() {
  return (
    <motion.div
      layout
      initial={{ height: 0 }}
      animate={{ height: "unset" }}
      transition={{ delay: animationStart, duration: 1 }}
      className="flex flex-col items-center text-center"
    >
      <motion.div
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{ delay: animationStart + 1, duration: 0.5 }}
        className="flex flex-col text-3vw <md:text-24px font-bold mb-30px pt-100px"
      >
        <span className="flex items-center gap-10px">
          Happy Birthday  Ayushi
        </span>
        <span> Getting sexier each year!</span>
      </motion.div>
      <motion.span
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{ delay: animationStart + 1.2, duration: 0.5 }}
        className="mb-30px w-1/4 <lg:w-1/3 <md:w-1/2 text-20px leading-tight"
      >  [PC pr autocorrect nhi hota na, to spelling mistake ignore kr dena ]<br></br>
        Hn hn Jaanta hu, 'Special aur Rare' rakhna tha ise, par sweetheart, This is special day,Well aaj se shyad do saal pehle maine bade khauf me 
        tumhe sookha sookha wish kra tha, probably that was my best decision.Tumne thanks to bola tha aur ek question fek kr maara tha ki "Tum kaun?".
        Mai to bs ye soch rha tha ki ab block hua ab block hua.Par Rasmalai, you are built different.Samajhdaar ho tum. And absolutely Hot and Sexxxy.
        Aur ummm... To aaj Birthday hai tumhara par tum to beemar ho, very bad, dhyan nahi rakhti tum apna. Waise mai jaanta hu tumhe ye birthday ke taam 
        jhaam nahi pasand pr mai keh rha ki kha lo kuch bahar ja ke, McD, ya Pizza wagera kha lena, aur ye mai bol kyu rha, ab to address hai mere pass 
        mai to mnga dunga kl dopehar me. Umm ab mudde ki baat, kyuki girlfriend ho to thodi ab pyaar bhari baatein...I'm just an average and boring boy
        and you're my awesome girl. You've got a voice that could put an insomniac me to sleep, I just love your voice. Waise tum sahi hi kehti ho, ise rare 
        hi rakhna padeg, kyuki me out of words honey. Abhie wapis se wahi sb baatien likhunga to umm tum bored ho jaaogi. Khair, Ayushiiii, I love you honey ❤️. 
        Plus,(ise copy mt kiya kro hnn) wo gaana nhi hai, <br></br>
        मेरी छोटी सी भूलों को<br></br>
        तू नदिया में बहा देना<br></br>
        बस मेरे लिए तू कभी<br></br>
        खिल के मुस्कुरा देना<br></br>
        I love you .<br></br>
        Aur, Happy birthday Sweetheart!!
        
       Aur, ise chipa kr rakhna hnn...
      </motion.span>
    </motion.div>
  );
}

export default HeroText;
