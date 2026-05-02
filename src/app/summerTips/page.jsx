import { IoIosLeaf, IoIosWater, IoMdSunny } from "react-icons/io";

const SummerTips = () => {
    const tips = [
    {
      id: 1,
      title: "Stay Hydrated",
      desc: "Drink at least 8-10 glasses of water daily to keep your skin glowing.",
      icon: <IoIosWater />,
    
      iconBg: "bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400",
      cardBg: "bg-blue-50/30 dark:bg-[#0a0a0b]",
      border: "border-blue-100 dark:border-blue-500/20"
    },
    {
      id: 2,
      title: "Sun Protection",
      desc: "Always apply SPF 50+ sunscreen 20 minutes before heading out.",
      icon: <IoMdSunny />,
      
      iconBg: "bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400",
      cardBg: "bg-orange-50/30 dark:bg-[#0a0a0b]",
      border: "border-orange-100 dark:border-orange-500/20"
    },
    {
      id: 3,
      title: "Light Skincare",
      desc: "Switch to water-based moisturizers to avoid clogged pores in heat.",
      icon: <IoIosLeaf />,
      
      iconBg: "bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-400",
      cardBg: "bg-green-50/30 dark:bg-[#0a0a0b]",
      border: "border-green-100 dark:border-green-500/20"
    }
  ];

    return (
      <section className="py-20 bg-gray-300 dark:bg-[#2b616e]"> 
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
            Summer Care Essentials
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-medium">
            Expert tips to keep you fresh all summer long.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tips.map((tip) => (
            <div 
              key={tip.id} 
              className={`${tip.cardBg} ${tip.border} backdrop-blur-lg p-8 rounded-[2.5rem] border-2 shadow-xl shadow-gray-200/10 dark:shadow-none hover:-translate-y-2 transition-all duration-300`}
            >
             
              <div className={`w-16 h-16 ${tip.iconBg} rounded-2xl flex items-center justify-center text-3xl shadow-sm mb-8 transition-transform group-hover:rotate-12`}>
                {tip.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {tip.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm font-medium">
                {tip.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default SummerTips;