<template>
    <div id="indexContent">
        <el-row>
            <el-card>
                <el-carousel :interval="4000" type="card" height="330px">
                    <el-carousel-item v-for="(item) in imgList" :key="item.index">
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
                        <el-image src="https://img14.360buyimg.com/n0/jfs/t1/202543/38/2672/261182/612309beE2a9aed5f/ff17f3ff6d837070.jpg"></el-image>
                    </el-col>
                    <el-col :span="1"><div class="none"></div></el-col>
                    <el-col :span="5">
                        <el-image src="https://img14.360buyimg.com/n0/jfs/t1/203860/21/2861/154406/61249d77E3d36c05f/857b9a5335ab299c.jpg"></el-image>
                    </el-col>
                    <el-col :span="1"><div class="none"></div></el-col>
                    <el-col :span="6" style="padding: 5px;">
                        <el-row class="customCard">
                            <el-row >
                                <span class="channelItemName">八月优惠</span>
                                <span class="channelItemTitle">零食上新</span>
                            </el-row>
                            <el-row >
                                <el-col :span="2"><div class="none"></div></el-col>
                                <el-col :span="9">
                                    <el-image src="https://img14.360buyimg.com/n0/jfs/t1/194090/25/1709/135975/6094f004E1a96b0b3/6191edbd17c0ac2c.jpg"></el-image>
                                </el-col>
                                <el-col :span="2"><div class="none"></div></el-col>
                                <el-col :span="9">
                                    <el-image src="https://img14.360buyimg.com/n0/jfs/t1/152134/13/11419/113071/5fe3f748Ee3a928f9/2717ae0213548ada.jpg"></el-image>
                                </el-col>

                            </el-row>
                        </el-row>
                    </el-col>
                    <el-col :span="6" style="padding: 5px;">
                        <el-row class="customCard">
                            <el-row >

                                <span class="channelItemName">多种零食</span>
                                <span class="channelItemTitle">尽享各种美味</span>
                            </el-row>
                            <el-row >
                                <el-col :span="2"><div class="none"></div></el-col>
                                <el-col :span="9">
                                    <el-image src="https://img14.360buyimg.com/n0/jfs/t1/11563/7/7754/415974/5c6289aaE184d500d/059172d9637b2933.jpg"></el-image>
                                </el-col>
                                <el-col :span="2"><div class="none"></div></el-col>
                                <el-col :span="9">
                                    <el-image src="https://img14.360buyimg.com/n0/jfs/t4390/176/2119420636/338063/836c8b7/58eb5339N6db96988.jpg"></el-image>
                                </el-col>

                            </el-row>
                        </el-row>
                    </el-col>
                    <el-col :span="1"><div class="none"></div></el-col>
                    <el-col :span="6" style="padding: 5px;">
                        <el-row class="customCard">
                            <el-row >
                                <span class="channelItemName">甜蜜时刻</span>
                                <span class="channelItemTitle">优惠多多</span>
                            </el-row>
                            <el-row >
                                <el-col :span="2"><div class="none"></div></el-col>
                                <el-col :span="9">
                                    <el-image src="https://img14.360buyimg.com/n0/jfs/t1/6682/23/18413/217939/60f51d0eE47a9edfa/bd08dbca8fac074a.jpg"></el-image>
                                </el-col>
                                <el-col :span="2"><div class="none"></div></el-col>
                                <el-col :span="9">
                                    <el-image src="https://img14.360buyimg.com/n0/jfs/t21028/79/14469742/321430/aa32b887/5af565bbN4acf3b33.jpg"></el-image>
                                </el-col>

                            </el-row>
                        </el-row>
                    </el-col>
                    <el-col :span="6" style="padding: 5px;">
                        <el-row class="customCard">
                            <el-row >

                                <span class="channelItemName">香甜奶棒</span>
                                <span class="channelItemTitle">收获一天美好</span>
                            </el-row>
                            <el-row >
                                <el-col :span="2"><div class="none"></div></el-col>
                                <el-col :span="9">
                                    <el-image src="https://img14.360buyimg.com/n0/jfs/t1/5261/39/9514/305513/5bac8decE506481ec/2baaee265e481896.jpg"></el-image>
                                </el-col>
                                <el-col :span="2"><div class="none"></div></el-col>
                                <el-col :span="9">
                                    <el-image src="https://img14.360buyimg.com/n0/jfs/t1/13/13/10494/315480/5bac8decEde0d1ca0/c45383f17865afdf.jpg"></el-image>
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