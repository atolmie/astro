import React from 'react';

function Sign(props) {
  return (
    <div className="sign-card">

      <div className="sign">
        <h3>{props.sign.name}</h3>
        <div className="sign-image">
          {props.sign.img && (
            <img src={`/assets/${props.sign.img}`} />
          )}
        </div>
        <p>
          <strong>Element</strong> {props.sign.element}
        </p>
        <p>
          <strong> Planetary Ruler:</strong> {props.sign.ruler}
        </p>
        <p>
          <strong>Body Part:</strong> {props.sign.body}
        </p>
        <p>
          <strong>Birthstone:</strong> {props.sign.stone}
        </p>

      </div>
    </div>
  );
}

export default Sign;
