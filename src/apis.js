 import {get, post, upImg } from "./Request";
 var that=this
 var basurl='http://119.3.196.255:7604'
function loding(callBack){
	get({
	    url:basurl+"/F_Information/getInformationListApp",
	    data:{
	      pageSize: 3,
	      pageCurrent: 1,
	      news_type: 218,
	      province: 23,
	      city: 34,
	      district: 24156
	    }
	  }).then(msg => {
	    // console.log(msg)
		callBack(msg.data.list)
	  }).catch(err => {
	    console.log(err);
	  })
};
function incrmentloding (callBack) {
	post({
		url:basurl+'/expert/subscribe/getListExpert',
		data:{
		pageSize: 10,
		pageCurrent: 1
		}
	}).then(msg=>{
		console.log(msg)
		callBack(msg.data.list)
	}).catch(err => {
	    console.log(err);
	  })
}

export {incrmentloding,loding}
	