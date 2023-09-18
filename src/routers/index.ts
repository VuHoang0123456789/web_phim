import { HomePage } from '@/pages';

const publicRouter = [
    {
        path: '/home',
        element: HomePage,
        layout: null,
    },
];

const privateRouter = [
    {
        path: '/home',
        element: HomePage,
        layout: null,
    },
];
export { publicRouter, privateRouter };
