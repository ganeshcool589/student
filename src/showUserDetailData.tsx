import React, { useMemo, useState } from 'react';
import makeData from './makeData';

const ShowUserDetailData = (props: any) => {
  const [sampleData, setSampleData] = useState(useMemo(() => makeData(1), []));
    return (
      <div>
        <div className="userDetails">
          <div className="userPic"></div>
            <div className="details">
              <div className="row">
                <div className="userLabel">First Name</div>
                <div className="userValue">{sampleData[0]['firstName']}</div>
              </div>
              <div className="row">
                <div className="userLabel">Last Name</div>
                <div className="userValue">{sampleData[0]['lastName']}</div>
              </div>
              <div className="row">
                <div className="userLabel">Street Number/Name</div>
                <div className="userValue">{sampleData[0]['street']}</div>
              </div>
              <div className="row">
                <div className="userLabel">City</div>
                <div className="userValue">{sampleData[0]['city']}</div>
              </div>
              <div className="row">
                <div className="userLabel">Phone Number</div>
                  <div className="userValue">{sampleData[0]['phone']}</div>
                </div>
                <div className="row">
                  <div className="userLabel">GPA</div>
                    <div className="userValue">{sampleData[0]['gpa']}</div>
                  </div>
            </div>
        </div>
            <div className="backLink" onClick={() => props.showResults()}>Back</div>
      </div>
    );
};

export default ShowUserDetailData;