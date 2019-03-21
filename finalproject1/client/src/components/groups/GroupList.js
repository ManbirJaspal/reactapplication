import React from 'react';
import GroupItem from './GroupItem'

const GroupList = ({ groups }) => {
const renderedList = groups.map((group) => {
        return <GroupItem
                  name={group.name}
                  description={group.description}
              />;
    });

    return <div className="ui relaxed divided list">{renderedList}</div>;
}

export default GroupList;
