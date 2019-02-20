/**
 * @file ajax
 * @date 20180703
 * @author wangwenfa
 */
import Vue from 'vue';
import router from './../router';
import axios from 'axios';
import store from '../store';
// import qs from 'qs';
import cookie from '../plugins/cookie.js';
import aesUtils from '../plugins/aes.js';

const defaultHeaders = {
	Accept: 'application/json, text/plain, */*; charset=utf-8',
	'Content-Type': 'application/json; charset=utf-8',
	Pragma: 'no-cache',
	'Cache-Control': 'no-cache'
};

// 设置默认头
Object.assign(axios.defaults.headers.common, defaultHeaders);
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials = false;

// http request 拦截器
axios.interceptors.request.use(
	config => {

		if (store.state.env == "production" || store.state.env == "test") {
			let access_token = window.localStorage.getItem('access_token');
			if (access_token != undefined)
				config.headers.Authorization = "Bearer " + access_token;
		}
		
		return config;
	},
	err => {
		return Promise.reject(err);
	}
);

// http response 拦截器
axios.interceptors.response.use(
	response => {
		
		if (response.data.code === 401) {
			router.push("/login")
			return Promise.reject(response);
		}
		return response;
	},
	error => {
		if (error.response) {
			switch (error.response.status) { }
		}
		return Promise.reject(error.response.data);
	}
)
export default axios;