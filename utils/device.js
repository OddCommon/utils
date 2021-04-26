export const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

export const isIPad = () => {
  return (
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 0) ||
    navigator.platform === "iPad"
  );
};
