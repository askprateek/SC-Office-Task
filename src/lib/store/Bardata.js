import { EventEmitter } from 'events';

class Bardata extends EventEmitter{
  constructor() {
    super();
    this.max=10;
    this.min=0;
    this.data =[ {x:'Big Hero 6',y:10}, ];
  }
  addData(data){
      this.data.push({
        x: data.x,
        y: data.y
      });
      if (this.max < data.value){
        this.max= data.value;
      }

      this.emit('change');
  }
  getMax(){
    return this.max;
  }
  getData(){
    return this.data;
  }
}

const bardata = new Bardata;
window.Bardata = bardata;
export default bardata;
