import React from 'react';

import style from './list.module.scss';

const List = props => {

  if (!props.type) {
    return (
      <div>
        {props.children}
      </div>
    );
  } else if (props.type === 'unordered') {

    return (
      <ul className={style.bullets} >
        {props.items.map((item, index) => (
          <li key={index} >
            {item}
          </li>
        ))}
      </ul>
    );
  } else return (
    <ol className={style.numbers}>
      {props.items.map((item, index) => (
        <li key={index} >
          {item}
        </li>
      ))}
    </ol>
  );
};

export default List;