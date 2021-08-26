import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    //state就是共享的数据
    state: {
        user: {
            username:null,
            password:null,
            realName:null,
            id:null,
            avatar:null,
            addressList:null,
            accessToken:null,
            refreshToken:null
        },
        shopCar:[]
    },
    //当我们直接调用store.state中的数据时, 会不可避免的产生数据安全的问题, 有时候出了错,我们根本不知道是谁修改了这个数据
    //所以, 我们应该使用get和set, 也就是getters和mutations+actions
    //state中的每一个对象都应该有对应的getter
    getters: {
        user: state => {
            return state.user
        },
        username: state => {
            return state.user.username
        },
        password: state => {
            return state.user.password
        },
        realName: state => {
            return state.user.realName
        },
        id: state => {
            return state.user.id
        },
        avatar: state => {
            return state.user.avatar
        },
        addressList: state => {
            return state.user.addressList
        },
        accessToken: state => {
            return state.user.accessToken
        },
        refreshToken: state => {
            return state.user.refreshToken
        },
        shopCar: state => {
            return state.shopCar
        }
    },
    //更改store中的数据唯一的方式就是 提交 mutation
    //mutations里面写的是一个个修改数据的方法
    mutations: {
        //每个mutation中的第一参数都应该是state
        SER_USER_INFO(state,userInfo) {
            state.user = userInfo
        },
        SER_USERNAME(state,username) {
            state.user.username = username
        },
        SER_PASSWORD(state,password) {
            state.user.password = password
        },
        SET_REAL_NAME(state,realName) {
            state.user.realName = realName
        },
        SET_ID(state,id) {
            state.user.id = id
        },
        SET_AVATAR(state,avatar) {
            state.user.avatar = avatar
        },
        SET_ADDRESS_LIST(state,addressList) {
            state.user.addressList = addressList
        },
        SET_ACCESS_TOKEN(state,accessToken) {
            state.user.accessToken = accessToken
        },
        SET_REFRESH_TOKEN(state,refreshToken) {
            state.user.refreshToken = refreshToken
        },
        SET_SHOP_CAR(state,shopCar) {
            state.shopCar = shopCar
        }
    },
    //action里面写的是很多mutations的集合
    //比如用户登录之后,会从后台获得一个用户信息对象, 这个对象包括了用户名,id等基础信息, 和用户的姓名等拓展信息, 以及用户凭证等安全信息
    //这些信息需要每个都set进store中的user对象中, 但是每个信息的修改方法都已经在mustaions里写死了, 我们要做的其实是创建一个新的action,在其中提交多个mutation
    actions: {
        login({ commit }) {
            //eslint-disable-next-line
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    let userInfo = {
                        username : "Miko",
                        password : "123",
                        realName : "root",
                        id: "01",
                        avatar:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201803%2F17%2F20180317233658_dR4s2.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632572866&t=135613436e201c1bcf283b4c69774320",
                        addressList:["B612星球","永夜极地"],
                        accessToken: "kjandkawdlawkdbawnodawdlkawldkmawlkdmalwmdawdlal",
                        refreshToken: "kjandkawdlawkdbawnodawdlkawldkmawlkdmalwmdawdlal"
                    }
                    let shopCar=[
                        {
                            name:'喜之郎果冻90gx5袋 苹果味 草莓味 香橙味 果味果冻布丁多口味儿童网红零食批发 香橙味90gx5袋装',
                            imgUrl:'https://img14.360buyimg.com/n0/jfs/t1/82252/22/1511/170813/5cfdb265E283d3ffb/52c7144ae41bba5c.jpg',
                            category:'喜之郎',
                            unitPrice:'8.800',
                            count:'5',
                            checked:false
                        },
                        {
                            name:' 三只松鼠_坚果大礼包9袋火红A版1720g',
                            imgUrl:'https://img14.360buyimg.com/n0/jfs/t1/194543/12/9298/165449/60d02e81E81510661/7d27b1de9d0ad6b8.jpg',
                            category:'三只松鼠',
                            unitPrice:'128.00',
                            count:'2',
                            checked:false
                        },
                        {
                            name:'卡吉士椰蓉面包400g*2箱休闲零食面包早餐糕点',
                            imgUrl:'https://img14.360buyimg.com/n0/jfs/t1/182374/1/2958/494274/60962fdbE8685ad71/b0fd1ec7d5a54ae9.jpg',
                            category:'400g*2',
                            unitPrice:'29.80',
                            count:'1',
                            checked:false
                        }

                    ]
                    commit('SET_SHOP_CAR',shopCar)
                    commit('SER_USERNAME', userInfo.username)
                    commit('SER_PASSWORD', userInfo.password)
                    commit('SET_REAL_NAME', userInfo.realName)
                    commit('SET_ID', userInfo.id)
                    commit('SET_AVATAR', userInfo.avatar)
                    commit('SET_ADDRESS_LIST', userInfo.addressList)
                    commit('SET_ACCESS_TOKEN', userInfo.access_token)
                    commit('SET_REFRESH_TOKEN', userInfo.refresh_token)

                    resolve()
                },1500)
            })

        },
        logout({ commit }) {
            //eslint-disable-next-line
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    commit('SER_USERNAME', '')
                    commit('SER_PASSWORD', '')
                    commit('SET_REAL_NAME', '')
                    commit('SET_ID', '')
                    commit('SET_AVATAR', '')
                    commit('SET_ADDRESS_LIST', '')
                    commit('SET_ACCESS_TOKEN', '')
                    commit('SET_REFRESH_TOKEN', '')
                    resolve()
                },1500)
            })
        }
    },
    modules: {
    }
})
