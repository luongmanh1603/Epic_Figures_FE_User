import config from '~/config';

// Layouts
import { HeaderOnly } from '~/layouts';

// Pages
import Home from '~/pages/Home';


// Public routes
export const publicRoutes = [
    { path: config.routes.home, component: Home },
   
];

// Private routes
export const privateRoutes = [];
