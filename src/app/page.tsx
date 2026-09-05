import Home from '../views/Home';
import { createPageMetadata } from './metadata';

export const metadata = createPageMetadata({ title: 'JoyaFleet | Cloud-Based Flight Management Software', description: 'JoyaFleet is a cloud-based Flight Management Software platform connecting flight scheduling, operations, crew management, dispatch workflows, fleet visibility and configurable reporting for aviation operators.', path: '/', });

export default function Page() { return <Home />; }
