import * as React from 'react';
import Metrics from "./Metrics";
import Visualizer from "./Visualizer";

interface IAppProb {
    pdbData: {true: string, pred: string};
    showHeader: boolean;
    pdbViewHeight: string;
    metricsWidth: string;
}

class OpenProteinDashboard extends React.Component<IAppProb, IAppProb> {
  public state = {
      pdbData: this.props.pdbData ,
      showHeader: this.props.showHeader,
      pdbViewHeight: this.props.pdbViewHeight,
      metricsWidth: this.props.metricsWidth
  };

  constructor(props: any) {
    super(props);
    this.setState({pdbData: {pred: "", true: ""}})
    this.setPdbData = this.setPdbData.bind(this);
  }

  public setPdbData(data: {true: string, pred: string}) {
    if (this.state.pdbData.true !== data.true || this.state.pdbData.pred !== data.pred) {
        this.setState({pdbData: data})
    }
  }

  public render() {
      const mainPanelStyle: any = {
          height: this.props.pdbViewHeight,
      };

      const metricsPanelStyle : any = {

      };

      const headerStyle = {
          background: "#222",
          display: "inline-grid" ,
          gridColumn: "1 / 4",
          gridRow: "1",
      };

      const footerStyle = {
          background: "#222",
          display: "inline-grid" ,
          gridColumn: "1 / 4",
          gridRow: "31 / 32",
      };

      if (this.state.pdbData.true === undefined) {
          mainPanelStyle["display"] = "none"
          metricsPanelStyle["gridColumn"] = "1"
      }

      return (
      <div className="OpenProteinDashboard">

          <div className="open-protein-container">
              {this.props.showHeader ?
                  <div style={headerStyle}>
                      <div style={{gridColumn: 1, color: "white", textAlign: "left", marginLeft:"20px"}}>
                          <h1 className="App-title">OpenProtein</h1>
                      </div>
                      <div style={{gridColumn: 2, color: "white", textAlign: "right"}}>
                          <div style={{margin: "20px", color: "white", fontSize:"10pt"}}>
                              <a style={{color: "white", textDecoration:"none"}} href="https://github.com/openprotein">View OpenProtein on Github</a>
                          </div>
                      </div>
                  </div>
                  :
                  <></>
              }
              <div className="open-protein-main-panel" style={mainPanelStyle}><Visualizer pdbData={this.state.pdbData} /></div>
              <div className="open-protein-metrics-panel" style={metricsPanelStyle}><Metrics chartWidth={this.props.metricsWidth} setPdbData={this.setPdbData} /></div>
              <div className="open-protein-footer" style={footerStyle}>
                  <div style={{gridColumn: 1, color: "white", textAlign: "left"}}>
                      <div style={{margin: "20px", display:"flex"}}>
                          <div style={{background:"blue", height:"12px", width:"20px", marginRight:"10px", marginLeft:"5px", border: "2px solid white"}} />
                          Prediction
                          <div style={{background:"green", height:"12px", width:"20px", marginRight:"10px", marginLeft:"15px", border: "2px solid white"}} />
                          Actual
                      </div>
                  </div>
                  <div style={{gridColumn: 2, color: "white", textAlign: "right"}}>
                      <div style={{margin: "20px", color: "lightgrey", fontSize:"10pt"}}>
                          © 2019 OpenProtein, all rights reserved
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }

  public componentDidMount(){
    document.title = "OpenProtein"
  }

}

export { OpenProteinDashboard };
