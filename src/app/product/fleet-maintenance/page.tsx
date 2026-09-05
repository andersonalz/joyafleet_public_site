import FleetMaintenance from '../../../views/FleetMaintenance';
import { createPageMetadata } from '../../metadata';
export const metadata = createPageMetadata({ title: 'Fleet & Maintenance Planning Software for Airlines | Joya Fleet', description: 'Keep aircraft information, availability, scheduled maintenance, AOG periods and operational fleet records connected with Joya Fleet.', path: '/platform/fleet-maintenance', });
export default function Page() { return <FleetMaintenance />; }
