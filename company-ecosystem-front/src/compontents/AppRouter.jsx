import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import {authRoutes, publicRoutes} from "../utils/routes";
import NotFound from "../pages/NotFound";

const AppRouter = ({isAuth}) => {
    return (
        <Routes>
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={Component}/>
            )}

            {isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={Component}/>
            )}
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
};

export default AppRouter;