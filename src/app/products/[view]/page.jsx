import Image from "next/image";
import Link from "next/link";
import { MdOutlineStarRate } from "react-icons/md";
import { RiArrowGoBackLine } from "react-icons/ri";

const ViewDetails = async ({ params }) => {
  const { view } = await params;

  const res = await fetch("https://jackfruit-projects-ijnp-git-main-ibnaabids-projects.vercel.app/product.json", {
    cache: "no-store",
  });

  const data = await res.json();

  const product = data.find((item) => item.id == parseInt(view));

  if (!product) {
    return <div className="text-center mt-6 font-bold text-error text-2xl">Product Not Found..............!</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card w-96 mt-7 bg-base-100 shadow-xl">

        <figure className="p-5">
          <Image
           src={product.image} 
           width={700}
           height={500}
           
           alt={product.name} 
           className="rounded-xl" />
        </figure>

        <div className="card-body">
          <h2 className="card-title text-fuchsia-600">{product.name}</h2>

          <p className="text-shadow-cyan-200 font-bold text-xl">{product.description}</p>

          <div className="flex justify-between mt-3">
            <span className="font-bold text-primary">
              ${product.price}
            </span>

            <span className="font-semibold flex items-center gap-1 text-warning text-lg">
              <MdOutlineStarRate className="text-xl" />
              {product.rating}
            </span>
          </div>

          <div className="badge badge-outline mt-3">
            {product.category}
          </div>
          <div>
            <Link href="/" className="btn mt-4 btn-dash"> <RiArrowGoBackLine/>Back to Home</Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ViewDetails;