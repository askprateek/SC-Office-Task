import { EventEmitter } from 'events';

class Bardata extends EventEmitter{
  constructor() {
    super();
    this.max=10;
    this.min=0;
    this.data ={
      'Big Hero 6':10,
   };
    // this.data =[
    //   { x:'Big Hero 6', y:10 },
    // ];
  }
  addData(data){
    // console.log(data.x,data.y);
    if(this.data[data.x]){
      this.data[data.x]+=parseInt(data.y);
    }
    else{
      this.data[data.x]=parseInt(data.y);
    }
      console.log(this.data);
      this.emit('change');
  }
  getMax(){
    return this.max;
  }
  getData(){
    var chartFormat=[];
    var key = Object.keys(this.data)
    for (var i =0; i <key.length; i++){
      chartFormat.push({ x:key[i], y:this.data[key[i]] });
    }
    // console.log(chartFormat)
    return chartFormat;
  }
}

const bardata = new Bardata;
window.Bardata = bardata;
export default bardata;
