const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'cd1428ea14d4f3610189c3a015539988',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;