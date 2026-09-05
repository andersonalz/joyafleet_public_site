import { Suspense } from 'react';
import Contact from '../../views/Contact';
import { createPageMetadata } from '../metadata';
export const metadata = createPageMetadata({ title: 'Contact Joya Fleet | Aviation Operations Platform', description: 'Contact Joya Fleet to discuss connected flight-operations workflows, platform demonstrations, customization and implementation options.', path: '/contact', });
export default function Page() { return <Suspense fallback={null}><Contact /></Suspense>; }
