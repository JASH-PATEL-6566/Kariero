import classes from './signup.module.css';
import TextField from '@mui/material/TextField';
import { Button, Divider, Paper } from '@mui/material';
import Link from 'next/link';

export default function SignUp() {
    return (
        <>
            <div className={classes.login_container}>
                <Paper className={classes.mid} elevation={3} >
                    <h1>Kariero</h1>
                    <form>
                        <TextField
                            required
                            className={classes.input}
                            label="Enter UserName"
                        />
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
                        <Button className={classes.btn} variant="contained">signup</Button>
                    </form>
                    <p>Already have an account?<Link className={classes.link} href="/login">Log in</Link></p>
                    <Divider variant='middle' />
                </Paper>
            </div>
        </>
    )
}