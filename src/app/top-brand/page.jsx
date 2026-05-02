import Image from "next/image";

const TopBrands = () => {
  // প্রফেশনাল লুকের জন্য কিছু ডামি লোগো ইমেজ ইউআরএল
  const brands = [
    { 
      name: "La Roche-Posay", 
      image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=400" 
    },
    { 
      name: "CeraVe", 
      image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=400" 
    },
    { 
      name: "Neutrogena", 
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400" 
    },
   
  ];

  return (
    <section className="py-20 bg-gray-200 dark:bg-[#fill-fuchsia-200]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl rounded-2xl text-center mt-5 border border-t-4 font-black  tracking-tight">
              Top Brands
            </h2>
            <p className="text-blue-500 font-bold pt-3 mt-1">Trusted by millions worldwide.</p>
          </div>
          <div className="flex gap-2">
             <div className="w-12 h-1 bg-indigo-500 rounded-full" />
             <div className="w-4 h-1 bg-indigo-200 rounded-full" />
          </div>
        </div>

        {/* Brand Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {brands.map((brand, index) => (
            <div 
              key={index} 
              className="group relative h-64 overflow-hidden rounded-[2.5rem] bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-indigo-500 transition-all duration-500 cursor-pointer"
            >
              {/* Product/Brand Image */}
              <Image 
                src={brand.image}
                alt={brand.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
              />
              
              {/* Dark Overlay for Text Visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Brand Name */}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-white text-xl font-bold tracking-tight block">
                  {brand.name}
                </span>
                <p className="text-gray-300 text-xs mt-1 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Shop Now →
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopBrands;