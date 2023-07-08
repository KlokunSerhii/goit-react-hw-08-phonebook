import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';

function HomeViews() {
  return (
    <div
      style={{
        height: '90vh',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        fontWeight: 700,
        fontStyle: 'italic',
        color: '#4b0082',
        fontSize: 70,
      }}
    >
      <span
        style={{
          marginBottom: 50,
        }}
      >
        Hello, this is your PhoneBook
      </span>
      <ThreeCircles
        height="100"
        width="100"
        color="#4b0082"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  );
}

export default HomeViews;
