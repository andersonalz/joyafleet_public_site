import AboutUs from '../../views/AboutUs';
import { createPageMetadata } from '../metadata';
export const metadata = createPageMetadata({ title: 'About Joya Fleet | Airline Operations Platform', description: 'Learn why Joya Fleet was developed in Shiraz, Iran, how the platform supports connected flight-operations workflows and who is building it.', path: '/about', });
export default function Page() { return <AboutUs />; }
