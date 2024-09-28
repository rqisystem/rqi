export const Card = ({ children, className = '' }) => (
  <div className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 ${className}`}>{children}</div>
);

export const CardContent = ({ children, className = '' }) => (
  <div className={` ${className}`}>{children}</div>
);
