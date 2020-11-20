import React,{useState,useEffect} from 'react';
import axios from 'axios';
import OCITest from './OCITest';
import {
  useParams
} from "react-router-dom";




function OCITestCases(props) {


  let { id } = useParams();
  const [tests,setTests] = useState([]);
  const [metadata,setMetadata] = useState({});
  const [status,setStatus] = useState('');
  let endpoint = 'http://156.35.82.21/api/v1/buildResults/'+id

  
  const getTestCases = function(){
    animate('main','hidePanel','hideLoader','showLoader')
    axios({
      method: 'get',
      url: endpoint,
      config: { headers: {'Access-Control-Allow-Origin': '*' }}
  }).then(function(response){
    console.log(response.data)
      setMetadata(response.data.metadata)
      setStatus(response.data.metadata.buildResult.toLowerCase())
      setTests(response.data.testCaseResults)
      animate('hidePanel','main','showLoader','hideLoader')  
      
    })
    .catch(function (response) {
        console.log('error')
        console.log(response);
    });
  
  }


  const animate = function(before1,after1,before2,after2){
      let e1 = document.getElementsByClassName(before1)[0];
      if(e1) e1.className = after1;
      let e2 = document.getElementsByClassName(before2)[0];
      if(e2) e2.className = after2;
  }

  useEffect(() => {
    getTestCases()
  }, []);


  const getSvgStatus = function(){
    if(status=='pass')
      return <svg className="build-status-icon pass" data-name="Layer 1" id="Layer_1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title/><path d="M21.33,57.82,0,36.53l5.87-5.87L21.33,46.09,58.13,9.36,64,15.23,21.33,57.82" data-name="&lt;Compound Path&gt;" id="_Compound_Path_"/></svg> 
    return <svg className="build-status-icon fail" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" ><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
  }

  return (
    <div>
       <div className='hideLoader'>
            <div className="loader"></div>
      </div>
    
      <div className="main">
      
        <div className={"build-panel border-"+status}>
            <div className="top-panel">
              {getSvgStatus()}
              <h3 class={status}>Pull Request  
                  <a class={"pr-link "+status} href={"https://github.com/"+metadata.owner+"/"+metadata.repo+"/pull/"+metadata.prNumber}>{" #"+metadata.prNumber+" "}</a>
                   
                {" "+metadata.commitName+" "}
                <a class={"commit-link "+status} href={"https://github.com/"+metadata.owner+"/"+metadata.repo+"/tree/"+metadata.commit}>[{metadata.commitId}]</a></h3>
            </div>
            <div className="bottom-panel">
              <div>
              <svg    xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 16 16" 
                      className="icon " 
                      alt="Public repository">
                          <g fill="none" 
                            stroke="#9ea3a8" 
                            stroke-linecap="round"
                            stroke-linejoin="round" 
                            stroke-miterlimit="10">
                                <path d="M7.089 13.343h6.434L13.524 1H2.176v12.343H4.46M2.176 10.543h11.348"></path><path d="M4.46 12.239v2.756l1.394-1.285 1.235 1.236v-2.707zM4.199 1v9.543M5.635 8.737h.63M5.635 6.782h.63M5.635 4.828h.63M5.635 2.873h.63"/>
                      </g>
              </svg>
              <span>{metadata.owner}/{metadata.repo}</span>
              </div>
                
              
              
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-color" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/></svg>
                <span>{metadata.commitName}</span>
                </div>

                <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-color" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/></svg>
                <span>{metadata.commitName}</span>
                </div>
                
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" className="icon"><circle cx="8.51" cy="8.5" r="3.5" fill="none" stroke="#9d9d9d" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></circle><path d="M16.5 8.5h-4.49m-7 0H.5" fill="none" stroke="#9d9d9d" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></path></svg>
                <span>{metadata.commitName}</span>
                </div>
                
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" className="icon"><circle cx="4.94" cy="2.83" r="1.83" fill="none" stroke="#9d9d9d" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></circle><circle cx="11.78" cy="5.15" r="1.83" fill="none" stroke="#9d9d9d" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></circle><circle cx="4.98" cy="14.17" r="1.83" fill="none" stroke="#9d9d9d" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></circle><path d="M11.78 6.99s.09 2.68-1.9 3.38c-1.76.62-2.92-.04-4.93 1.97V4.66" fill="none" stroke="#9d9d9d" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></path></svg>
                  <span className="branch-name">Branch {metadata.branch}</span>
              </div>
            </div>
        </div>
        <h2><a class="subtitle">Test Cases</a></h2>
        <div className="test-elements-list">
          {tests.map(test =>{
            return <OCITest 
                    testName= {test.testCase.name}
                    status = {test.status.toLowerCase()}
                    dataNode={test.testCase.expectedShapeMap.split("@")[0]}
                    shape={test.testCase.expectedShapeMap.split("@")[1]}
                    validationStatus={test.metadata.validation_status}
                    expectedValidationStatus={test.metadata.expected_validation_status}
                    executionTime={test.metadata.execution_time}/>
          })}

                                      
        </div>
      </div>
  </div>
  );
}

export default OCITestCases;
