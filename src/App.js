// import React, { Component } from 'react';
// import logo from './logo.svg';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;

import  React,{Component} from 'react';
import { connect,dispatch } from 'react-redux' // 引入connect
import { NavBar, Icon, Flex, WingBlank, WhiteSpace} from 'antd-mobile';
import './App.css';

class PersonChar extends Component {
  render() {
    return (
      <div>
        <NavBar leftContent="返回"
                mode="light"
                onLeftClick={() => console.log('onLeftClick')}
                rightContent={[
                  <Icon key="1" type="ellipsis" />,
                    ]}
        >
          个人维度
        </NavBar>
        
        <WingBlank>
          <WhiteSpace />
          <div className='title-img'>
              title
            </div>
        </WingBlank>
      </div>  
    )
  }
}

// 利用connect将组件与Redux绑定起来
// export default connect((personCharMd) => ({personCharMd}))(PersonChar)
export default PersonChar;