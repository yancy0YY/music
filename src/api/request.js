import axios from 'axios';
import axios_config from '../AppConfig/axios.config'

export default{
    /**
     * POST方法
     */
    post(ops){
        return axios.post(opts.url,
                          opts.data,
                          axios_config).then(
                            (res)=>{
                                console.log("请求成功")
                          });
    }
}
