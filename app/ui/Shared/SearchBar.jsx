"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";



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
    <div className='searchbar'>
      <input
        id='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={`${
          routeType !== "/search" ? "Search communities" : "Search creators"
        }`}
        className='bg-neutral-600 text-white rounded-xl p-1'
      />
    </div>
  );
}

export default Searchbar;