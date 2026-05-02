
import ProductDet from "./ProductDet";
import 'animate.css';

const AllCards = async () => {
  const res = await fetch("https://jackfruit-projects-ijnp-git-main-ibnaabids-projects.vercel.app/product.json");
  const collection = await res.json();

  return (
    <div className="py-16 px-6 bg-base-200 min-h-screen">
      
      {/* Title */}
      <div className="text-center mb-12">
     
        <h2 className="text-4xl animate__animated animate__lightSpeedInRight font-black">
          Popular Products
        </h2>
        <p className="text-gray-500 mt-3  animate__animated animate__fadeInUp">
          Discover our trending and best-selling items
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {collection.map((prod) => (
          <div key={prod.id} className="animate__animated animate__fadeInUp">
            <ProductDet
              prod={prod}
            />
          </div>
        ))}
      </div>

    </div>
  );
};

export default AllCards;