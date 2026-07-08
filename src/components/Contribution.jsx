import { useState } from "react";

const ContributionModal = ({ isOpen, onClose }) => {
  const [copiedField, setCopiedField] = useState(null);

  if (!isOpen) return null;

  const handleCopy = (text, fieldId) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldId);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const accountDetails = [
    {
      id: "ngn",
      currency: "Nigerian Naira (NGN)",
      name: "Favour Ifeoma Igbomor",
      bank: "Providus Bank",
      number: "6509542348",
    },
    {
      id: "usd",
      currency: "US Dollars (USD)",
      name: "Favour Ifeoma Igbomor",
      bank: "Providus Bank",
      number: "4009543360",
    },
  ];

  return (
    <div className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm z-100 flex items-center justify-center p-4 select-none animate-fade-in">
      <div className="bg-[#FCFBF7] w-full max-w-lg rounded-xs shadow-2xl border border-stone-200/50 relative flex flex-col p-6 md:p-8 animate-scale-up">
        {/* Close Header Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-stone-800 font-sans tracking-wide text-xs uppercase transition-colors"
        >
          ✕ Close
        </button>

        <div className="text-center mb-6">
          <h3 className="font-serif text-2xl text-stone-800 font-normal mb-2">
            Send a Blessing
          </h3>
          <p className="text-stone-500 font-serif text-xs md:text-sm max-w-sm mx-auto leading-relaxed">
            Thank you for your kindness, generosity, and for celebrating this
            special moment with us.
          </p>
        </div>

        {/* Financial Information Loop */}
        <div className="space-y-6">
          {accountDetails.map((acc) => (
            <div
              key={acc.id}
              className="border border-stone-200/60 bg-[#FAF6F0]/40 p-4 rounded-xs relative group"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A880] font-semibold block mb-3">
                {acc.currency}
              </span>

              <div className="space-y-1.5 text-stone-700 font-serif text-sm">
                <p>
                  <span className="text-stone-400 font-sans text-[11px] uppercase tracking-wider block">
                    Account Name
                  </span>{" "}
                  {acc.name}
                </p>
                <p>
                  <span className="text-stone-400 font-sans text-[11px] uppercase tracking-wider block mt-2">
                    Bank
                  </span>{" "}
                  {acc.bank}
                </p>

                <div className="pt-2 flex items-center justify-between border-t border-stone-200/40 mt-2">
                  <div>
                    <span className="text-stone-400 font-sans text-[11px] uppercase tracking-wider block">
                      Account Number
                    </span>
                    <span className="font-mono text-base tracking-wider text-stone-800 font-medium">
                      {acc.number}
                    </span>
                  </div>

                  <button
                    onClick={() => handleCopy(acc.number, acc.id)}
                    className={`px-4 py-1.5 border border-stone-300 rounded-xs font-sans text-[10px] uppercase tracking-widest transition-all duration-300 ${
                      copiedField === acc.id
                        ? "bg-stone-800 text-white border-stone-800"
                        : "hover:bg-stone-900 hover:text-white hover:border-stone-900 text-stone-600"
                    }`}
                  >
                    {copiedField === acc.id ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[10px] text-stone-400 font-serif italic mt-6">
          We are truly grateful for your love and support.
        </p>
      </div>
    </div>
  );
};

export default ContributionModal;
