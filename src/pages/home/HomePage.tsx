import {GenericPage} from "../GenericPage.tsx";
import {Box, Typography} from "@mui/joy";

export const HomePage = () => {
    return (
        <GenericPage>
            <Box sx={{
                my: 'auto',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center'
            }}>
                <div>
                    <Typography level={'h1'}>Hillel Trip Planner app</Typography>
                    <Typography level={'h2'}>Home Page</Typography>
                    <Typography level={'body-sm'}>Being developed...</Typography>
                </div>
            </Box>
        </GenericPage>
    );
};