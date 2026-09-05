import Integrations from '../../../views/Integrations';
import { createPageMetadata } from '../../metadata';
export const metadata = createPageMetadata({ title: 'Airline Operations Integrations | Joya Fleet', description: 'Configure Joya Fleet add-ons, communication channels and tailored integrations for selected aviation, operational and business workflows.', path: '/platform/integrations', });
export default function Page() { return <Integrations />; }
