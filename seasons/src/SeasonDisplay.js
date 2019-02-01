import React from 'react';


const seasonConfig = {            //created a 
    summer: {
        text: 'Lets hit the beach!',
        iconName: 'sun'
    },
    winter: {
        text: "Burr its cold!",
        icon: 'snowflake'
        }
    };

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
       return lat > 0 ? 'summer' : 'winter'; // usin the JS terneray operator.
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
    
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth()); //Date().getMonth() get the current month from the console. jan to DEc is 0 - 11.
    const {text, iconName} = seasonConfig[season]; // Assigning the values of seasonConfig to text and iconName.
    return (
        <div>
        <i className={`${iconName} icon`} /> 
        <h1>{text}</h1>
         <i className={`${iconName} icon`} />
        </div>
        
        );
};

export default SeasonDisplay;