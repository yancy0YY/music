let cookie='appver=2.0.2';
const config={
    baseURL:'http://music.163.com/api',
    withCredentials:true,
    headers:{
        cookie:cookie
    },
    timeout:10000
};
export default config;