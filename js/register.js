/* set up for the service worker */
// if the service worker is something the browser supports,
// then the browser should register the sw.js file
if ("serviceWorker" in navigator) {
    navigator.serviceWorker
    .register("/sw.js")
    .then(reg => {
        console.log("Service worker registration successful: " + reg.scope);
    })
    .catch(error => {
        console.log("Registration failed: " + error);
    });
}