import SimpleLightbox from "simplelightbox";
import Notiflix, { Notify } from 'notiflix';
import axios from "axios";
import { searchQuery } from "./pixabay";

import "simplelightbox/dist/simple-lightbox.min.css";
import './css/styles.css';

const form = document.querySelector("#search-form");
const input = document.querySelector("input[searchQuery]");
const submitBtn = document.querySelector("button[submit]");
const gallery = document.querySelector(".gallery");
const loadMoreBtn = document.querySelector(".load-more");

console.log("hello");