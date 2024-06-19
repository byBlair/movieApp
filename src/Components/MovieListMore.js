import { Component } from "../core/heropy";
import movieStore, {searchMovies} from '../store/movie'

export default class MovieListMore extends Component{
    constructor() {
        super({
            tagName: 'button'
        })
        movieStore.subscribe('pageMax',() => {
            const {page, pageMax} = movieStore.state // 구조분해할당으로 꺼내준다
            pageMax > page 
            ? this.el.classList.remove('hide') 
            : this.el.classList.add('hide')
        })
    }
    render(){
        this.el.classList.add('btn','view-more','hide')
        this.el.textContent = '더보기'

        this.el.addEventListener('click', async () => {
            this.el.classList.add('hide');
            await searchMovies(movieStore.state.page + 1)
        })
    }
}