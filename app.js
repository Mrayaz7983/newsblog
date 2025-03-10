// const apiKey = "d090a2e2aee8477a969a115eee936dce"; 
// const newsContainer = document.getElementById("news-container");
// const searchInput = document.getElementById("search");
// const searchBtn = document.getElementById("search-btn");

// async function fetchNews(query = "technology") {
//     const url = `https://newsapi.org/v2/everything?q=${query}&language=en&sortBy=publishedAt&apiKey=${apiKey}`;

//     try {
//         const response = await fetch(url);
//         const data = await response.json();

//         if (data.status !== "ok") {
//             throw new Error("Failed to fetch news");
//         }

//         displayNews(data.articles);
//     } catch (error) {
//         console.error("Error fetching news:", error);
//         newsContainer.innerHTML = `<p class="text-red-500 text-center">Failed to fetch news. Check API key or internet connection.</p>`;
//     }
// }

// function displayNews(articles) {
//     newsContainer.innerHTML = "";
    
//     if (articles.length === 0) {
//         newsContainer.innerHTML = "<p class='text-center text-gray-600'>No news found.</p>";
//         return;
//     }

//     articles.forEach(article => {
//         const newsElement = document.createElement("div");
//         newsElement.classList.add(
//             "bg-white", "rounded-lg", "shadow-md", "p-4", "transition", "hover:shadow-lg"
//         );

//         newsElement.innerHTML = `
//             <img src="${article.urlToImage || 'https://via.placeholder.com/300'}" 
//                 alt="News Image" class="w-full h-48 object-cover rounded-md">
//             <h2 class="text-xl font-semibold mt-3">${article.title}</h2>
//             <p class="text-gray-700">${article.description || "No description available."}</p>
//             <a href="${article.url}" target="_blank" 
//                 class="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
//                 Read More
//             </a>
//         `;
//         newsContainer.appendChild(newsElement);
//     });
// }

// searchBtn.addEventListener("click", () => {
//     const query = searchInput.value.trim();
//     if (query) {
//         fetchNews(query);
//     } else {
//         fetchNews("technology");
//     }
// });

// fetchNews();



const apiKey = "d090a2e2aee8477a969a115eee936dce";
const newsContainer = document.getElementById("news-container");
const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("search-btn");
const navButtons = document.querySelectorAll(".nav-btn");

async function fetchNews(query = "technology") {
    const url = `https://newsapi.org/v2/everything?q=${query}&language=en&sortBy=publishedAt&apiKey=${apiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.status !== "ok") throw new Error("Failed to fetch news");
        displayNews(data.articles);
    } catch (error) {
        console.error("Error fetching news:", error);
        newsContainer.innerHTML = `<p class='text-red-500 text-center'>Failed to fetch news. Check API key or internet connection.</p>`;
    }
}

function displayNews(articles) {
    newsContainer.innerHTML = "";
    if (articles.length === 0) {
        newsContainer.innerHTML = "<p class='text-center text-gray-600'>No news found.</p>";
        return;
    }
    articles.forEach(article => {
        const newsElement = document.createElement("div");
        newsElement.classList.add("bg-white", "rounded-lg", "shadow-md", "p-4", "transition", "hover:shadow-lg");
        newsElement.innerHTML = `
            <img src="${article.urlToImage || 'https://via.placeholder.com/300'}" 
                alt="News Image" class="w-full h-48 object-cover rounded-md">
            <h2 class="text-xl font-semibold mt-3">${article.title}</h2>
            <p class="text-gray-700">${article.description || "No description available."}</p>
            <a href="${article.url}" target="_blank" 
                class="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Read More
            </a>
        `;
        newsContainer.appendChild(newsElement);
    });
}

searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();
    fetchNews(query || "technology");
});

navButtons.forEach(button => {
    button.addEventListener("click", () => {
        fetchNews(button.dataset.category);
    });
});

fetchNews();
