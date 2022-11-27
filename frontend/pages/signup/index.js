import classes from './signup.module.css';
import TextField from '@mui/material/TextField';
import { Divider, Paper } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import Link from 'next/link';
import { useAuth } from '../../Firebase/Context/AuthContext';
import { useState } from 'react';
import { useRouter } from 'next/router'
import Head from 'next/head'

export default function SignUp() {
    const { signup } = useAuth();
    // const userRef = useRef();
    const [error, setError] = useState({
        emailErr: '',
        passErr: ''
    });

    const [data, setData] = useState({
        username: '',
        email: '',
        pass: ''
    })

    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const signUp = (e) => {
        e.preventDefault();

        // init
        setError({ emailErr: '', passErr: '' });
        setLoading(true);

        signup(data.email, data.pass)
            .then(() => {
                router.push('/login');
            })
            .catch(err => {
                console.log(err);
                switch (err.code) {
                    case 'auth/email-already-in-use':
                        setError({ ...error, emailErr: 'Email already in use !' })
                        break;
                    case 'auth/weak-password':
                        setError({ ...error, passErr: 'Length of password must be more than 6' })
                        break;
                    default:
                        setError({ ...error, passErr: 'Something went wrong.... Please try again' })
                }
                setData({ ...data, email: '', pass: '' })
            })
        setLoading(false);
    }

    const changeData = (field, value) => {
        setData({
            ...data,
            [field]: value
        })
    }

    return (
        <>
            <Head>
                <title>SignUp | Kariero</title>
            </Head>
            <div className={classes.login_container}>
                <Paper className={classes.mid} elevation={3} >
                    <h1>Kariero</h1>
                    <form>
                        <TextField
                            required
                            id='username'
                            value={data.username}
                            className={classes.input}
                            label="Enter UserName"
                            onChange={(e) => changeData(e.target.id, e.target.value)}
                        />
                        <TextField
                            id="email"
                            required
                            value={data.email}
                            error={error.emailErr !== '' ? true : false}
                            className={classes.input}
                            label="Your Email Address"
                            helperText={error.emailErr === "" ? "" : error.emailErr}
                            type="email"
                            onChange={(e) => changeData(e.target.id, e.target.value)}
                        />
                        <TextField
                            required
                            id="pass"
                            value={data.pass}
                            error={error.passErr !== '' ? true : false}
                            className={classes.input}
                            label="Your Password"
                            helperText={error.passErr === "" ? "Password must be contain 6 letters." : error.passErr}
                            onChange={(e) => changeData(e.target.id, e.target.value)}
                            type="password">
                        </TextField>
                        <LoadingButton onClick={signUp} type="submit" loading={loading} className={classes.btn} variant="contained">signup</LoadingButton>
                    </form>
                    <p>Already have an account?<Link className={classes.link} href="/login">Log in</Link></p>
                    <Divider variant='middle' />
                </Paper>
            </div>
        </>
    )
}