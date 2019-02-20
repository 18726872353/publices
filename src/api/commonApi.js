/**
 * @file 所有api接口 dev 开发环境 
*/
import dev from "./devApi";
import test from "./testApi";
import store from "../store";
import production from "./productionApi";
const apiData = {
	dev,
	test,
	production
};
let url;
if(store.state.env == "production"){
	url = apiData.production;
}else if(store.state.env == "test"){
	url = apiData.test;
}else if(store.state.env == "dev"){
	url = apiData.dev;
}

export default url;
