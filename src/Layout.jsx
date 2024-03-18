import { NavBar, Footer } from './components/index'
import { Outlet } from 'react-router-dom'
const Layout = () => {
    return (
        <div className='app'>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout