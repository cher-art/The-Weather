import apiService from './apiService.js'
import refs from './refs.js'
import template from '../template/template.hbs'
import debounce from 'lodash.debounce';
import * as basicLightbox from 'basiclightbox'
// import "../../node_modules/basiclightbox/dist/basicLightbox.min.css"

refs.galleryInput.addEventListener('input', 
  debounce(e => {
    e.preventDefault();
    apiService._search = e.target.value;
    refs.galleryList.innerHTML = '';
    console.log(apiService.search);
    rengeApi()
  },1000 ))
  
  function rengeApi(){
    apiService.getFetch().then((data) => render(data.hits))
}

function render(data){
  const item = template(data)
  refs.galleryList.insertAdjacentHTML('beforeend', item)
}


