import { motion } from "framer-motion";

const SliderItem = ({ images, from, to }) => {
  return (
    <div className="flex MyGradient overflow-hidden">
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {[...images,...images,...images].map((image, index) => {
          return <img className="h-40 w-90 pr-20" src={image} key={index} alt="Companies" />;
        })}
      </motion.div>
    </div>
  );
};

export default SliderItem;