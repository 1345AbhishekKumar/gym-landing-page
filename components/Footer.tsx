'use client';

export const Footer = () => {
  return (
    <footer className="w-full flex justify-center py-[50px] bg-[#f2f2f2]">
      <nav aria-label="Footer social links" className="flex flex-wrap justify-center gap-[20px] md:gap-[50px] font-serif text-[16px] md:text-[18px] font-semibold">
        <a href="#" aria-label="Instagram" className="text-[#5e5b55] hover:text-[#f93700] transition-colors duration-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f93700] rounded">Instagram</a>
        <a href="#" aria-label="YouTube" className="text-[#5e5b55] hover:text-[#f93700] transition-colors duration-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f93700] rounded">YouTube</a>
        <a href="#" aria-label="Twitter" className="text-[#5e5b55] hover:text-[#f93700] transition-colors duration-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f93700] rounded">Twitter</a>
      </nav>
    </footer>
  );
};
