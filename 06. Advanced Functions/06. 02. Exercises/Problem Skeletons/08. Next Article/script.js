function getArticleGenerator(articles) {
   
    return function () {
        if (!articles.length) { return; }
        let articleContent = articles.shift();
        const newArticle = document.createElement('article');
        newArticle.textContent = articleContent;

        document.getElementById('content').appendChild(newArticle);
        return getArticleGenerator(articles);
    };
}
