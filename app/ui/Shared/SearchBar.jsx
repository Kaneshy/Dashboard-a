"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";



function Searchbar({ routeType }) {
  const router = useRouter();
  const [search, setSearch] = useState("");

  // query after 0.3s of no input
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (search) {
        router.push(`/dashboard/products/Search?q=` + search);
      } else {
        router.push(`/dashboard/products/Search`);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [search, routeType]);

  return (

      <div className="flex items-center w-2/3 max-w-xl ml-4 px-4  ">
        <div className="flex w-full ">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border w-full border-gray-600 bg-neutral-900 rounded-full px-4 py-2 focus:outline-none focus:ring focus:border-blue-500  "
          />
        </div>
      </div>


  );
}

export default Searchbar;

{/* <button
onClick={handlequeryb}
className=" bg-gray-600 hover:bg-gray-300 text-gray-200 px-3 py-2  rounded-r-full">
<IoSearchOutline size={24} />
</button> */}