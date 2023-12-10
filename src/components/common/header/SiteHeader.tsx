import {Box, IconButton, Typography} from "@mui/joy";
import {SiteLogo} from "../../../assets/icons/SiteLogo.tsx";
import {GenericProps} from "../../../props/GenericProps.ts";

export const SiteHeader: React.FC<GenericProps> = ({children}) => {
    return (
        <Box
            component="header"
            sx={{
                py: 3,
                display: 'flex',
                alignItems: 'left',
                justifyContent: 'space-between',
            }}
        >
            <Box sx={{ gap: 2, display: 'flex', alignItems: 'center' }}>
                <IconButton variant="soft" color="primary" size="sm">
                    <SiteLogo/>
                </IconButton>
                <Typography level="title-lg">{children}</Typography>
            </Box>
        </Box>
    );
};