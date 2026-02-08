import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';

const BottomNavigationComponent = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation value={value} onChange={handleChange}>
            <BottomNavigationAction label="Home" />
            <BottomNavigationAction label="Favorites" />
            <BottomNavigationAction label="Profile" />
        </BottomNavigation>
    );
};

export default BottomNavigationComponent;