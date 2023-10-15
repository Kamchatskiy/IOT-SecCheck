import { Typography } from "@mui/material"
import RouterIcon from '@mui/icons-material/Router';

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    icon: {
        fontSize: 512,
        marginRight: 16,
    },
    text: {
        marginLeft: 300,
        fontSize: 50,
        flexGrow: 1,
    },
};

export const Motivation = () => {
    return (
        <div style={styles.container}>
            <RouterIcon style={styles.icon} />
            <Typography variant="h5" style={styles.text}>
                Is your IoT device no longer supported? Don't worry, we've got you covered! Our new service allows you to easily find out when support for your device will end and provides you with alternative open source firmware options. Keep your device up and running with our help. Try it now!
            </Typography>
        </div>
    );
};