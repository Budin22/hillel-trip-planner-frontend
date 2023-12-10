import {Box, Button, Divider, FormControl, Input, Link, Stack, Typography} from "@mui/joy";
import FormLabel, { formLabelClasses } from '@mui/joy/FormLabel';
import {GoogleIcon} from "../../assets/icons/GoogleIcon.tsx";
import {useState} from "react";
import {GenericPage} from "../GenericPage.tsx";

interface LoginModel {
    email?: string
    password?: string
}

export const LoginPage = () => {
    const [loginModel, setLoginModel] = useState<LoginModel>({});

    const setEmail = (email: string) => setLoginModel({email: email, ...loginModel})
    const setPassword = (password: string) => setLoginModel({password: password, ...loginModel})

    const handleStartLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.info('Logging in', loginModel, e)
    }

    return (
        <GenericPage>
            <Box
                component="main"
                sx={{
                    my: 'auto',
                    py: 2,
                    pb: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    width: 400,
                    maxWidth: '100%',
                    mx: 'auto',
                    borderRadius: 'sm',
                    '& form': {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                    },
                    [`& .${formLabelClasses.asterisk}`]: {
                        visibility: 'hidden',
                    },
                }}
            >
                <Stack gap={4} sx={{ mb: 2 }}>
                    <Stack gap={1}>
                        <Typography level="h3">Sign in</Typography>
                        <Typography level="body-sm">
                            New to Hilell Trip Planner?{' '}
                            <Link href="/signup" level="title-sm">
                                Sign up!
                            </Link>
                        </Typography>
                    </Stack>
                    <Button
                        variant="soft"
                        fullWidth
                        startDecorator={<GoogleIcon />}
                    >
                        Continue with Google
                    </Button>
                </Stack>

                <Divider>
                    or
                </Divider>

                <Stack gap={4} sx={{ mt: 2 }}>
                    <form>
                        <FormControl required>
                            <FormLabel>Email</FormLabel>
                            <Input type="email" name="email" onChange={e => setEmail(e.target.value)} />
                        </FormControl>
                        <FormControl required>
                            <FormLabel>Password</FormLabel>
                            <Input type="password" name="password" onChange={e => setPassword(e.target.value)}  />
                        </FormControl>

                        <Stack gap={4} sx={{ mt: 2 }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                <Link level="title-sm" href="/forgot-password">
                                    Forgot your password?
                                </Link>
                            </Box>
                            <Button type="button" fullWidth onClick={handleStartLogin}>
                                Sign in
                            </Button>
                        </Stack>
                    </form>
                </Stack>
            </Box>
        </GenericPage>
    );
};