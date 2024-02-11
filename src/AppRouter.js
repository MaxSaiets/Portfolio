import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes } from "./routes";
import { MAIN_ROUTE } from "./utils/consts";
import { v4 as uuidv4 } from "uuid"; 

const AppRouter = () => {

    return (
        <Routes> 
            {publicRoutes.map(({path, Component}) => 
                <Route key={uuidv4()} path={path} element={<Component />} exact/> // exact - означає що путь повинен точно співпадати
            )}

            <Route
                path="*"
                element={<Navigate to={MAIN_ROUTE} replace />}
            />
        </Routes>
    );
};

export default AppRouter;