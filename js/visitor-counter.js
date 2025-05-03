// Visitor counter
let visitorCount = localStorage.getItem("visitorCount");

// If visitor count is not available in local storage
if (!visitorCount) {
    visitorCount = 1;
} else {
    visitorCount = parseInt(visitorCount) + 1;
}
localStorage.setItem("visitorCount", visitorCount);

document.getElementById("visitorCount").textContent = visitorCount;