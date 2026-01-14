import heroImage from "@/assets/hero-landing.png";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-end pb-12 px-4">
        {/* Glassmorphism Login Module */}
        <div className="w-full max-w-md">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">
            <div className="flex flex-col items-center space-y-6">
              {/* Lock Icon with Pulsing Glow */}
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-400/30 rounded-full blur-xl animate-pulse" />
                <div className="relative w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
                  <svg 
                    className="w-8 h-8 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" 
                    />
                  </svg>
                </div>
              </div>
              
              <h2 className="text-xl font-semibold text-white">FPL Rådgivare</h2>
              <p className="text-white/70 text-center text-sm">
                Din Guide för att optimera ditt lag
              </p>
              
              {/* PIN Input Dots */}
              <div className="flex space-x-4">
                {[1, 2, 3, 4].map((dot) => (
                  <div 
                    key={dot}
                    className="w-4 h-4 rounded-full bg-white/20 border border-white/30"
                  />
                ))}
              </div>
              
              {/* Enter Button */}
              <button className="w-full py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-medium rounded-xl transition-all duration-200 shadow-lg shadow-emerald-500/25">
                Logga in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
