import React, { useMemo, useState } from 'react';
import makeData from './makeData';

const ShowUserDetailData = (props: any) => {
  const [sampleData, setSampleData] = useState(props.userDetailInfo);
    return (
      <div>
        <div className="userDetails">
          <div className="userPic"></div>
            <div className="details">
              <div className="row">
                <div className="userLabel">First Name</div>
                <div className="userValue">{sampleData['firstName']}</div>
              </div>
              <div className="row">
                <div className="userLabel">Last Name</div>
                <div className="userValue">{sampleData['lastName']}</div>
              </div>
              <div className="row">
                <div className="userLabel">Street Number/Name</div>
                <div className="userValue">{sampleData['street']}</div>
              </div>
              <div className="row">
                <div className="userLabel">City</div>
                <div className="userValue">{sampleData['city']}</div>
              </div>
              <div className="row">
                <div className="userLabel">Phone Number</div>
                  <div className="userValue">{sampleData['phone']}</div>
                </div>
                <div className="row">
                  <div className="userLabel">GPA</div>
                    <div className="userValue">{sampleData['gpa']}</div>
                  </div>
            </div>
        </div>
            <div className="backLink" onClick={() => props.showResults()}>Back</div>
      </div>
    );
};

export default ShowUserDetailData;