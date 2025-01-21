import { Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LoadingSpinner() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className="flex justify-center items-center"
    >
      <Loader2 className="h-8 w-8 text-blue-600" />
    </motion.div>
  );
}