<template>
    <div>{{msg}}</div>
</template>


<script>
    import Rq_API from '../api/request';
    import URLS from '../constants/urls';


    export default {
        data() {
            return {
                msg: '自定义播放器',
                requestData:{
                    s:'七里香',
                    limit:10,
                    type:1,
                    offset:0
                },
                query:{url:null,
                       data:{}}
            }
        },
        methods:{
            search(){
                this.query.url=URLS.SEARCH_DETAILS;
                this.query.data=this.requestData;
                Rq_API.post(this.query);
            }
        },
        mounted(){
            this.$nextTick(function(){
                this.search();
            });
        }
    }
</script>
