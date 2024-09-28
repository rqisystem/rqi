export const Button = ({ children, onClick, variant = 'primary' }) => {
  const baseStyle =
    'px-4 py-2 rounded-full font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200';
  const variants = {
    primary: 'bg-pink-500 text-white hover:bg-pink-600 focus:ring-pink-500',
    secondary: 'bg-purple-500 text-white hover:bg-purple-600 focus:ring-purple-500',
    ghost: 'bg-transparent text-white hover:bg-white/10 focus:ring-white',
  };

  return (
    <button className={`${baseStyle} ${variants[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
};
