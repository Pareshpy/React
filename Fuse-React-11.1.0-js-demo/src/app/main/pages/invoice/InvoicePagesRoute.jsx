import { Navigate } from 'react-router-dom';
import CompactInvoicePage from './printable/CompactInvoicePage';
import ModernInvoicePage from './printable/ModernInvoicePage';
/**
 * Invoice Pages Route
 */
const InvoicePagesRoute = {
	path: 'pages/invoice/printable',
	children: [
		{
			path: '',
			element: <Navigate to="compact" />
		},
		{
			path: 'compact',
			element: <CompactInvoicePage />
		},
		{
			path: 'modern',
			element: <ModernInvoicePage />
		}
	]
};
export default InvoicePagesRoute;