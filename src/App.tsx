import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { Home, Navigation, Shop } from "./routes";

const App: FC = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path={'shop'} element={<Shop />} />
            </Route>
        </Routes>
    )
}

export { App };