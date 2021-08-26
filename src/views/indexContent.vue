<template>
    <div id="indexContent">
        <el-row>
            <el-card>
                <el-carousel :interval="4000" type="card" height="330px">
                    <el-carousel-item v-for="item in imgList" :key="item">
                        <el-tooltip class="item" effect="dark" :content="item.title" placement="top">
                            <el-image :src="item.url" ></el-image>
                        </el-tooltip>
                    </el-carousel-item>
                </el-carousel>
            </el-card>
        </el-row>

        <el-row>
            <el-card>
                <el-row>
                    <el-col :span="5">
                        <el-image src="https://img12.360buyimg.com/cms/jfs/t1/52390/35/13874/60767/5da9926aEea3fdc3b/a0eb6f6ba283d73e.jpg.webp"></el-image>
                    </el-col>
                    <el-col :span="1"><div class="none"></div></el-col>
                    <el-col :span="5">
                        <el-image src="https://img11.360buyimg.com/cms/jfs/t8299/104/2106646636/43458/5ae0afba/59c4edd9N192bf8e6.jpg.webp"></el-image>
                    </el-col>
                    <el-col :span="1"><div class="none"></div></el-col>
                    <el-col :span="6">
                        <el-row class="customCard">
                            <el-row >

                                <span class="channelItemName">八月优惠</span>
                                <span class="channelItemTitle">大牌九折</span>
                            </el-row>
                            <el-row >
                                <el-col :span="2"><div class="none"></div></el-col>
                                <el-col :span="9">
                                    <el-image src="https://img14.360buyimg.com/n0/jfs/t1/192075/19/7768/152588/60c30697E5104987e/fd1289a9422ba3c9.jpg"></el-image>
                                </el-col>
                                <el-col :span="2"><div class="none"></div></el-col>
                                <el-col :span="9">
                                    <el-image src="https://img14.360buyimg.com/n0/jfs/t1/187109/27/20144/196403/6126faa0E6a1cdcb6/bdfe0dc718142d07.jpg"></el-image>
                                </el-col>

                            </el-row>
                        </el-row>
                    </el-col>
                </el-row>
            </el-card>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "indexContent",
        components:{},
        data(){
            return{
                imgList:[
                    {title:"新学期预备式",url:"https://m.360buyimg.com/babel/jfs/t1/198807/14/3927/260295/611e31afEe4a75225/e8e9235b85ebea97.jpg.webp"},
                    {title:"万和油烟机",url:"https://imgcps.jd.com/img-cubic/creative_server_cia/v2/2000366/100005296922/FocusFullshop/CkNqZnMvdDEvMzcyNjYvMjYvMTUzODgvMzg4NDI1LzYwZTY4NDVlRTFmOTQzNWU2LzI3MWIyMWEwYjAwNThmNTcucG5nEgkzLXR5XzBfNTQwAjjui3pCEwoP5LiH5ZKM5rK554Of5py6EABCEAoM56aP5Yip54uC5LqrEAFCEAoM56uL5Y2z5oqi6LStEAJCCgoG5LyY6YCJEAdYmvaexvQC/cr/s/q.jpg"},
                    {title:"电脑数码宠粉日",url:"https://img13.360buyimg.com/pop/s1180x940_jfs/t1/195462/20/19049/80850/611e25d4Ed07d8957/7d3c744083cd289a.jpg.webp"},
                    {title:"新品上新",url:"https://imgcps.jd.com/ling4/100018752514/5LiK5Lqs5pud6YCb5paw5ZOB/5paw5ZOB5LiK5paw/p-5bd8253082acdd181d02fa64/6bc4cce2/cr/s/q.jpg"},
                    {title:"女装上新",url:"https://img10.360buyimg.com/da/jfs/t1/119815/17/14688/130159/5f461a29E7bf15cba/17ce9a3d9eac3f41.jpg!q95.webp"},
                    {title:"婚床",url:"https://imgcps.jd.com/img-cubic/creative_server_cia/v2/2000366/10027532572203/FocusFullshop/CkRqZnMvdDEvMTgxMTk2LzI1LzEzMTYyLzI3ODIwMS82MGU2YWEzYUVhNzYzNTljOS8xOWJkOGFlYzE0MDE1ZTU3LnBuZxIJNS10eV8wXzU2MAI47ot6QhMKD-iKneWNjuS7leWpmuW6ihAAQhAKDOa7oTgwM-WHjzQwMBABQhAKDOeri-WNs-aKoui0rRACQgoKBui2heWAvBAHWKuskbzrowI/cr/s/q.jpg"},

                ]
            }
        }
    }
</script>

<style scoped>
    .channelItemName{
        margin-left:17px;
        font-size: 1.3em;
        font-weight: bolder;
    }
    .channelItemTitle{
        margin-left:10px;
        font-size: 0.7em;
        color:#909399;
    }
    .customCard{
        border:1px solid #DCDFE6;
        border-radius: 5px;
        padding:20px 0;
    }
</style>