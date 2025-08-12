function sendMail(event) {
    event.preventDefault(); // Prevent the default form submission
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    if (!name || !email) {
        alert("Please fill in all fields.");
        return;
    }

    const encoded = "aGVsbG9Ac2FtLWtvLmV1";
    const realEmail = atob(encoded);
    window.location.href = `mailto:${realEmail}?subject=Contact from ${encodeURIComponent(name)}&body=INFO: Email: ${encodeURIComponent(email)} Browser: ${encodeURIComponent(getBrowserName())} OS: ${encodeURIComponent(getOSName())}`;
}


function getBrowserName() {
    const ua = navigator.userAgent;

    if (ua.includes("Chrome") && !ua.includes("Edg") && !ua.includes("OPR")) {
        return "Google Chrome";
    } else if (ua.includes("Edg")) {
        return "Microsoft Edge";
    } else if (ua.includes("Firefox")) {
        return "Mozilla Firefox";
    } else if (ua.includes("Safari") && !ua.includes("Chrome")) {
        return "Apple Safari";
    } else if (ua.includes("OPR") || ua.includes("Opera")) {
        return "Opera";
    } else {
        return "";
    }
}

function getOSName() {
    const platform = navigator.platform;

    if (platform.startsWith("Win")) {
        return "Windows";
    } else if (platform.startsWith("Mac")) {
        return "macOS";
    } else if (platform.startsWith("Linux")) {
        return "Linux";
    } else if (/iPhone|iPad|iPod/.test(navigator.userAgent)) {
        return "iOS";
    } else if (/Android/.test(navigator.userAgent)) {
        return "Android";
    } else {
        return "Unknown OS";
    }
}