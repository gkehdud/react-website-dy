import React from 'react'
import './footer.css';
// import Switch from '../home/Switch';
import { FormGroup, FormControlLabel, Switch, Typography } from '@material-ui/core';
import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

const Footer = () => {
    const AntSwitch = styled(Switch)(({ theme }) => ({
        width: 28,
        height: 16,
        padding: 0,
        display: 'flex',
        '&:active': {
            '& .MuiSwitch-thumb': {
                width: 15,
            },
            '& .MuiSwitch-switchBase.Mui-checked': {
                transform: 'translateX(9px)',
            },
        },
        '& .MuiSwitch-switchBase': {
            padding: 2,
            '&.Mui-checked': {
                transform: 'translateX(12px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    opacity: 1,
                    backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
                },
            },
        },
        '& .MuiSwitch-thumb': {
            boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
            width: 12,
            height: 12,
            borderRadius: 6,
            transition: theme.transitions.create(['width'], {
                duration: 200,
            }),
        },
        '& .MuiSwitch-track': {
            borderRadius: 16 / 2,
            opacity: 1,
            backgroundColor:
                theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
            boxSizing: 'border-box',
        },
    }));
    const [value, setValue] = React.useState(false);
    return (
        <footer className='footer'>
            <div className="footer__container container">
                <h1 className="footer__title">Doyoung</h1>
                {/* <ul className="footer__list">

                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#journeys" className="footer__link">Journey</a>
                    </li>

                    <li>
                        <a href="#post" className="footer__link">Post</a>
                    </li>

                </ul> */}

                <div className="footer__social">
                    <a href="https://www.instagram.com/doyoun_g" className="footer__social-link" target="_blank">
                        <i className="bx bxl-instagram"></i>
                    </a>

                    <a href="https://www.facebook.com/gkehdud" className="footer__social-link" target="_blank">
                        <i className="bx bxl-facebook"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/doyoung-ha-b64352238/" className="footer__social-link" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                    </a>

                    <a href="https://www.github.com/gkehdud" className="footer__social-link" target="_blank">
                        <i className="bx bxl-github"></i>
                    </a>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: "1.5rem"
                }}>
                    {/* <Switch
                        onColor="var(--section-color)"
                        isOn={value}
                        handleToggle={() => setValue(!value)}
                    /> */}

                    {/* <span className='footer__switch'>Public</span> */}

                    {/* <FormControlLabel className='footer__switch' control={<Switch color='default' />} label="Private" /> */}
                    {/* <FormGroup>
                        
                        <Stack direction="row" spacing={1} alignItems="center">
                            <Typography>Public</Typography>
                            <AntSwitch inputProps={{ 'aria-label': 'ant design' }} />
                            <Typography>Private</Typography>
                        </Stack>
                    </FormGroup> */}
                </div>
                <span className="footer__copy">
                    &#169; Doyoung ha. All rights reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer