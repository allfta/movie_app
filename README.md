# movie-app 

노마드코드 강의 https://nomadcoders.co/react-fundamentals/lectures/1546
활용하여 react native의 기초를 배운다


1. src 폴더에는 App.js 와 injex.js 만 남기고 app.js 에서 리턴되는 기초 div만 남긴다 ( app.js 에서 리턴하는게 public 폴더의 div root 로 다이나믹하게 html 로 들어감) => 그 메커니즘이 index.js 에 나타남.  다이나믹이란 html 파일에 다 때려넣는게 아니라 index.js 에서 넣어줄 엘리먼트와 대상엘리먼트(public) 을 컨트럴 해주면서 다이나믹하게 그려서 훨씬 빠르다!!! 오!!!  - 컴포넌트화가 잘 되어있다 
ReactDOM.render(
  <React.StrictMode>
    <App />   즉 렌더하는데 그게 app.js 고 
  </React.StrictMode>,
  document.getElementById('root')  퍼블릭의 인덱스에서 root라는엘레먼트를 찾아서 거기다가 렌더한다는것
);

2. 

