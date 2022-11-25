import classes from './login.module.css';
import TextField from '@mui/material/TextField';
import { Button, Divider, Paper } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import G_img from '../../Image/G.png';

export default function Login() {
    return (
        <>
            <Head>
                <title>LogIn | Kariero</title>
            </Head>
            <div className={classes.login_container}>
                <Paper className={classes.mid} elevation={3}>
                    <h1>Kariero</h1>
                    <form>
                        <TextField
                            required
                            className={classes.input}
                            label="Your Email Address"
                            type="email"
                        />
                        <TextField
                            required
                            className={classes.input}
                            label="Your Password"
                            type="password">
                        </TextField>
                        <Button className={classes.btn} variant="contained">Login</Button>
                    </form>
                    <Link href="/forgot-password" className={classes.link}>Forgot Password?</Link>
                    <p>Don't have an account? <Link className={classes.link} href="/signup">Sign Up</Link></p>
                    <Divider variant='middle' />
                    <Paper className={classes.other_opption} variant="outlined" >
                        <Image
                            src={G_img}
                            height={30}
                            width={30}
                            priority='performance'
                        />
                        <span>Continue With Google</span>
                    </Paper>
                </Paper>
            </div>
        </>
    )
}