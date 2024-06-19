import { Component } from "../core/heropy";
import movieStore , {searchMovies} from '../store/movie' //상태,데이터 함수도 가지고 온다
export default class Search extends Component{
    render(){
        this.el.classList.add('search');
        this.el.innerHTML= /* html */
        `
            <input placeholder = "영화를 입력해보세요!" />
            <button class = "btn btn-primary">
                Search!
            </button> 
        `
        const inputEl = this.el.querySelector('input');
        inputEl.addEventListener('input', () => {
            //입력하면
            movieStore.state.searchText = inputEl.value
        })
        inputEl.addEventListener('Keydown', event => {
            if(event.key === 'Enter' && movieStore.state.searchText.trim()){
            searchMovies(1)
            }
        })
        const btnEl = this.el.querySelector('.btn');
        btnEl.addEventListener('click' , () => {
            if(movieStore.state.searchText.trim()){
                searchMovies(1)
            }
        })
    }
}