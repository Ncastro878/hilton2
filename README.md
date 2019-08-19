This is the project for Assessment 2.

This was very enjoyable, especially since I've been stuck on java projects for over a month.
Anyways, this project appeared far easier initially, but turned into the kinda project that was
prime for bugs if you didn't keep track of your state management and handle your callbacks properly.

Compromises: To get up and running styling-wise with NextJS I used the provided <style jsx> element to 
provide the styling as I went along. I prefer using SASS plugins or even an import .css stylesheet with hot-reloading,
but due bug-fixing I devoted more time to functionality over style configuration in Next & thus stuck
with the <style jsx> element to save time; no doubt it's inline styling's less ugly cousin. 

State Management: Thus, because one of the requriement was Next.js I opted to play it safe and stick
with React's out-of-the-box state management, such as props and Class component's state, rather than
getting too fancy with Redux and bogging myself down with configuration. React hooks were also tempting but I 
decided to stay with what has been faithful: props, state, & lifecycle methods.
 
Explanations: 
For this feature I felt this could be built with 2 main components: the App component that would act as the container and
as the main housing for state, and the Room component which would represent each room. In order to make the app scalable, that 
is, to add as many rooms as desired I created a piece of state called "numOfRooms". Setting that to 100 would create 100 rooms.
The other 2 pieces of state are "roomsSelected" which signifies the number of rooms that are enabled( corresponding to the highest
numbered room selected), and "roomData" which is an object that maintains the dropdown-info for each room(the # of adults and children).

The Room components receives all those pieces of states as props in order to determine whether each one is disabled or enabled 
as well as to figure out its state (# of adults & children). In additiont they also receive 2 callback functions for user events
such as checking of the input box or selecting from the dropdowns. Those callbacks update the state housed in < App /> and the
updated state is passed back down to the <Room/> components to render them justly.

The callbacks function by comparing the selected/updated room to the current number of rooms enabled("state.roomsSelected"), and 
enabling or disabling the room + its adjacents based on whether it is more or less than the current number of rooms selected and
whether its checkbox was un/ticked. The accompanying room info is then updated(# of adults/children) or removed.

Retaining State: In order to retain state after reloads localstorage was used when the Submit button is clicked to save the 
current state of the rooms in a json string within localstorage. After the stringified data is saved, a page reload is safe.
Upon reload, in order to safely override the constructor's set-state, we do a conditional check to see if localstorage contains our
key for our roomData, and if so we fetch it, parse it, and setState of w/ our roomData, which will then be passed from < App /> to the children < Room /> components to populate and render themselves accordingly.

#Directions:

-pull the project

-run "npm run build"

-run "npm run start"

-navigate to "localhost:3000/"

-play with the app.
