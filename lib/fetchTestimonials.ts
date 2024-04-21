import { Testimonials } from "./sanityTypes";

const fetchTestomonials = async () => {
  const res = await fetch(`/api/testimonials`);
  const data = await res.json();
  const testimonials: Testimonials[] = data.testimonials;
  return testimonials;
};
export default fetchTestomonials;
