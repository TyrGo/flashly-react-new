import Stack from '@mui/material/Stack';
import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
    return (
        <Stack>
            <Outlet />
        </Stack>
    );
};
