import React from 'react'
import Room from '../components/Room'
import _ from 'lodash'
import {roomInitData} from '../constants.js';

class App extends React.Component{
  constructor(props){
    super(props);
   
   this.state = {
      numOfRooms: 4,
      roomData: {
        1: {
          ...roomInitData
        }
      },
      roomsSelected: 1
    }
  }

  componentDidMount(){
    if(localStorage !== null && localStorage.roomData !== null){
      let retrievedRoomData = JSON.parse(localStorage.getItem("roomData"));
      let retrievedRoomsSelected = localStorage.roomsSelected;
      let newRoomData = {
        ...retrievedRoomData
      }
      this.setState({
        roomData: {
          ...retrievedRoomData
        },
        roomsSelected: retrievedRoomsSelected
      });
    }
  }

  dropdownSelected = (evt, roomNum, type) => {
    let roomNumToString = roomNum.toString();
    let newValue = {
      ...this.state.roomData[roomNumToString]
    }
    newValue[type] = parseInt(evt.target.value);
    let newRoomData = { ...this.state.roomData};
    newRoomData[roomNum] = {...newValue};
    this.setState({
      roomData: {
        ...newRoomData
      }
    });
  }

  handleSubmit = () => {
    let {roomData, roomsSelected} = this.state;
    localStorage.roomData = JSON.stringify(roomData);
    localStorage.roomsSelected = roomsSelected;
  }

  roomChecked = (evt, roomNum) => {
    const {checked} = evt.target;
    let {roomsSelected} = this.state;
    if(checked){
      let newRoomData = { ...this.state.roomData};
      for(var i = roomsSelected + 1; i <= roomNum; i++){
        var iToString = i.toString();
        newRoomData[iToString] = roomInitData;
      }
      this.setState({
        roomData: {
          ...newRoomData
        },
        roomsSelected: roomNum 
      });
    }else{
      let newRoomData = this.state.roomData;     
      for(var i = roomNum; i <= roomsSelected; i++){
        var iToString = i.toString();
        delete newRoomData[iToString];
      }
      this.setState({
        roomData: {
          ...newRoomData
        },
        roomsSelected: roomNum - 1
      });
    }
  }

  render () {
    const {numOfRooms, roomData, roomsSelected} = this.state;

    return (
      <div className="row">
        {
          _.times(numOfRooms, (i) => {
            return (
              <Room 
                key={i} 
                roomData={roomData}
                roomNumber={i+1} 
                roomsSelected={roomsSelected} 
                roomChecked={this.roomChecked}
                dropdownSelected={this.dropdownSelected}
              />
            );  
          })     
        }
        <div>
          <button onClick={() => this.handleSubmit()}>Submit</button>
        </div>
        
        <style global jsx>{`
          .row {
            font-family: Helvetica;
            font-size: 14px;
          }
          button{
            margin-top: 5px;
            margin-left: 5px;
          }
          
        `}</style>
      </div>
    );
  }

}

export default App;