import { EventEmitter } from 'events';

class Bardata extends EventEmitter{
  constructor() {
    super();
    this.data =
      [
        {x: 'SomethingA', y: 10},
        {x: 'SomethingB', y: 4},
        {x: 'SomethingC', y: 3}
      ];
  }
  addData(data){
      this.data.push({
        x: data.text,
        y: data.value
      });

      this.emit('change');
  }

  getData(){
    return this.data;
  }
}

const bardata = new Bardata;
window.Bardata = bardata;
export default bardata;
