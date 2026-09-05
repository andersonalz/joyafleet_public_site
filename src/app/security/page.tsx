import Security from '../../views/Security';
import { createPageMetadata } from '../metadata';
export const metadata = createPageMetadata({ title: 'Security and Access Controls | Joya Fleet', description: 'Learn how Joya Fleet supports structured authentication, configurable permissions, activity records and implementation-defined access controls for connected airline operations.', path: '/security', });
export default function Page() { return <Security />; }
