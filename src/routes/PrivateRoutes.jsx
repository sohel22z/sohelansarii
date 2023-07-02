import { Route, Routes } from 'react-router-dom';
import About from '../app/pages/about';
import Home from '../app/pages/home';

const PrivateRoutes = () => {

    return (

        <>

            <Routes>
                <Route>
                    <Route index element={<Home />} />
                    <Route path='about' element={<About />} />
                </Route>
            </Routes>

        </>

    )

}

export default PrivateRoutes;