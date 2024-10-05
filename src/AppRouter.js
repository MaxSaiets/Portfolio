import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes } from "./routes";
import { MAIN_ROUTE } from "./utils/consts";
import { v4 as uuidv4 } from "uuid"; 
import { HashRouter } from 'react-router-dom';

const AppRouter = () => {

    return (
        <HashRouter>
            <Routes> 
                {publicRoutes.map(({path, Component}) => 
                    <Route key={uuidv4()} path={path} element={<Component />} exact/> // exact - означає що шлях повинен точно співпадати
                )}

                <Route
                    path="*"
                    element={<Navigate to={MAIN_ROUTE} replace />}
                />
            </Routes>
        </HashRouter>
    );
};

export default AppRouter;