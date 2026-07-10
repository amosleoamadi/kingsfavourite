const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#FAF6F0] border-t border-stone-200/40 py-12 px-6 md:px-12 text-center select-none">
      <div className="max-w-5xl mx-auto flex flex-col items-center space-y-4">
        {/* Core Monogram Moniker Logo */}
        <div className="text-lg font-serif tracking-[0.3em] text-stone-700 font-medium">
          K & F
        </div>

        {/* Divider Bar Segment */}
        <div className="w-8 h-px bg-stone-300/60"></div>

        {/* Minimal Copyright Legal Meta Label */}
        <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-stone-400">
          © {currentYear} Favour & Kingsly. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
