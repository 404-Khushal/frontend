<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>20BEC0215</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>BFHL Frontend</h1>
    <textarea id="jsonInput" placeholder='Enter JSON like { "data": ["A", "1", "B"] }'></textarea>
    <button onclick="submitData()">Submit</button>
    
    <select id="filterOptions" onchange="filterResponse()">
        <option value="all">Show All</option>
        <option value="alphabets">Alphabets</option>
        <option value="numbers">Numbers</option>
        <option value="highest_alphabet">Highest Alphabet</option>
    </select>
    
    <div id="response"></div>
    
    <script src="script.js"></script>
</body>
</html>

/* styles.css */
body { font-family: Arial, sans-serif; text-align: center; }
textarea { width: 300px; height: 100px; }
button, select { margin: 10px; padding: 10px; }

// script.js
async function submitData() {
    const input = document.getElementById("jsonInput").value;
    try {
        const response = await fetch("bfhl-git-main-khushals-projects-322ac39c.vercel.app", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: input
        });
        const data = await response.json();
        localStorage.setItem("apiResponse", JSON.stringify(data));
        filterResponse();
    } catch (error) {
        alert("Error submitting data");
    }
}

function filterResponse() {
    const responseDiv = document.getElementById("response");
    const data = JSON.parse(localStorage.getItem("apiResponse")) || {};
    const filter = document.getElementById("filterOptions").value;
    responseDiv.innerHTML = filter === "all" ? JSON.stringify(data, null, 2) : JSON.stringify(data[filter] || []);
}
