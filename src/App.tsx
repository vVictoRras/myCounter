import { useState, useEffect } from 'react'
import './App.css'
import {CustomButton} from "./components/Buttons.tsx";
import { Display } from "./components/Display.tsx";
import { Settings } from "./components/Settings.tsx";
import {Box, Container, createTheme, CssBaseline, ThemeProvider} from '@mui/material';
import { ButtonsContainerSX } from './components/ButtonsContainerSX.ts';
import {MaterialUISwitch} from "./components/Switch.tsx";

export type ThemeMode = 'dark' | 'light'

function App() {
    const [showSettings, setShowSettings] = useState(false);
    const [count, setCount] = useState(0);
    const [maxVal, setMaxVal] = useState(5);
    const [themeMode, setThemeMode] = useState<ThemeMode>('light')

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

    // Загрузка начальных значений из localStorage при монтировании
    useEffect(() => {
        const savedStartValue = Number(localStorage.getItem("startValue"));
        const savedMaxValue = Number(localStorage.getItem("maxValue"));

        if (!isNaN(savedStartValue)) {
            setCount(savedStartValue);
        }

        if (!isNaN(savedMaxValue)) {
            setMaxVal(savedMaxValue);
        }
    }, []);

    // Получение минимального значения
    const minValue = () => {
        const start = localStorage.getItem("startValue");
        return Number(start) || 0;
    }

    const incrementCountHandler = () => {
        setCount(prev => {
            const newCount = prev + 1;
            return newCount > maxVal ? prev : newCount; // Защита от превышения maxVal
        });
    }

    const resetCountHandler = () => {
        const start = minValue();
        setCount(start);
        // setCount(0);
        // setMaxVal(0)
    }

    const toggleView = () => {
        setShowSettings(!showSettings);
    };

    const handleCloseSettings = () => {
        setShowSettings(false);
        // После закрытия настроек обновляем значения из localStorage
        const savedStartValue = Number(localStorage.getItem("startValue"));
        const savedMaxValue = Number(localStorage.getItem("maxValue"));

        if (!isNaN(savedStartValue)) {
            setCount(savedStartValue);
        }

        if (!isNaN(savedMaxValue)) {
            setMaxVal(savedMaxValue);
        }
    };

    return (

            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container className={'container'}>
                    <MaterialUISwitch  onChange={changeMode} />
                {showSettings ? (
                    <Settings onClose={handleCloseSettings} />
                ) : (
                    <Box>
                        <Container className={''}>
                            <Box className={'display'}>
                                <Display count={count} maxValue={maxVal} />
                            </Box>

                            <Box sx={ButtonsContainerSX}>
                                <CustomButton
                                    disabled={count >= maxVal}
                                    title={'inc'}
                                    onClick={incrementCountHandler}
                                />
                                <CustomButton
                                    disabled={count === minValue()}
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