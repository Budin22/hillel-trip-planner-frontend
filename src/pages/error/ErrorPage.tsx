import {GenericPage} from "../GenericPage.tsx";
import {Box, Link, Typography} from "@mui/joy";

export const ErrorPage = () => {
    return (
        <GenericPage>
            <Box sx={{
                my: 'auto',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center'
            }}>
                <div>
                    <Typography level={'h1'}>Error Page</Typography>
                    <Typography level={'body-sm'}>Something went wrong</Typography>
                    <Link href={'/home'}>Return to home page</Link>
                </div>
            </Box>
        </GenericPage>
    );
};