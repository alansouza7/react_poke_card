import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import AppContext from './context/context.jsx';
import DeckContext from './context/deckContext.jsx';
const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
    <AppContext>
    <DeckContext>
    <App />
    <ReactQueryDevtools />
    </DeckContext>
    </AppContext>
    </QueryClientProvider>
)
