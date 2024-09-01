import React from 'react';

const Button = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => (
  <button onClick={onClick} className="bg-blue-500 text-white px-4 py-2 rounded">
    {children}
  </button>
);

export default Button;