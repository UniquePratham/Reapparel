// components/WishlistButton.js
import { useEffect, useState } from "react";
import { IconButton } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { isWishlisted, toggleWishlist } from "../lib/wishlist";

const MotionButton = motion(IconButton);

export default function WishlistButton({ itemId, size = "sm" }) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setSaved(isWishlisted(itemId));
    const sync = () => setSaved(isWishlisted(itemId));
    window.addEventListener("reapparel:wishlist", sync);
    return () => window.removeEventListener("reapparel:wishlist", sync);
  }, [itemId]);

  return (
    <MotionButton
      aria-label={saved ? "Remove from wishlist" : "Save to wishlist"}
      aria-pressed={saved}
      size={size}
      variant="ghost"
      whileTap={{ scale: 0.85 }}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        setSaved(toggleWishlist(itemId).includes(itemId));
      }}
      icon={
        <motion.span
          key={saved ? "on" : "off"}
          initial={{ scale: 0.6 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 18 }}
          style={{ fontSize: "1.05rem", lineHeight: 1 }}
        >
          {saved ? "♥" : "♡"}
        </motion.span>
      }
      color={saved ? "brand.600" : "gray.500"}
      _hover={{ bg: "brand.50", color: "brand.600" }}
    />
  );
}