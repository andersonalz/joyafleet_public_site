import NotFoundPage from '../views/NotFound';
import { createPageMetadata } from './metadata';

export const metadata = createPageMetadata({ title: 'Page Not Found | Joya Fleet', description: 'The requested Joya Fleet page could not be found.', path: '/' });

export default function NotFound() { return <NotFoundPage />; }
