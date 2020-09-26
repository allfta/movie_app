import React from "react";
// import Potato from './Potato';
import PropTypes from "prop-types";

function Potato(props) {
  // console.log(props)
  // 이렇게 컴포넌트가 props를 받아서 처리할수 있다.
  // log 찍을때물론 props.fav 등 특정 props를 바로 쓸수도 있고
  // 자바스크립트 새버전 es6에선 props전체를 받아오는게 아니라
  // Potato({fav}) 형식으로 props의 특정prop만 받아올수도 있다
  return (
    <div>
      <h3>I love {props.name}!!</h3>
      <h4>{props.rating}/5</h4>
      <img src={props.image} alt={props.name} />
    </div>
  );
}

//Proptypes를 통해서 필요한 prop을 제대로 받고 쓰고 있는지 체크 (형식과 제대로 옴을 체크)
Potato.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

// App()에서 같은코드를 반복안하고 foodILike 라는 const를 만들고 그를 넘김으로서 코드를 다시 세분화
const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 2.2,
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 1,
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating: 3,
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 4.8,
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating: 2.2,
  },
];

function renderFood(each) {
  // console.log(each)

  // prop중에서 key prop은 react 인터널 prop으로 꼭필요
  return (
    <Potato
      key={each.id}
      name={each.name}
      image={each.image}
      rating={each.rating}
    />
  );
}

function App() {
  return (
    <div className="App">
      <h1>안녕</h1>
      {/* <Potato fav="kimchi" hehe={true} papa={["hello",1,2]}></Potato> */}

      {/* 그래서 app에서 다양한 다른 prop을 주면서 다시금 사용가능  */}
      {/* <Potato fav="kimchi"/>
      <Potato fav="라면"/>
      <Potato fav="떡볶이"/> */}

      {/* LV2 */}
      {/* JS에서 map 펑션은 해당 어레이의 each 아이템에 해당 펑션을 더한 리스트를 실행해줌 => 그냥리스트아이템.map=>{펑션적어주면됨 - 업무수행하고 return 해주면 새로운 array로 리턴} */}
      {/* 그리고 map(each)=> 에서 each는 꼭 each라 안적어도 되고 아무거나 적어도 각 리스트의 각 아이템을 말함 그리고 =>를 쓰면 리턴을 자동으로 하게됨*/}
      {/* RN에서 {}는 자바스크립다 */}
      {/* 즉 Potato를 리턴을 하면서 각각의 foodILike리스트의 item을 prop으로 potato에 전달하겠다는것 뭘로? props 이름 name으로 */}
      {/* {foodILike.map(each => <Potato name={each.name} image={each.image}/> )} */}

      {/* LV3 - 평션도 빼기 - 이럼 맵을 해주면서 여러가지 기능을 더 만들어 붙일수도! */}
      {/* 위처럼 하기보다 펑션으로 아예 뺄수도 있따. 그럼 해당 펑션은 각각의 elements 를 object로 받게됨 */}
      {/* 즉 이하는 map펑션을 실행을 시키는데 그걸 foodILike 각각에 그럼 그게 다시 renderfood를 실행을 시키고 그럼 renderFood에선 각각 받아온걸
포테이토를 실행시키는데 거기에다가 각가의 prop을 붙여서 */}
      {/* 즉 map펑션은 fooILike의 each 아이템을 받아와 arguement 로 renderFood로 보내는데, 사실 return은 list를 하게되는것, 실제렌더는
renderFood에서 리턴형식으로 Potao를 주게되니 거기서 해주고 */}
      {foodILike.map(renderFood)}
      {console.log(foodILike.map(renderFood))}
    </div>
  );
}

export default App;
