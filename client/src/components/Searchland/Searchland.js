import React, {Component} from "react";

// class Searchland extends Component
const Searchland = (props) =>
    <div className="row">
      <div className="col-sm-12">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i>Search Parameters</strong></h3>
          </div>
          <div className="panel-body">
            <form role="form">
              <div className="form-group">
                <label for="search">Search Term:</label>
                <input type="text" className="form-control" name="searchTerm" onChange={props.handleInputChange} value={props.value.searchTerm}></input>
              </div>
              <div className="form-group">
                <label for="pwd">Number of Records to Retrieve:</label>
                <select className="form-control" name="numRecordsSelect" onChange={props.handleInputChange} value={props.value.numRecordsSelect}>
							<option value="1">1</option>
							<option value="5" selected>5</option>
							<option value="10">10</option>
						</select>
              </div>
              <div className="form-group">
                <label for="start-year">Start Year (Optional):</label>
                <input type="text" className="form-control" name="startYear" onChange={props.handleInputChange} value={props.value.startYear}></input>
              </div>
              <div className="form-group">
                <label for="end-year">End Year (Optional):</label>
                <input type="text" className="form-control" name="endYear" onChange={props.handleInputChange} value={props.value.endYear}></input>
              </div>
              {props.children}
              {/* <button type="submit" className="btn btn-default" id="run-search"><i className="fa fa-search"></i> Search</button> */}
              <button type="button" className="btn btn-default" id="clear-all"><i className="fa fa-trash"></i> Clear Results</button>
            </form>
          </div>
        </div>
      </div>
    </div>

export default Searchland;


