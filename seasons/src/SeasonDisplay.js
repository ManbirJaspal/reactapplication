import './SeasonDisplay.css'; //importing css file
import React from 'react';


const seasonConfig = {            //created a object that season
    summer: {
        text: 'Lets hit the beach!',
        iconName: 'sun'
    },
    winter: {
        text: "Burr its cold!",
        iconName: 'snowflake'
        }
    };

//determining if it is summer or winter using the lat coordinates.
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
       return lat > 0 ? 'summer' : 'winter'; // usin the JS terneray operator.
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
    
}

//displaying the SeasonDisplay component using jsx
const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth()); //Date().getMonth() get the current month from the console. jan to DEc is 0 - 11.
    const {text, iconName} = seasonConfig[season]; // Assigning the values of seasonConfig to text and iconName. they would be assigned in order.
    return (
        <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`} />  
        <h1>{text}</h1>
         <i className={`icon-right massive ${iconName} icon`} />
        </div>
        
        );
};

export default SeasonDisplay;