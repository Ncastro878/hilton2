import { shallow, configure } from 'enzyme'
import React from 'react'
import expect from 'expect'
import App from '../pages/index.js'
import Adapter from 'enzyme-adapter-react-16';
import Room from '../components/Room'
import roomInitData from '../constants';

configure({ adapter: new Adapter() });

global.localStorage = null; 

describe('Enzyme tests: <App />', () => {
  it('<App /> should render', () => {
    const app = shallow(<App />)
    expect(app.find('.row').length).toEqual(1);
  }) 

  it('Should contain a button', () =>{
    const app = shallow(<App />)
    expect(app.find('button').length).toEqual(1);
  }) 
})

describe('Enzyme tests: <Room />', ( )=>{
    it('<Room/> should render', () => {
        let props = {
          numOfRooms: 4,
          roomData: {
            1: {
              ...roomInitData
            }
          },
          roomsSelected: 1
        };
        const room = shallow(<Room {...props}/>);   
        expect(room.find(".room-container").length).toEqual(1);
    });
});