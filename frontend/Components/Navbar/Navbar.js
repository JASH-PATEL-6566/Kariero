import classes from './navbar.module.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Avatar from '@mui/material/Avatar';
import { useAuth } from '../../Firebase/Context/AuthContext';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router'
import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton } from '@mui/material/';

export default function Navbar() {
    const menuItem = ['Engineering', 'MBA', 'Abroad', 'Others'];
    const { currentUser } = useAuth();
    const router = useRouter();
    const { logout } = useAuth();

    return (
        <>
            <nav className={classes.nav}>
                <div className={classes.header} onClick={() => router.push('/')}>
                    <h1>
                        Kariero
                    </h1>
                </div>
                <ul className={classes.menu}>
                    {menuItem.map(item => {
                        return (
                            <li key={item}>
                                {item}
                                <KeyboardArrowDownIcon />
                            </li>
                        )
                    })}
                </ul>
                {!currentUser ?
                    <Stack className={classes.auth} spacing={2} direction="row">
                        <Button variant="text" onClick={() => {
                            router.push('/login')
                        }}>Login</Button>
                        <Button variant="contained" onClick={() => {
                            router.push('/signup')
                        }} style={{
                            backgroundColor: '#0D4C92'
                        }}>SignUp</Button>
                    </Stack>
                    :
                    <div className={classes.profile}>
                        <p>JASH PATEL</p>
                        <Avatar />
                        <IconButton style={{
                            backgroundColor: '#59C1BD',
                            borderRadius: '9px'
                        }} className={classes.divBtn} onClick={() => {
                            logout();
                            router.replace("/");
                        }
                        }><LogoutIcon className={classes.logoutBtn} /></IconButton>
                    </div>
                }
            </nav>
        </>
    )
}