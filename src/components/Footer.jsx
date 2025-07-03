import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="d-flex justify-content-center align-items-center text-center mt-5">
      <p>&copy; {currentYear} <span className='text-primary'> COD3R2.</span> All Rights Reserved.</p>
    </div>
  );
}

export default Footer
