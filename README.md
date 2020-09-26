# movie-app 

노마드코드 강의 https://nomadcoders.co/react-fundamentals/lectures/1546
활용하여 react native의 기초를 배운다


1. src 폴더에는 App.js 와 injex.js 만 남기고 app.js 에서 리턴되는 기초 div만 남긴다 ( app.js 에서 리턴하는게 public 폴더의 div root 로 다이나믹하게 html 로 들어감) => 그 메커니즘이 index.js 에 나타남.  다이나믹이란 html 파일에 다 때려넣는게 아니라 index.js 에서 넣어줄 엘리먼트와 대상엘리먼트(public) 을 컨트럴 해주면서 다이나믹하게 그려서 훨씬 빠르다!!! 오!!!  - 컴포넌트화가 잘 되어있다 
ReactDOM.render(
  <React.StrictMode>
    <App />   
    1-1. 즉 렌더하는데 그게 app.js 고 이걸 "컴포넌트"라고 부른다 -> 컴포는트는 기본적으로 JS 펑션이다. app.js 에서 보듯
    1-2. 그리고 여기서 보듯 APP컴포넌트를 <>와 / 로 묶어주어 html 취급화하는데 이조합을 jsx라 한다. (리엑트에서 유일한 개념)
    1-3. 새로운 컴포넌트를 src폴더에 만들때마다 해당 컴포넌트파일에서 import React from "react"; 해주고
    1-4. 펑션과 컴포넌트는 처음글자는 항상 대문자.  항상 컴포넌트 끝에는 export 해주고
    1-5. index.js 에서는 컴포넌트 임포트 해주고
    1-6. 그리고 RN에서는 오직 1개의 컴포넌트만 렌더해서 다른 컴포넌트를 붙이고 싶다면 index.js 에서 랜더하는 컴포넌트에 붙인다
  </React.StrictMode>,
  document.getElementById('root')  퍼블릭의 인덱스에서 root라는엘레먼트를 찾아서 거기다가 렌더한다는것
);

2.  1-6처럼 컴포넌트를 나눌수 있지만, 물론 하나의 App.js 안에 여러 펑션을 쓸수도 있따
    2-1. 멋진게 하나의 컴포넌트에서 다른 컴포넌트 불러올때 argument 도 추가가능. 그걸 property 라 부르고 마음대로 이름가능. 불리언이든 리스트던 어떤 형태도 가능

3. propoery (아규먼트) 의 type형 체크 - npm i prop-types  즉 내가 받는 props가 내가 원하는 props인지 확인해주는 툴. 


<기타>
1. ./  는 같은 디렉토리를 말함
2. 내가 설치한 npm package는 package.json 에서 볼수 있음 (dependency)  그럼 임포트해서 쓸수 있음