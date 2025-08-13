
let step = 0;
let score = 0;


// if no permission, keep requesting it every 2 seconds
function requestNotificationPerms(){
    console.log("Requesting notification permission...");
    if (Notification.permission !== "granted") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                console.log("Notification permission granted.");

                setInterval(() => {
                    if (Notification.permission === "granted") {
                        console.log("Showing notification...");
                        showNotification();
                    }
                }, 2000);
            }
        });
    }
    else {
        console.log("Notification permission already granted.");
        showNotification();
    }
}

function showNotification() {
    const notification = new Notification("Duck", {
        body: "Duck (28) wants to talk to you.",
        icon: "img/gallery/duck.png"
    });

    notification.onclick = () => {
        window.focus();
        alert("Calling Duck (28)");
    };
}


function yes() {
    requestNotificationPerms();
    document.getElementById("captcha-message").innerText = "Thank you for your response.";
    step ++;
    score += step;
    evaluate();
}
    
function no() {
    requestNotificationPerms();
    document.getElementById("captcha-message").innerText = "Please try again.";
    step++;
    score -= step;
    evaluate();
}

function evaluate()
{
    console.log(score)
    if(score === 4)
    {
        document.getElementById("captcha-message").innerText = "Captcha completed successfully. Redirecting...";
        // redirect after 4 seconds
        setTimeout(function() {
            window.location.href = "real_index.html";
        }, 3000);
    }
    else if (step > 2)
    {
        document.getElementById("captcha-message").innerText = "Captcha failed. Try again in 10 minutes.";
    }
    else
    {
        document.getElementById("captcha-message").innerText = "Please try again.";
        document.getElementById("captcha-image").src = randomImage();
    }
}

function randomImage() {
    const images = [
        "box.png",
        "corridor.png",
        "duck.png",
        "gallery.png",
        "office.png",
        "pool.png",
        "sprout.png",
        "stair.png",
        "tree.png"
    ];
    return "img/gallery/"+images[Math.floor(Math.random() * images.length)];
}
