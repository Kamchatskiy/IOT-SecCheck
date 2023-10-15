import React, { useState } from 'react';
import { TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export const Check = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [devices, setDevices] = useState([]);

    const handleSearch = () => {
        setDevices([
            { name: 'Device 1', releaseDate: '01/01/2020', warrantyExpiration: '01/01/2022', serialNumber: '12345' },
            { name: 'Device 2', releaseDate: '01/01/2021', warrantyExpiration: '01/01/2023', serialNumber: '67890' },
            { name: 'Device 3', releaseDate: '01/01/2019', warrantyExpiration: '01/01/2021', serialNumber: '24680' },
        ]);
    };

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100vh',
            marginTop: 0,
        },
        input: {
            margin: '10px',
            width: '300px',
            fontSize: '20px',
        },
        button: {
            margin: '10px',
            width: '150px',
            fontSize: '20px',
        },
        tableContainer: {
            border: '1px solid #66b8fb',
            borderRadius: '4px',
            overflow: 'hidden',
        },
        tableCell: {
            border: '1px solid #66b8fb',
        },
    };

    return (
        <div style={styles.container}>
            <TextField
                label="Enter your device name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={styles.input}
            />
            <Button variant="contained" onClick={handleSearch} style={styles.button}>Search</Button>
            {devices.length > 0 && (
                <TableContainer component={Paper} style={styles.tableContainer}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell style={styles.tableCell}>Device Name</TableCell>
                                <TableCell style={styles.tableCell}>Release Date</TableCell>
                                <TableCell style={styles.tableCell}>Warranty Expiration</TableCell>
                                <TableCell style={styles.tableCell}>Serial Number</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {devices.map((device) => (
                                <TableRow key={device.name}>
                                    <TableCell style={styles.tableCell}>{device.name}</TableCell>
                                    <TableCell style={styles.tableCell}>{device.releaseDate}</TableCell>
                                    <TableCell style={styles.tableCell}>{device.warrantyExpiration}</TableCell>
                                    <TableCell style={styles.tableCell}>{device.serialNumber}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </div>
    );
};