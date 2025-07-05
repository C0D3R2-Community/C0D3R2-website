import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="d-flex justify-content-center align-items-center text-center mt-2 pb-1">
      <p>&copy; {currentYear} <span className='fw-bold custom-primary-color-1'> COD3R2.</span> All Rights Reserved.</p>
    </div>
  );
}

export default Footer
