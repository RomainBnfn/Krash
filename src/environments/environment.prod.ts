const firebaseConfig = {
    apiKey: "***",
    authDomain: "***",
    databaseURL: "***",
    projectId: "***",
    storageBucket: "***",
    messagingSenderId: "***",
    appId: "***",
};

export const environment = {
    production: true,
    useEmulators: false,
    firebase: {
        config: firebaseConfig,
    },
};
