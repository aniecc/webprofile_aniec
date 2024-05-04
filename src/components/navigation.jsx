import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [navbarBg, setNavbarBg] = useState('bg-transparent');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > 20) {
        setNavbarBg('bg-white shadow-lg');
      } else {
        setNavbarBg('bg-transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navbarBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
        <div>
          <a onClick={() => scrollToSection('home')} className="block py-6 text-2xl font-bold text-primary cursor-pointer">
            aniecanafisah
          </a>
        </div>
        <div className="flex items-center text-xl">
          <ul className="flex gap-8">
            <li className="group">
              <a
                onClick={() => scrollToSection('home')}
                className="flex py-2 text-dark hover:text-primary cursor-pointer"
              >
                Beranda
              </a>
            </li>
            <li className="group">
              <a
                onClick={() => scrollToSection('about')}
                className="flex py-2 text-dark hover:text-primary cursor-pointer"
              >
                Tentang Saya
              </a>
            </li>
            <li className="group">
              <a
                onClick={() => scrollToSection('resume')}
                className="flex py-2 text-dark hover:text-primary cursor-pointer"
              >
                Resume
              </a>
            </li>
            <li className="group">
              <a
                onClick={() => scrollToSection('portfolio')}
                className="flex py-2 text-dark hover:text-primary cursor-pointer"
              >
                Portofolio
              </a>
            </li>
            <li className="group">
              <a
                onClick={() => scrollToSection('contact')}
                className="flex py-2 text-dark hover:text-primary cursor-pointer"
              >
                Kontak
              </a>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
