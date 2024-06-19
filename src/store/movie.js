import { Store } from "../core/heropy";

const store = new Store({
    searchText : '',
    page: 1,
    pageMax: 1,
    movies: [],
    movie: {}, //상세정보
    loading: false,
    message: 'Search for the movie title'
})

export default store
export const searchMovies = async page => {
    store.state.loading =true
    store.state.page = page
    if(page === 1){
        store.state.movies = []
        store.state.message = ''
    }
    try{
        const res = await fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${store.state.searchText}&page=${page}`)
        const {Search, totalResults, Response, Error} = await res.json();
        if(Response === 'True'){
            store.state.movies = [
                ...store.state.movies,
                ...Search
            ]   
            store.state.pageMax = Math.ceil(Number(totalResults) / 10);
        } else{
            store.state.message = Error
        }
        //store.state.pageMax = 1
    }catch(error){
        console.log('에러 발생' , error)
    }
    finally{
        store.state.loading = false;   
    }
}

export const getMovieDetails = async id => {
    try{
        const res = await fetch(`https://omdbapi.com?apikey=7035c60c&i=${id}&plot=full`)
        store.state.movie = await res.json() //json으로 분석하고 기다린 다음에 movie 객체데이터에 할당해서 사용
    }
    catch(error){
        console.log('에러 발생' , error)
    }
}