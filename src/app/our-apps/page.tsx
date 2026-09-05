import OurApps from '../../views/OurApps';
import { createPageMetadata } from '../metadata';
export const metadata = createPageMetadata({ title: 'Joya Fleet Mobile Apps | 1-Month Interactive Master Schedule', description: 'Explore the Joya Fleet Mobile Application for airline flight crew, pilots, and operations teams. Manage 30-day master schedules, personal rosters, duties, flight manuals, duty requests, and instant messaging.', path: '/our-apps', });
export default function Page() { return <OurApps />; }
