import { Navitems } from "./sanityTypes";

const fetchNavitems = async () => {
  const res = await fetch(`/api/navitems`);
  const data = await res.json();
  const navitems: Navitems[] = data.navitems;
  return navitems;
};

export default fetchNavitems;
