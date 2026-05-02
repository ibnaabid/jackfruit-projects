import Image from "next/image";
import Link from "next/link";
import { MdOutlineStarRate } from "react-icons/md";

const ProductDet = ({ prod }) => {
  const { name,id, brand, description, price, rating, image, category } = prod;

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-2xl overflow-hidden border border-base-200">

        {/* Image */}
        <figure className="bg-gradient-to-br from-base-200 to-base-300 p-6">
          <Image
            src={image}
            width={300}
            height={300}
            alt={name}
            className="rounded-xl object-cover h-52 w-full"
          />
        </figure>

        {/* Content */}
        <div className="card-body">

          {/* Title + Brand */}
          <div className="flex justify-between items-start gap-2">
            <h2 className="card-title text-xl font-bold leading-7">
              {name}
            </h2>

            <div className="badge badge-secondary px-3 py-3 font-semibold">
              {brand}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-red-300 leading-6 line-clamp-2">
            {description}
          </p>

          {/* Price + Rating */}
          <div className="flex justify-between items-center mt-3">
            <span className="text-2xl font-black text-primary">
              ${price}
            </span>

            <span className="font-semibold flex items-center gap-1 text-warning text-lg">
              <MdOutlineStarRate className="text-xl" />
              {rating}
            </span>
          </div>

          {/* Footer */}
          <div className="card-actions justify-between items-center mt-5">

            <div className="badge badge-outline px-4 py-3 font-medium">
              {category}
            </div>

            <Link href={`/products/${id}`}  className="btn text-2xl px-4  btn-soft btn-accent btn-sm rounded-xl ">
              Buy Now
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDet;