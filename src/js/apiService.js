import refs from './refs.js'

const key = '18623547-5f493ca6e7211638496d8c77e';


export default {
  _search: '',
  getFetch(){
    let url = `https://pixabay.com/api/videos/?key=${key}&q=${this._search}`;
    return fetch(url).then(res => res.json())
  },

  get search(){
    return this._search
  },
  set search(newSearch){
    this._searchQuery = newSearch
  }

}

