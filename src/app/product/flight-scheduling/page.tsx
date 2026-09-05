import FlightScheduling from '../../../views/FlightScheduling';
import { createPageMetadata } from '../../metadata';
export const metadata = createPageMetadata({ title: 'Flight Scheduling Software | JoyaFleet Flight Operations Platform', description: 'JoyaFleet Flight Scheduling Software helps aviation teams manage recurring schedules, ad-hoc flights, aircraft assignments, schedule changes and connected operational workflows.', path: '/platform/flight-scheduling', });
export default function Page() { return <FlightScheduling />; }
