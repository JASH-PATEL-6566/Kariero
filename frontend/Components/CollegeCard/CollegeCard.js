import classes from './card.module.css';
import Image from 'next/image'
import img from '../../Image/G.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import IconButton from '@mui/material/IconButton';

export default function CollegeCard() {
    return (
        <div className={classes.card}>
            <div className={classes.header}>
                <Image
                    height={40}
                    src={img}
                    property='performance'
                    alt='logo'
                    className={classes.image}
                />
                <div className={classes.header_text}>
                    <h3>SSN College of Engineering</h3>
                    <div className={classes.location}>
                        <LocationOnIcon className={classes.loc_logo} />
                        Mumbai
                    </div>
                </div>
            </div>
            <div className={classes.main}>
                <div className={classes.rating}>
                    <span>Rating</span>
                    <h3>
                        4.0
                        <StarIcon className={classes.star} />
                    </h3>
                </div>
                <div className={classes.fees}>
                    <span>Fees</span>
                    <h3>1.18 L</h3>
                </div>
            </div>
            <div className={classes.btn_con}>
                <IconButton color='info'>
                    <FavoriteBorderIcon />
                </IconButton>
                <Button variant="outlined" color='info'>
                    <FileDownloadOutlinedIcon />
                    Brochure
                </Button>
            </div>
        </div>
    )
}