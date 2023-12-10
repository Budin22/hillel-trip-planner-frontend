import {SiteHeader} from "../components/common/header/SiteHeader.tsx";
import {Box, Typography} from "@mui/joy";
import {GenericProps} from "../props/GenericProps.ts";

export const GenericPage: React.FC<GenericProps> = ({children}) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100dvh',
            width:
                'clamp(var(--Form-maxWidth), (var(--Collapsed-breakpoint) - 100vw) * 999, 100%)',
            maxWidth: '100%',
            px: 2,
        }}>
            <SiteHeader>
                Hillel Trip Planner
            </SiteHeader>

            {children}

            <Box component="footer" sx={{ py: 3 }}>
                <Typography level="body-xs" textAlign="center">
                    © Hillel IT School :: Java Pro Course :: {new Date().getFullYear()}
                </Typography>
            </Box>
        </Box>
    );
};