import { useEffect, useState } from "react";
import fetchNavitems from "@/lib/fetchNavitems";
import { Navitems } from "@/lib/sanityTypes";

export const useNavitems = () => {
  const [navitems, setNavitems] = useState<Navitems[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedNavitems = await fetch('/api/navitems');
        const data = await fetchedNavitems.json();
        const navitems: Navitems[] = data.navitems;
        setNavitems(navitems);
      } catch (error) {
        console.error("Error fetching navitems:", error);
      }
    };
    fetchData();
  }, []);

  return navitems;
};
