import Updates from '../../../views/Updates';
import { createPageMetadata } from '../../metadata';
export const metadata = createPageMetadata({ title: 'System Release Updates & Patch Notes | Joya Fleet', description: 'Explore the latest Joya Fleet software release updates, version patch notes, system settings, admin permissions, and schedule features.', path: '/updates', });
export default function Page() { return <Updates />; }
