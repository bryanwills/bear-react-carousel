import {createGlobalStyle, ThemeProvider} from 'styled-components/macro';
import {Container, GridThemeProvider} from 'bear-styled-grid';
import gridConfig from 'config/grid';
import theme from 'config/theme';
import {HashRouter, Route, Switch} from 'react-router-dom';

import React from 'react';
import HomeRoot from '../views/HomeRoot';


const App = () => {
    return (
        <GridThemeProvider gridTheme={gridConfig}>
            <ThemeProvider theme={theme}>
                <HashRouter>
                    <HomeRoot/>
                </HashRouter>
                <GlobalStyle/>
            </ThemeProvider>
        </GridThemeProvider>
    );
};

export default App;


const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: ${props => props.theme.primaryColor};
  }
`;
