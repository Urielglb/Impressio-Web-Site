import React from 'react';
import {Link} from 'react-router-dom';

function cssClases(add,index=0){
  let img  = document.querySelector('#slider-img');
  if(add){
    img.classList.add('hide');
    let oldDot = document.querySelector('.selected');
    oldDot.classList.remove('selected');
  }else{
    img.classList.remove('hide');
    let dots = document.querySelectorAll('.dot');
    let wantedDot = dots[index];
    wantedDot.classList.add('selected');
  }
}

async function selectedExists() {
  let result = new Promise((resolve,reject)=>{
    let selected = document.querySelector('.selected');
    if (selected!=null) {
      resolve("done");
    }
    reject(new Error("Wait"));
  });
  return result;
}

const DotsGenerator = (props)=>{
  let dots = [];
  for (let i = 0; i < props.length; i++) {
    dots.push(<span className={i === 0 ? "dot selected" : "dot"} onClick={()=>{
      props.onClick(i);
    }}
    key={i}></span>);
    
  }
  return dots;
}

class Slider extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      index : 0,
    };
  this.changeIndex = this.changeIndex.bind(this);
  this.next = this.next.bind(this);
  }

  componentDidMount(){
    this.timer = setInterval(this.next,10000);
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  async changeIndex(wantedIndex){
    try{
      await selectedExists();
      clearInterval(this.timer);
      cssClases(true);
      setTimeout(()=>{
        this.setState((state) => {
          return{index:wantedIndex}
        });
      cssClases(false,this.state.index);
      },600);
      this.timer = setInterval(this.next,10000);
    }catch(err){
      return;
    }

  }

  next(){
    const actualIndex = this.state.index;
    const wantedIndex = actualIndex===this.props.imgs.length-1 ? 0: actualIndex+1 ;
    this.changeIndex(wantedIndex);
  }

  render(){
    return(
      <div className="slider">
        <div className="img">
          <Link to={this.props.imgs[this.state.index].link}>
            <img src={this.props.imgs[this.state.index].img} id="slider-img" alt = "serigrafía"></img>
          </Link>
        </div>
        <div className="changer">
          <DotsGenerator onClick={this.changeIndex} length={this.props.imgs.length}></DotsGenerator>
        </div>
      </div>
    );
  }
}
  export default Slider;