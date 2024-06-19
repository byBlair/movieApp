import { Component } from "../core/heropy";

export default class Headline extends Component{
    render(){
        this.el.classList.add('headline')
        this.el.innerHTML = /* HTML */
        `   
            <h1>
                <span> 안녕하세요</span> <br>
                MovieFinder <br>
                입니다
            </h1>
            <p>
                MovieFinder는 당신이 원하는 영화를 빠르고 쉽게 찾을 수 있도록 도와주는 서비스입니다. 최신 영화 정보부터 클래식 영화까지, 
                광범위한 데이터베이스를 통해 필요한 정보를 손쉽게 검색하고 즐길 수 있습니다. 사용자 친화적인 인터페이스와 정확한 검색 결과로 영화 감상의 즐거움을 더해드립니다. 
                지금 바로 MovieFinder와 함께 원하는 영화를 찾아보세요!
            </p>
        `
    }
}