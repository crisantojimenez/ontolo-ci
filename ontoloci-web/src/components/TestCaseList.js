import React from 'react';
import TestCase from './TestCase';


function TestCaseList() {
  return (
    <div className="main">
      <h2><a>Test Cases</a></h2>
      <div className="test-elements-list">
        <TestCase 
                  testName= "Researcher Test"
                  data="weso:JoseEmilioLabraGayo"
                  shape="weso:Researcher"
                  status="Confortmant"
                  pass={true}  
                  executionTime="3 min 12 sec"
                  date="28 days ago"/>
        <TestCase 
                          testName= "Researcher Test"
                          data="weso:JoseEmilioLabraGayo"
                          shape="weso:Researcher"
                          status="Confortmant"
                          pass={false}  
                          executionTime="3 min 12 sec"
                          date="28 days ago"/>

        <TestCase 
                          testName= "Researcher Test"
                          data="weso:JoseEmilioLabraGayo"
                          shape="weso:Researcher"
                          status="Confortmant"
                          pass={true}  
                          executionTime="3 min 12 sec"
                          date="28 days ago"/>

        <TestCase 
                          testName= "Researcher Test"
                          data="weso:JoseEmilioLabraGayo"
                          shape="weso:Researcher"
                          status="Confortmant"
                          pass={true}  
                          executionTime="3 min 12 sec"
                          date="28 days ago"/>
                          
        <TestCase 
                          testName= "Researcher Test"
                          data="weso:JoseEmilioLabraGayo"
                          shape="weso:Researcher"
                          status="Confortmant"
                          pass={false}  
                          executionTime="3 min 12 sec"
                          date="28 days ago"/>

        <TestCase 
                          testName= "Researcher Test"
                          data="weso:JoseEmilioLabraGayo"
                          shape="weso:Researcher"
                          status="Confortmant"
                          pass={true}  
                          executionTime="3 min 12 sec"
                          date="28 days ago"/>

                                    
      </div>
    </div>
  );
}

export default TestCaseList;
