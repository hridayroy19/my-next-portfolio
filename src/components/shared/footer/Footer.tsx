const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div
        className="
          max-w-7xl
          mx-auto
          px-4 sm:px-6 lg:px-10
          py-6
          text-center
          text-xs sm:text-sm
        "
      >
        © {new Date().getFullYear()} Hridoy Roy. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
