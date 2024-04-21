import { useEffect, useState } from "react";
import fetchNavitems from "@/lib/fetchNavitems";
import { Navitems } from "@/lib/sanityTypes";

export const useNavitems = () => {
  const [navitems, setNavitems] = useState<Navitems[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedNavitems = await fetchNavitems();
        setNavitems(fetchedNavitems);
      } catch (error) {
        console.error("Error fetching navitems:", error);
      }
    };
    fetchData();
  }, []);

  return navitems;
};
