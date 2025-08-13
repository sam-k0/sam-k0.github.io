
let step = 0;
let score = 0;

document.addEventListener("DOMContentLoaded", function() {
    let content = randomContent();
    document.getElementById("captcha-image").src = content.image;
    document.getElementById("captcha-description").innerText = content.description;
});

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

        let content = randomContent();

        document.getElementById("captcha-image").src = content.image;
        document.getElementById("captcha-description").innerText = content.description;
    }
}

function randomContent() {
    const images = [
        "pool.png",
        "sprout.png",
        "stair.png",
        "tree.png",
        "office.png",
        "gallery.png",
        "duck.png",
        "corridor.png",
        "box.png"
    ];

    const descriptions = [
        "An indoor swimming pool with bright blue water, surrounded by sleek white walls and ceiling. The lighting is soft, giving a modern and minimalistic look.",
        "A small green plant sprouting from brown soil, bathed in natural light. It gives a sense of growth and freshness.",
        "A dimly lit, old hallway with wooden stairs on the left and a dark open doorway ahead. The atmosphere is eerie and slightly unsettling.",
        "A large tree with a thick trunk and widespread branches covered in green leaves, viewed from below with a bright background. It feels peaceful and natural.",
        "A sprawling, open-plan office with rows of cubicles. The orange dividers give a hint of vibrancy, but the overall space feels sterile and somewhat impersonal.",
        "A dimly lit art gallery stretches into the darkness, filled with mysterious paintings. The warm tones of the artwork create an intimate, yet slightly somber atmosphere.",
        "A cheerful yellow rubber duck, crowned with fluffy white foam, beams out at the viewer. It's playfully charming, evoking bath time memories and simple joy.",
        "An indoor swimming pool with bright blue water, surrounded by sleek white walls and ceiling. The lighting is soft, giving a modern and minimalistic look.",
        "A lonely black trash can sits stoically in a vast, rolling green field under a wide-open blue sky."
    ]

    let c = Math.floor(Math.random() * images.length);
    return {"image": "img/gallery/"+images[c], "description": descriptions[c]};
}
