import blogsArray from "./data.js";

const blogsEl = document.querySelector('.blogs');

let blogsHtml = "";

blogsArray.forEach(function (blog) {
    const { id, date, title, preview } = blog;
    blogsHtml += `
    <section class="blog">
        <div class="blog-img" data-id="${id}"></div>
        <p class="blog-date">${date}</p>
        <h1 class="blog-title">${title}</h1>
        <p class="blog-preview">${preview}</p>
    </section>
    `;
});
blogsEl.innerHTML += blogsHtml;

const blogImgEls = document.querySelectorAll('.blog-img');
console.log(blogImgEls);

blogImgEls.forEach(function (blogImgEl) {
    console.log(blogImgEl);
    blogImgEl.style.backgroundImage = `url('${blogsArray.find((blog) => `${blog.id}` === blogImgEl.dataset.id).img}')`;
    blogImgEl.style.backgroundSize = "cover";
    blogImgEl.style.backgroundPosition = "center";
})
