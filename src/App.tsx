import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { privateRouter, publicRouter } from './routers';
import { Fragment } from 'react';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRouter.map((item, index) => {
                        const Page = item.element;
                        const Layout = item.layout ? item.layout : Fragment;
                        return (
                            <Route
                                path={item.path}
                                key={index}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                    {privateRouter.map((item, index) => {
                        const Page = item.element;
                        const Layout = item.layout ? item.layout : Fragment;
                        return (
                            <Route
                                path={item.path}
                                key={index}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
