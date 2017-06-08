let cookie='appver=2.0.2';
const config={
    baseURL:'/api',
    withCredentials:true,
    headers:{
        'Content-Type': 'application/json',
        cookie:cookie,
        'X-Requested-With': 'XMLHttpRequest'
    },
    timeout:10000
};
export default config;