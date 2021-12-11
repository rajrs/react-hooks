import React from "react";
import { routes } from "./routes/route";
import { useRoutes} from 'react-router-dom';
import './scss/common.scss'
const App = (props)=> {
    const routing = useRoutes(routes);
   return (
        <div className="app-content">
            {routing}
        </div>
        )
    }
export { App}