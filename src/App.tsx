import { useState } from 'react'
import './App.css'
import {CustomButton} from "./components/Buttons.tsx";
import { Display } from "./components/Display.tsx";
import { Settings } from "./components/Settings.tsx";
import {Box, Container, createTheme, CssBaseline, ThemeProvider} from '@mui/material';
import { ButtonsContainerSX } from './components/ButtonsContainerSX.ts';
import {MaterialUISwitch} from "./components/Switch.tsx";
import {selectCount, selectMaxValue, selectMinValue} from "./modal/counter-selectors.ts";
import {useAppDispatch} from "../common/hooks/useAppDispatch.ts";
import {useAppSelector} from "../common/hooks/useAppSelector.ts";
import {decrement, increment, reset} from "./app/counterSlice.ts";

export type ThemeMode = 'dark' | 'light'

function App() {
    const [showSettings, setShowSettings] = useState(false);
    const [themeMode, setThemeMode] = useState<ThemeMode>('light')

    const count= useAppSelector(selectCount)
    const maxValue = useAppSelector(selectMaxValue);
    const minValue = useAppSelector(selectMinValue);

    const dispatch = useAppDispatch()

    const theme = createTheme({
        palette: {
            mode: themeMode,
            primary: {
                main: '#25aeda',
            },
            secondary: {
                main: '#4dd0ff',
            },
            background: {
                default: themeMode === 'light' ? '#e7e9f3' : '#1e1f26',
                paper: themeMode === 'light' ? '#ffffff' : '#2a2b32',
            },
            text: {
                primary: themeMode === 'light' ? '#000000' : '#ffffff',
            },
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        margin: '10px',
                    },
                },
            },
        },
    })
    const changeMode = () => {
        setThemeMode(themeMode === 'light' ? 'dark' : 'light')
    }


    const incrementCountHandler = () => {
        dispatch(increment())
    }
    const decrementCountHandler = () => {
        dispatch(decrement())
    }
    const resetCountHandler = () => {
        dispatch(reset())
    }


    const toggleView = () => {
        setShowSettings(!showSettings);
    };
    const handleCloseSettings = () => {
        setShowSettings(false);
    }
        return (

            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Container className={'container'}>
                    <MaterialUISwitch onChange={changeMode}/>
                    {showSettings ? (
                        <Settings onClose={handleCloseSettings}/>
                    ) : (
                        <Box>
                            <Container className={''}>
                                <Box className={'display'}>
                                    <Display />
                                </Box>

                                <Box sx={ButtonsContainerSX}>
                                    <CustomButton
                                        disabled={count >= maxValue}
                                        title={'inc'}
                                        onClick={incrementCountHandler}
                                    />
                                    <CustomButton
                                        disabled={count <= minValue}
                                        title={'dec'}
                                        onClick={decrementCountHandler}
                                    />
                                    <CustomButton

                                        title={'reset'}
                                        onClick={resetCountHandler}
                                    />
                                    <CustomButton
                                        title={'set'}
                                        onClick={toggleView}
                                    />
                                </Box>
                            </Container>

                        </Box>
                    )}
                </Container>
            </ThemeProvider>

        )
    }

export default App