import React from "react";
import styled from '@emotion/styled';
import Tabs from './Tabs';

const Tab1 = styled.div`
  padding: 20px;
  background-color: #fee;
`;

const Tab2 = styled.div`
  padding: 20px;
`;

function TabSet() {
  return (
    <Tabs
      activeTab={{
        id: "home"
      }}
    >
      <Tabs.Tab id="home" title="Home">
        <Tab1>This is the text content for tab 1 asdfas dfasd fasd fasd fasd fasdf asdf asdf WERTWERTWERTWERT</Tab1>
      </Tabs.Tab>
      <Tabs.Tab id="deuce" title="Tab Too">
        <Tab2>This is tab 2 with <b>BOLD TEXT</b></Tab2>
      </Tabs.Tab>
      <Tabs.Tab id="moar" title="Moar">
        <Tab2>This is teh tird tab 333 wid <b>MOAR BOLD TEXT!!!</b></Tab2>
      </Tabs.Tab>
      <Tabs.Tab id="hello" title="Hello Cube">
        <Tab2>
          <div id='hello-cube-wrapper'></div>
        </Tab2>
      </Tabs.Tab>
    </Tabs>
  );
}

export default TabSet;
