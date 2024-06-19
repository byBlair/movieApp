import { Component } from "../core/heropy";
import Headline from "../Components/Headline";
import Search from "../Components/Search";
import MovieList from "../Components/MovieList";
import MovieListMore from '../Components/MovieListMore';

export default class Home extends Component{
    render() {
        const headline = new Headline().el
        const search = new Search().el
        const movieList = new MovieList().el
        const movieListMore = new MovieListMore().el

        this.el.classList.add('container')
        this.el.append(
            headline,
            search,
            movieList,
            movieListMore
        )
    } 
}