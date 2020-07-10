import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import ShowUserData from "./showUserData";
import ShowUserDetailData from "./showUserDetailData";
import UserForm from "./UserForm";
import { clearAsyncError } from "redux-form";

export interface IUser {
  firstName: string;
  lastName: string;
}

const styles = {
  fontFamily: "sans-serif",
  // textAlign: "left"
};

function App() {

  const [userData, setUserData] = useState({});
  const [page, setPage] = useState('form');
  const [userDetailInfo, setUserDetailInfo] = useState({});

  const showResults = (values: any) => {
    setUserData(values);
    setPage('userInfo');
  }

  const showUserDetails = (user: any) => {
    setPage('userDetails');
    setUserDetailInfo(user);
  }

  return(
  <Provider store={store}>
    <div className="studentPanel">
        {page === 'form' &&
          <div>
            <h3 className="block">Student Form</h3>
            <UserForm onSubmit={showResults} />
          </div>
        }
        {page === 'userInfo' &&
          <div>
            <h3 className="block">Student Details</h3>
            <ShowUserData userData={userData} showUserDetails={showUserDetails} showForm={() => setPage('form')} />
          </div>
        }
        {page === 'userDetails' &&
          <div>
            <h3 className="block">Student Detailed Info</h3>
            <ShowUserDetailData userDetailInfo={userDetailInfo} showResults={showResults}/>
          </div>
        }
    </div>
    </Provider>
  )
}

export default App;
