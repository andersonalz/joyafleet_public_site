import Blog from '../../views/Blog';
import { createPageMetadata } from '../metadata';
export const metadata = createPageMetadata({ title: 'Aviation Insights & Airline Management Blog | Joya Fleet', description: 'Explore in-depth articles on airline digital transformation, OCC flight dispatch, automated FTL compliance, and fleet maintenance synchronization with Joya Fleet.', path: '/blog', });
export default function Page() { return <Blog />; }
