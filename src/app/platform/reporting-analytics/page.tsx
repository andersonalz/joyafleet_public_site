import ReportingAnalytics from '../../../views/ReportingAnalytics';
import { createPageMetadata } from '../../metadata';
export const metadata = createPageMetadata({ title: 'Airline Reporting & Analytics Software | Joya Fleet', description: 'Build configurable airline reports with configurable columns, filters, reusable templates and PDF, Excel and CSV outputs using Joya Fleet.', path: '/platform/reporting-analytics', });
export default function Page() { return <ReportingAnalytics />; }
