import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { Home, Navigation, Shop, SingIn } from "./routes";

const App: FC = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path={'shop'} element={<Shop />} />
                <Route path={'sign-in'} element={<SingIn />} />
            </Route>
        </Routes>
    )
}

export { App };