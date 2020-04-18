import React, { Component } from "react";
import styled from '@emotion/styled';

import Tab from "./Tab";

const ListTabs = styled.ul`
  padding-left: 0;
  list-style: none;
  margin: 0;
`;

const TabTitleItem = styled('li')`
    background-color: ${props => props.isActiveTab ? '#c1ff87' : 'transparent'};
    display: inline-block;
    paddingRight: 5;
    paddingLeft: 5;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    border-top: 1px solid #cce0cc;
    border-left: 1px solid #cce0cc;
    border-right: 1px solid #cce0cc;
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    padding: 16px 30px;
    cursor: pointer;
    opacity: ${props => props.isActiveTab ? 1.0 : 0.5};
    :hover: {
      opacity: 1
    };
`;
// props => {
//   return (
//     props.isActiveTab && {
//       transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
//       cursor: "default",
//       opacity: 1
//     }
//   );
// }

const ActiveTabBorder = styled.div`
    height: 4;
    background-color: #0088dd;
    position: absolute;
    bottom: 0;
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    will-change: left, width;
`;

// props => {
//   return (
//     props.activeTabElement && {
//       width: props.activeTabElement.offsetWidth,
//       left: props.activeTabElement.offsetLeft
//     }
//   );
// }

const TabAnchorItem = styled.a`
  text-transform: capitalize;
  color: #000000;
  font-weight: 600;
`;

const TabsContainer = styled.div`
  position: relative;
  border-bottom: 1px solid #dfdfdf;
`;

const ReactTabs = styled.div`
  position: relative;
`;

class Tabs extends Component {
  static Tab = Tab;

  state = {
    tabs: [],
    prevActiveTab: {},
    activeTab: this.props.activeTab,
    tabsElements: []
  };

  addTab = newTab => {
    let isNewTabFound;

    for (let i in this.state.tabs) {
      let tab = this.state.tabs[i];

      if (tab.id === newTab.id) {
        isNewTabFound = true;
        break;
      }
    }

    if (!isNewTabFound) {
      this.setState((prevState, props) => {
        return {
          tabs: prevState.tabs.concat(newTab)
        };
      });
    }
  };

  removeTab = tabId => {
    this.setState((prevState, props) => {
      return {
        tabs: prevState.tabs.filter(tab => tab.id !== tabId)
      };
    });
  };

  onClick = tab => event => {
    this.setState((prevState, props) => {
      return {
        prevActiveTab: prevState.activeTab,
        activeTab: tab
      };
    });
  };

  render() {
    return (
      <ReactTabs>
        <TabsContainer>
          <ListTabs>
            {this.state.tabs.map((tab, index) => (
              <TabTitleItem bg="#008f68"
                key={index}
                onClick={this.onClick(tab)}
                id={tab.id}
                ref={tabElement => {
                  if (!this.state.tabsElements[tab.id]) {
                    this.setState((prevState, props) => {
                      const tabsElements = prevState.tabsElements;
                      tabsElements[tab.id] = tabElement;

                      return {
                        tabsElements
                      };
                    });
                  }
                }}
                isActiveTab={this.state.activeTab.id === tab.id}
              >
                <TabAnchorItem>{tab.title}</TabAnchorItem>
              </TabTitleItem>
            ))}
          </ListTabs>

          <ActiveTabBorder
            activeTabElement={this.state.tabsElements[this.state.activeTab.id]}
          />
        </TabsContainer>

        {React.Children.map(this.props.children, child =>
          React.cloneElement(child, {
            activeTab: this.state.activeTab,
            addTab: this.addTab
          })
        )}
      </ReactTabs>
    );
  }
}

export default Tabs;
