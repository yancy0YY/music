//对axios方法的封装
import axios from 'axios';
import axios_config from '../AppConfig/axios.config'

export default{
    /**
     * POST方法
     */
    post(opts){
        return axios.post(opts.url,
                          opts.data,
                          axios_config).then(
                            (res)=>{
                                console.log("请求成功")
                            },
                            (err) => {
                                return opts.failed ? opts.failed(err) : console.log(err);
                          }).catch(e=>{console.log("======="+e)});
    }
}
