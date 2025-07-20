import { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";

import ErrorBoundary from "./components/appRouter/ErrorBoundary";
import Loading from "./routes/loading";
import RootLayout from "./routes/layout";
// routes
const NotFoundPage = lazy(() => import("./routes/not-found"));
import RootPage from "./routes/page";
import HomePage from "./routes/home/page";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <RootLayout>
                <ErrorBoundary>
                    <Suspense fallback={<Loading />}>
                        <Outlet />
                    </Suspense>
                </ErrorBoundary>
            </RootLayout>
        ),
        children: [
            {
                index: true,
                element: <RootPage />,
            },
            {
                path: "/home",
                element: <HomePage />,
            },
            {
                path: "*",
                element: <NotFoundPage />,
            },
        ],
    },
]);

export default function AppRouter() {
    return <RouterProvider router={router} />;
}
