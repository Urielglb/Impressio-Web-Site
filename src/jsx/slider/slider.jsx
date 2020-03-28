import React from 'react';

function cssClases(add,index=0){
  let sliderTextContent = document.querySelector('#slider-text');
  let img  = document.querySelector('#slider-img');
  if(add){
    sliderTextContent.classList.add('hide');
    img.classList.add('hide');
    let oldDot = document.querySelector('.selected');
    oldDot.classList.remove('selected');
  }else{
    sliderTextContent.classList.remove('hide');
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

class Slider extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        index : 0,
      };
    this.next = this.next.bind(this);
    this.changeIndex = this.changeIndex.bind(this);
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
        this.timer = setInterval(this.next,11000);
      }catch(err){
        return;
      }
      
    }

    next(){
      clearInterval(this.timer);
      cssClases(true);
      setTimeout(()=>{
        this.setState((state) => {
          if (state.index>=this.props.info.length-1) {
            return{index:0}
          } else {
            return{index:state.index+1}
          }
        });
        cssClases(false,this.state.index);
        },600);
      this.timer = setInterval(this.next,11000);
    }
  
    render(){
      return(
        <div className="slider">
          <div className="grid">
          <div className="text">
            <header id="slider-text">
                <h2 className="highlight">{this.props.info[this.state.index].title}</h2>
                <p>{this.props.info[this.state.index].text}</p>
            </header>
          </div>
          <div className="img">
            <img src={this.props.img} id="slider-img" alt = "serigrafía"></img>
          </div>
          </div>
          <div className="changer">
            <span className="dot selected" onClick={()=>{
              this.changeIndex(0);
            }}></span> 
             <span className="dot" onClick={()=>{
              this.changeIndex(1);
            }}></span>
             <span className="dot" onClick={()=>{
              this.changeIndex(2);
            }}></span>   
             <span className="dot" onClick={()=>{
              this.changeIndex(3);
            }}></span> 
          </div>
        </div>
      );
    }
  
  }

  export default Slider;