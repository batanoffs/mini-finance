import Backendless from 'backendless';

// Initialize Backendless with environment variables
export default function initializeBackendless() {
    // TODO - update for production
    Backendless.serverURL = import.meta.env.VITE_API_BASE_URL;
    Backendless.initApp(import.meta.env.VITE_APP_ID, import.meta.env.VITE_API_KEY);
};