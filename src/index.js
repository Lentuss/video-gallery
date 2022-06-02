import { Notify } from 'notiflix';
import { searchVideo } from "./pixabay";

import './css/styles.css';

const form = document.querySelector("#search-form");
const input = document.querySelector("input");
const gallery = document.querySelector(".gallery");
const loadMoreBtn = document.querySelector(".load-more");
const backToTopBtn = document.querySelector(".back-to-top");

const myListBtn = document.querySelector(".myList");
const addBtn = document.querySelector(".addBtn");

let page = 1;
let query = "";

loadMoreBtn.classList.add("isHidden");

const createGallery = async () => {

    try {
        const data = await searchVideo(query)
        const res = data.results;

        if (res.length==0) {
            Notify.failure("Sorry, there are no movies matching your search query. Please try again.")
        }

        // else {
        //     checkQuantity(data);
        // }

        console.log(data);
        console.log(data.results.length);
        console.log(data.results);
       
        res.map(({ title, image, description, id }) => {
            gallery.insertAdjacentHTML("beforeend", createMarkup(title, image, description));
            const elId = id;
        })
    } catch (error) { Notify.failure("Oops") }
}

const createMarkup = (title, image, description) => 
                `<div class="card">
                    <div class="thumb">
                      <img src="${image}" alt="${title}" loading="lazy" height="100%"/>
                        </div>
                    <div class="info">
                        <p class="info-item">
                            <b>Title</b>
                            <span>${title}</span>
                        </p>
                        <p class="info-item">
                            <b>Year</b>
                            <span>${description}</span>
                        </p>
                        <button type="button" class="addBtn" data-set="add-to-list-button">Add to my list</button>
                    </div>
                </div>`;
                
// const checkQuantity = (data) => {  
//     let imageQuantity = data.hits.length;

//     if (imageQuantity >= 40) {           
//         loadMoreBtn.classList.remove("isHidden");

//     } else {
//         Notify.warning ("We're sorry, but you've reached the end of search results.");

//         loadMoreBtn.classList.add("isHidden");
//         backToTopBtn.classList.remove("isHidden");
//     }
// }

const checkQuery = () => {
    if (query == "") {
        Notify.failure('Please, enter key word to find');

    } else {
        createGallery();
    } 
}


const onSubmit = (e)=>{
    e.preventDefault()
    
    gallery.innerHTML = "";
    query = input.value;
    page = 1;
    
    checkQuery();
    
    backToTopBtn.classList.add("isHidden");
    loadMoreBtn.classList.add("isHidden");
    input.value = "";
}


const onLoadMore = () => {
    page += 1;
    lightbox.destroy();
    
    createGallery(query, page);
}

const addToList = (e) => {
    if (e.target.nodeName == "BUTTON") {
    console.log('wooooooooooooow');
}
  console.log("hello");
}

form.addEventListener("submit", onSubmit);
loadMoreBtn.addEventListener("click", onLoadMore);
gallery.addEventListener("click", addToList);


// backToTopBtn.addEventListener('click', function (e) {
//         e.preventDefault();
//         form.scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         });
//     });