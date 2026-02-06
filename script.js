function searchService() {
    let query = document.getElementById("searchInput").value.toLowerCase();

    if (query === "") {
        alert("Please enter service and subject.\nExample: Drafting Family Law");
        return;
    }

    if (query.includes("drafting")) {
        alert("Drafting service selected.\nQuery: " + query);
    } 
    else if (query.includes("research")) {
        alert("Research service selected.\nQuery: " + query);
    } 
    else {
        alert("Please include keyword: Drafting or Research");
    }
}
function searchService() {
    let input = document.getElementById("searchInput").value.toLowerCase();

    // Basic search example
    if (input.includes("drafting")) {
        window.location.href = "pages/drafting.html";
    } else if (input.includes("research")) {
        window.location.href = "pages/research.html";
    } else {
        alert("No results found for: " + input);
    }
}