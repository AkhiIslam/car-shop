import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

import {
    BrowserRouter as Router,
    Switch, Route,
    Link,
    useRouteMatch
} from "react-router-dom"
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import MyOrder from '../MyOrder/MyOrder';
import AddServices from '../AddServices/AddServices';
import Review from '../Review/Review';
import ManageOrders from '../ManageOrders/ManageOrders';
import useAuth from '../../Hooks/useAuth';
import HomeDashboard from '../HomeDashboard/HomeDashboard';
import AdminRoute from '../AdminRoute/AdminRoute';
import Payment from '../Payment/Payment';

const drawerWidth = 200;

function Dashboard(props) {
    const { logout } = useAuth();
    const { admin } = useAuth()

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />

            <Link className="text-primary text-decoration-none d-block" to={`${url}`}><Button color="inherit">Dashboard</Button></Link>
            <Link className="text-primary text-decoration-none d-block" to="/home"><Button color="inherit">Home</Button></Link>
            <Link className="text-primary text-decoration-none d-block" to={`${url}/payment`}><Button color="inherit">Payment</Button></Link>
            <Link className="text-primary text-decoration-none d-block" to={`${url}/myOrders`}><Button color="inherit">My-Orders</Button></Link>
            <Link className="text-primary text-decoration-none d-block" to={`${url}/review`}><Button color="inherit">Review</Button></Link>
            {
                admin &&
                <Box>

                    <Link className="text-primary text-decoration-none d-block" to={`${url}/addService`}><Button color="inherit">AddService</Button></Link>
                    <Link className="text-primary text-decoration-none d-block" to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
                    <Link className="text-primary text-decoration-none d-block" to={`${url}/manageOrders`}><Button color="inherit">Manage-Orders</Button></Link>
                </Box>

            }
            <Button onClick={logout} className="text-dark ">Logout</Button>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>

                    <Route exact path={`${path}`}>
                        <HomeDashboard></HomeDashboard>
                    </Route>

                    <Route path={`${path}/myOrders`}>
                        <MyOrder></MyOrder>
                    </Route>

                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>

                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>

                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>

                    <AdminRoute path={`${path}/addService`}>
                        <AddServices></AddServices>
                    </AdminRoute>

                    <AdminRoute path={`${path}/manageOrders`}>
                        <ManageOrders></ManageOrders>
                    </AdminRoute>


                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
