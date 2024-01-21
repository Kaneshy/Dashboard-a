"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";




function  Searchbar({paramsB}) {
  const router = useRouter();
  const [search, setSearch] = useState("");
  console.log('nnnnn', paramsB)
  const Params = usePathname()
  const test = Params.split('/')[2]
  console.log('dddddd', test)

  // query after 0.3s of no input
  useEffect(() => {
    console.log('dgd', paramsB)
    const delayDebounceFn = setTimeout(() => {
      if(search) {
        router.push(`/dashboard/products/Search/${test}?q=` + search);
      } else {
        router.push(`/dashboard/products/Search/${test}` + search);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [search]);
 

  return (

      <div className="flex w-full items-center ml-4 px-4  ">
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