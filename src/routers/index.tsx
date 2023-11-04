import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

export default function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<p>Página inicial</p>} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
};