import React from 'react';

const GroupItem = ({name, description}) => {
  return(
      <div className="ui item">
      <div className="item">
      <div className="content">
      <div className="header"><h1>{name}</h1></div>
      <div className="meta">
        <span>Description</span>
        </div>
        <div className="description">
          <p>{description}</p>
        </div>
      </div>
      </div>
      </div>
      );
};

export default GroupItem;
