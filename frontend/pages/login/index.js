import classes from './login.module.css';
import TextField from '@mui/material/TextField';
import { Button, Divider, Paper } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import G_img from '../../Image/G.png';
import Head from 'next/head';
import { useAuth } from '../../Firebase/Context/AuthContext';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
    const router = useRouter();
    const { login } = useAuth();
    const [data, setData] = useState({
        email: '',
        pass: ''
    })

    const [error, setError] = useState('');
    const [loading, setLoading] = useState('');

    const changeData = (field, value) => {
        setData({
            ...data,
            [field]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setError("");
        setLoading(true);
        login(data.email, data.pass)
            .then((res) => {
                if (res.user) {
                    router.replace('/');
                }
            })
            .catch((err) => {
                console.log(err);
                switch (err.code) {
                    case 'auth/wrong-password':
                        setError('Wrong Password.....Please try again')
                        break;
                    default:
                        setError('something went Wrong....Please try again')
                        break;
                }
                setLoading(false);
            })
    }

    return (
        <>
            <Head>
                <title>LogIn | Kariero</title>
            </Head>
            <div className={classes.login_container}>
                <Paper className={classes.mid} elevation={3}>
                    <h1>Kariero</h1>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            required
                            className={classes.input}
                            label="Your Email Address"
                            type="email"
                            id="email"
                            value={data.email}
                            onChange={(e) => changeData(e.target.id, e.target.value)}
                        />
                        <TextField
                            required
                            className={classes.input}
                            label="Your Password"
                            value={data.pass}
                            id="pass"
                            onChange={(e) => changeData(e.target.id, e.target.value)}
                            type="password">
                        </TextField>
                        <Button type='submit' className={classes.btn} variant="contained">Login</Button>
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
                            alt="Google"
                        />
                        <span>Continue With Google</span>
                    </Paper>
                </Paper>
            </div>
        </>
    )
}