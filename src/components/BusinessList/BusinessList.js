import React, { Component } from 'react';

import './BusinessList.css';

export class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
      {this.prop.businesses.map(business => {
        return <Business business={business} />;
      })}
      </div>
    )
  }
};
