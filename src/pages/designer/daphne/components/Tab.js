import React from "react";

class Tab extends React.Component {
  componentDidMount() {
    this.props.addTab({
      id: this.props.id,
      title: this.props.title
    });
  }
  
  render() {
    const activeTabId = this.props.activeTab && this.props.activeTab.id;
    if (activeTabId === this.props.id && this.props.children) {
      // return this.props.children;
      return (<div style={{display:'block'}}>{this.props.children}</div>);
    }
    // return (<div></div>);
    return (<div style={{display:'none'}}>{this.props.children}</div>);
  }

}

export default Tab;
