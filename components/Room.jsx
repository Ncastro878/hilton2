import React from 'react'

function Room(props) {
    const {
            dropdownSelected, 
            roomChecked, 
            roomData,
            roomNumber, 
            roomsSelected
        } = props;
    const disabled = roomNumber > roomsSelected ? "disabled" : "";

    return (
      <div className={"room-container " + {disabled}}>
          Room {roomNumber}
          {
              roomNumber > 1 ?
              <input 
                type="checkbox" 
                id={roomNumber} 
                onChange={(evt) => roomChecked(evt, roomNumber)}
                checked={roomNumber > roomsSelected? false: true}
               />:''
          }
          <div className={"dropdown-container" + disabled}>
            <div className="input-container">
                <label>Adults</label>                
                <label>(18+)</label>
                <select 
                    disabled={disabled} 
                    onChange={(evt) => dropdownSelected(evt, roomNumber, "adults")}
                    value={roomData[roomNumber] !== undefined? roomData[roomNumber].adults : 1}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
            </div>
            <div className="input-container">
                <label>Children</label>
                <label>(0-17))</label>
                <select 
                    disabled={disabled} 
                    onChange={(evt) => dropdownSelected(evt, roomNumber, "children")}
                    value={roomData[roomNumber] !== undefined? roomData[roomNumber].children :0}
                >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
            </div>
          </div>

        <style global jsx>{`
            .room-container {
                display: inline-block;
                width: 150px;
                height: 140px;
                font-weight: bold;
                margin: 5px;
                padding: 3px;
                background-color: #E7E7E7;
                text-align: left;
            }
            .dropdown-container{
                background-color: white;
                height: 120px;
            }
            .input-container{
                display: inline-block;
                width: 74px;
            }
            .disabled{
                color: red;
            }
            label{
                font-size: 10px;
            }
      `}</style>
      </div>
    );
}

export default Room;