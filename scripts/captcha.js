
let step = 0;
let score = 0;

function yes() {
    document.getElementById("captcha-message").innerText = "Thank you for your response.";
    step ++;
    score += step;
    evaluate();
}
    
function no() {
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
