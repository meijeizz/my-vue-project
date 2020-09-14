<template>
  <div class="main-background"><!--整个页面的属性-->
    <div class="hRight"><!--设置右边区域-->
      <div class="slide"><!--这里是设置轮播图的，目前为两张-->
        <el-carousel :interval="5000" arrow="always" height="762px" >
          <el-carousel-item v-for="item in 2" :key="item">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="Hleft"><!--设置左边区域-->

      <div class="imga"><!--设置置顶LOGO-->
        <p> <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2955031359,475502929&fm=26&gp=0.jpg" width="350px"> </p>
      </div>
      <div class="p-text">
        <h1>长江日报招聘系统</h1>

      </div>

      <div class="login_frame"><!--登录界面包括输入框和登录注册按钮-->

        <p><label class="label_input"> <el-input class="w4"  v-model="idCard" placeholder="18位身份证号" prefix-icon="el-icon-user" clearable></el-input></label></p>

        <p><label class="label_input"><el-input class="w4" placeholder="密码" v-model="password" show-password id="password" prefix-icon="el-icon-unlock"></el-input></label></p>

        <div class="login_control">

          <button class="btn_login" @click="login()">登录</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

          <button class="btn_login" @click="regist()">注册</button>

          <a class="forget_pwd" href="https://i.yonyou.com/FindPassword1.aspx?k=121102111742446ff7f7&IsD=0&returnurl=http%3a%2f%2fportal.yonyou.com">忘记密码？ </a>
        </div>

      </div>
      <!--<div class="v-text">
        <p>长江日报</p>
      </div>-->
    </div>
  </div>
</template>
<script>
    import ElementUI from "element-ui";
    import AppConfig from "@/configs";

    export default {
        name: "login",
        data(){
            return{
                password:"",
                idCard:"",
            }
        },
        methods:{
            /*登录按钮*/

            login(){
                var self=this;
                if(self.isNull(self.password)||self.isNull(self.idCard)){
                    this.$message({
                        type: 'warning',
                        duration: 3000,
                        showClose: true,
                        message: "请输入账号或密码"
                    })
                    return;
                }
                else{
                    this.$router.push({
                        path:'personInfo',
                        query:{}
                    });
                    this.$message({
                        message:'欢迎进入长江日报招聘系统',
                        type:'success'
                    });
                }
                const { rrportUrl } = AppConfig;
                var date="2020-01"
                var url=rrportUrl+'/analytical/drug/drugTable?token=&date='+date+'&code=DRUG_TABLE_FIRM_ANALYSIS&dpId=100';
                console.log("url:"+url)
                this.$http.get(url)
                    .then((response) => {
                        console.log(response.data);
                        if(response.data.code==0) {
                            this.tableData = response.data.rows;
                        }
                    })
                    .catch(function(error) {
                        console.log(error)
                    });
                //true

            },
            /*注册按钮*/
            regist(){
                this.$router.push({
                    path:'regist',
                    query:{}
                })

            },
            /*忘记密码按钮*/
            fogetPw(){

            },

            isNull(name){
                if(name==null||name==""||name.trim()==""){
                    return true;
                }else{
                    return false;
                }
            },

        }
    }

</script>

<style scoped>
  .main-background{
    background-size: 100%;
    background-repeat: no-repeat;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
  .Hleft{
    float: left;
    width: 50%;
    height: 100%;

  }
  /*/deep/ .el-input__inner{*/
  /*  width: 300px;*/
  /*  height: 30px;*/
  /*}*/
  .hRight{
    float: right;
    width: 50%;
    height: 100%;
  }
  /*form p > * {*/
  /*  display: inline-block;*/
  /*  vertical-align: middle;*/
  /*}*/
  /*登录框的属性设置*/
  .login_frame {
    width: 400px;
    height: 200px;
    padding: 60px 45px 5px 20px;
    position: fixed;
    left: 350px;
    top: 550px;
    margin-left: -200px;
    margin-top: -200px;
    background-color: white;/* rgba(240, 255, 255, 0.5)*/
    border-radius: 0px;
    text-align: center;
    box-shadow: 0 2px 12px 0 rgba(193, 193, 193, 0.18);
    color:black;

  }
  /*输入框的属性*/
  .label_input {

    font-size: 14px;
    font-family: 微软雅黑;
    width: 30px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    /*color: #50504f;*/
    background-color: white;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 100px;
    /*margin-left : 20px;*/
    /*margin-left: 20px;*/
  }
  /*忘记密码*/
  .forget_pwd {
    font-size: 12px;
    color: blue ;
    text-decoration: none;
    position: relative;
    right: -10px;
    top: 5px;
  }
  /*点击密码的鼠标变化*/
  .forget_pwd:hover {
    color: blue;
    text-decoration: underline;
  }

  .login_control {
    padding: 0 25px ;
    position:fixed;
    left:240px;
    top:550px;
  }
  /*登录按钮*/
  .btn_login {
    font-size: 14px;
    font-family: 宋体;
    width: 90px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    color: white;
    background-color:#fc3727;
    border-radius: 6px;
    border: 0;
  }
  /*input文字属性*/
  .p-text{
    color: black;
    position: fixed; /* 相对于浏览器窗口定位 */
    left: 200px;     /* 距离浏览器左边100px */
    top: 190px; /* 距离浏览器上边200px */
    font-family:"华文楷体";
    font-size: 25px;
  }
  .v-text{
    color: black;
    position: fixed; /* 相对于浏览器窗口定位 */
    left: 210px;     /* 距离浏览器左边200px */
    top: 700px; /* 距离浏览器上边700px */
  }
  /*图片的属性*/
  .imga{
    position:fixed;
    left:200px;
    top:-15px;
    width:300px;
  }

  /* 图片的轮播CSS*/
  .slide {
    position: fixed ;
    top:0px;
    margin: auto;
    width: 800px;
    height: 1100px;
    text-align: center;
    font-family: Arial;
    color: #FFF;
    overflow: hidden;
  }
  /*引用element组件来设置图片轮播*/
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
    height: 900px  ;
  }
  .el-carousel__item:nth-child(n) {

    background:url("https://cdn.pixabay.com/photo/2020/09/03/15/37/waterscape-5541692__340.jpg");
    background-size:100% 100%;
  }
  .el-carousel__item:nth-child(2n+1) {

    background:url("https://cdn.pixabay.com/photo/2020/09/02/15/14/flower-5538547__340.jpg");
    background-size:100% 100%;/*让背景图片铺满整个区域，自适应*/
    /*color: #3BD9FF;*/
  }
  .w4 {
    letter-spacing: 4em;
    margin-right: -3em;
  }
</style>
