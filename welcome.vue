<template>
  <div class="main-background"><!--整个页面的属性-->
    <div class="heada">
      <div class="imga"><!--设置置顶LOGO-->
        <p><img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2955031359,475502929&fm=26&gp=0.jpg"
                width="150px"></p>
      </div>
      <!--顶部的文字-->
      <div class="p-text">
        <h1>|招聘系统</h1>
      </div>
      <!--顶部的面包屑-->
<div class="head_B">

        <el-breadcrumb-item :to="{path: '/' }" >招聘首页 &nbsp;&nbsp;&nbsp;</el-breadcrumb-item>
  <el-breadcrumb-item :to="{path:'#h'}"><div class="footer" @click="returnTop3"> 招聘公告 &nbsp;&nbsp;&nbsp;&nbsp;</div> </el-breadcrumb-item>
        <el-breadcrumb-item :to="{path:'#c'}"><div class="footer"   @click="returnTop2"> 岗位详情 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div></el-breadcrumb-item>
        <el-breadcrumb-item :to="{path:'#b'}"><div class="footer" @click="returnTop1"  > 岗位职责&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div></el-breadcrumb-item>
        <el-breadcrumb-item :to="{path:'#a'}"><div class="footer" @click="returnTop">联系我们</div> </el-breadcrumb-item>
  <el-breadcrumb-item :to="{path:'#a'}"> </el-breadcrumb-item>
</div>
    </div>
    <div class="login">
      <el-button type="success">
        <el-link href="http://localhost:8080/recruit/login" target="_blank">登录/注册</el-link>
      </el-button>
    </div>
    <div class="slide"><!--这里是设置轮播图的，目前为两张-->
      <el-carousel :interval="5000" arrow="always" height="300px">
        <el-carousel-item v-for="item in 2" :key="item">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="textrr" id="h">
      <h1 class="el-icon-s-promotion">招聘公告:</h1>
    </div>
    <div class="recruitment">
      <div class="xtext">
        <p>因事业发展需要，长江日报报业集团面向社会招聘评论员若干名。现将有关情况公告如下：</p> <h2 id="h2--"><a name="一、 招聘条件" class="reference-link"></a><span class="header-link octicon octicon-link"></span>一、 招聘条件</h2><p>1.政治立场坚定，政治敏锐性强。</p> <p>2.热爱党的新闻事业，有较强理论功底。</p> <p>3.中共党员，具有全日制硕士研究生及以上学历。</p> <p>4.年龄在35周岁以下，有3年以上工作经历。</p> <p>5.具有正式出版报刊或正式出版报刊所办新媒体上发表的原创评论作品，作品获市级及以上新闻奖者优先。</p> <p>6.身体健康，具有较强抗压能力。</p> <p>7.特别优秀者，条件可适当放宽。</p> <h2 id="h2--"><a name="二、报名方式" class="reference-link"></a><span class="header-link octicon octicon-link"></span>二、报名方式</h2><p>1.在长江网下载《长江日报报业集团评论员招聘报名登记表》并按要求填写，</p> <p>提供个人基本材料(个人简历、学历、学位、近期免冠登记照、工作经历等证明)及代表作品，</p> <p>发送至邮箱：<a href="mailto:cjrbrsb@163.com">cjrbrsb@163.com</a>，也可邮寄至武汉市江岸区金桥大道113号长江传媒大厦长江日报报业人事部收。</p> <p>2.报名截止时间：2020年6月15日，面试及考试时间另行通知。</p> <p>3.联系电话：85693188</p> <p>长江日报报业集团</p> <p>2020年6月1日</p>
      </div>
    </div>
    <!--    左侧的招聘公告-->
    <div class="textr" id="a">
      <h1 class="el-icon-s-promotion">岗位详情:</h1>
    </div>
    <!--    招聘公告的主要内容-->
    <div class="commenta">
      <el-table
        :data="tableData"
        :span-method="objectSpanMethod"
        border
        style="width: 100%">
        <el-table-column
          prop="date"
          label="招聘岗位"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="报名基本条件"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="岗位能力要求">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button>
              <el-link href="#java" target="_blank">申请</el-link>
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div style="clear: both"></div>
    <!--详细弹窗-->
    <el-dialog :title="title" :visible.sync="detail" style="font-size: 16px;" width="800px; ">
      <el-table :data="detailData" :border="true" :height="tableH"
                :header-cell-style="tableHeaderColor">
        <div style="height: 400px">
        <el-table-column label="岗位职责" width="515">
          <template slot-scope="scope">
            {{ scope.row.name}}
          </template>
        </el-table-column>
        <el-table-column label="联系方式" width="110">
          <template slot-scope="scope">
            {{ scope.row.tel}}
          </template>
        </el-table-column>
        <el-table-column label="公司住址" width="100">
          <template slot-scope="scope">
            {{ scope.row.address}}
          </template>
        </el-table-column>
        </div>
      </el-table>

    </el-dialog>
    <!--    岗位详情文字-->
    <div class="textq" >
      <h1 class="el-icon-s-grid"> 岗位职责:</h1>
    </div>
    <!--    卡片-->
    <div class="card" id="b">
      <tr>
        <td>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>图文编辑</span>
              <el-button style="float: right; padding: 3px 0" type="text">
                <el-link href="http://localhost:8080/recruit/login" target="_blank">立即申请</el-link>
              </el-button>
            </div>
            <div class="text item">
              <h2> 招聘条件 ：</h2>
              1、具有较强政治理论功底。<br>
              　　2、关注社会生活，具有学习研究能力。<br>
              　　3、品行端正，价值明确，能与人合作。<br>
              　　4、适应全天候工作状态。<br>
              　　5、熟悉新媒体传播者更佳。
            </div>
          </el-card>
        </td>
        <td>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>现场记者</span>
              <el-button style="float: right; padding: 3px 0" type="text">
                <el-link href="http://localhost:8080/recruit/login" target="_blank">立即申请</el-link>
              </el-button>
            </div>
            <div class="text item">
              <h2> 招聘条件 ：</h2>
              1、具有较强政治理论功底。<br>
              　　2、关注社会生活，具有学习研究能力。<br>
              　　3、品行端正，价值明确，能与人合作。<br>
              　　4、适应全天候工作状态。<br>
              　　5、熟悉新媒体传播者更佳。
            </div>
          </el-card>
        </td>
      </tr>
      <tr>
      </tr>
    </div>
    <!--底部信息-->
    <div class="bottoma" id="c">
      <div class="textw" >
        <h1 class="el-icon-phone" > 联系我们：</h1>
      </div>
      <div class="texte">
        <br>
        新闻热线：027-66668888<br>
        经营中心：027-85771919<br>
        举报邮箱：2802327246@qq.com<br>
        公司地址：湖北省武汉市江岸区高雄路153号<br>
        邮 &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;编：430015<br>
      </div>
    </div>
    <el-backtop>top</el-backtop>
  </div>

</template>
<script>
    import ElementUI from "element-ui";
    import AppConfig from "@/configs";

    export default {
        name: "login",
        data() {
            return {
                tableH: 250,
                detail: false,//显示细节
                title: "长江日报公开招聘",
                currentDate: new Date(),
                password: "",
                idCard: "",
                tableHHData: [{
                    id: 1,
                    date: '记者',
                    name: '1、 热爱党的新闻舆论工作，综合素质好，身体健康，具有强烈事业心、责任感，有良好职业道德。\n' +
                        '\n' +
                        '2、具有全日制硕士研究生及以上学历（含2019年应届毕业生，其中Android、iOS、PHP工程师、三维动画师、动捕导演具有全日制大学本科及以上学历）。\n' +
                        '\n' +
                        '3、年龄在28周岁以内（1990年10月以后出生，有媒体工作经历可适当放宽至30周岁以内）。\n' +
                        '\n' +
                        '4、具有良好的合作沟通意识、组织协调能力，适应全天候工作状态。\n' +
                        '\n' +
                        '5、优秀人才适当放宽条件。',
                    address: '具有较强的社会责任感、敏感的新闻发现与采访能力，有较强的文字表达能力，能熟练运用文字、图片、直播、音频、视频等全媒体报道手段，英语熟练者优先。'
                }, {
                    id: 2,
                    date: '微信编导',
                    name: '',
                    address: '有扎实的文字功底，有良好的网络阅读习惯，善于发现选题，能迅速捕获热点事件，熟练使用网络用语；掌握Photoshop、GifCam等软件；有长期运营10万以上粉丝的微信公众号经验者优先'
                }, {
                    id: 3,

                    date: '新闻主播',
                    name: '',
                    address: '外貌端正，普通话一级乙等以上水平；有新闻敏感性，有较好的采写能力、控场能力，熟悉网络直播；能按照策划进行采访，能主持自制深度新闻节目，完成节目脚本撰写；能胜任高强度工作，有较强的团队意识'
                }, {
                    id: 4,
                    date: '视频编导',
                    name: '',
                    address: '有独立执导的经验，精通剪辑，有成熟的作品（专题片、广告片、宣传片、微电影等）；能参与创意策划，能对拍摄对象进行深入采访，可以独立完成分镜头脚本；能完成拍摄现场场面调度，有较出色的现场导演能力；后期制作期间，能对剪辑、包装、音乐、调色等工作进行指导和调整； 具有较强的团队意识和团队管理能力'
                },
                    {
                        id: 5,

                        date: '音乐编辑',
                        name: '',
                        address: '具备较丰富的音乐编辑工作经验，具备良好的音乐素养和视听语言基础，能熟练使用Audition、Cubase、Logic 、Protools等音频编辑软件；能根据视频节目要求完成节目的配乐工作，对复杂的工程有整体音乐设计；能熟练使用各类录音收音设备，辅助视频拍摄完成声音录制；音乐类相关专业，能进行原创编曲的优先考虑'
                    }, {

                        date: '三维动画师',
                        name: '',
                        address: '对短视频和新闻行业有兴趣，有个人作品；有动画设计及制作经验，熟悉动画制作的所有环节，熟练使用3D制作软件；能够上夜班，接受较灵活的上下班和轮班时间'
                    }, {

                        date: 'Android工程师',
                        name: '',
                        address: '具有扎实的Java基础，1年以上Android开发经验；熟悉Android SDK及相关开发、调试、优化工具；熟练掌握Android的API，理解Android体系结构、后台服务、数据存储等原理；熟练掌握Android UI开发；掌握HTTP、TCP/IP、socket等网络通信编程技术；熟悉xml/json等数据格式解析；有良好的沟通及团队合作能力'
                    }, {

                        date: 'IOS工程师',
                        name: '',
                        address: '：精通Objective-C编程，能独立完成IOS系统相关功能模块的开发，并保证模块质量；有iOS SDK开发经验，具备主流开源组件使用经验，熟悉常用算法和数据结构，熟悉网络编程、异步编程技术、熟悉xml/json数据的解析；精通UI控件、视频控件使用、开发和优化；掌握系统（缓存、重构等）优化，熟悉软件开发流程，能自觉按较规范的软件管理流程进行开发；具备团队协作和组织能力，有强烈团队精神；有iOS市场上线作品者优先。'
                    }],
                detailData: [{
                    name: "1、负责所在团队软件产品的销售及推广；2、根据市场营销计划，完成部门销售指标；3、开拓新市场,发展新客户,增加产品销售范围；4、负责客户信息的采集、跟踪与销售推进，完成销售任务",
                    tel: "12345678901",
                    address: "长城汇"
                }],
            }
        },
        methods: {
            /*登录按钮*/
            returnTop:function(){
                document.querySelector("#c").scrollIntoView(true);
            },
            returnTop1:function(){
                document.querySelector("#b").scrollIntoView(true);
            },
            returnTop2:function(){
                document.querySelector("#a").scrollIntoView(true);
            },
            returnTop3:function(){
                document.querySelector("#h").scrollIntoView(true);
            },
            login() {
                var self = this;
                if (self.isNull(self.password) || self.isNull(self.idCard)) {
                    this.$message({
                        type: 'warning',
                        duration: 3000,
                        showClose: true,
                        message: "请输入账号或密码"
                    })
                    return;
                }
                const {rrportUrl} = AppConfig;
                var date = "2020-01"
                var url = rrportUrl + '/analytical/drug/drugTable?token=&date=' + date + '&code=DRUG_TABLE_FIRM_ANALYSIS&dpId=100';
                console.log("url:" + url)
                this.$http.get(url)
                    .then((response) => {
                        console.log(response.data);
                        if (response.data.code == 0) {
                            this.tableData = response.data.rows;
                        }
                    })
                    .catch(function (error) {
                        console.log(error)
                    });
                //true

            },
            /*注册按钮*/
            regist() {
                this.$router.push({
                    path: 'regist',
                    query: {}
                })

            },
            /*忘记密码按钮*/
            fogetPw() {

            },
            isNull(name) {
                if (name == null || name == "" || name.trim() == "") {
                    return true;
                } else {
                    return false;
                }
            },
            objectSpanMethod({row, column, rowIndex, columnIndex}) {
                if (columnIndex === 1) {
                    if (rowIndex % 8 === 0) {
                        return {
                            rowspan: 8,
                            colspan: 1
                        };
                    } else {
                        return {
                            rowspan: 0,
                            colspan: 0
                        };
                    }
                }
            },

            // this.title = title;
            // this.showDetail = true;
            // console.log("岗位id:" + id)
            /*根据id请求接口拿动态数据*/

            tableHeaderColor({row, column, rowIndex, columnIndex}) {
                if (rowIndex === 0) {
                    return ' height: 36px;color: #fff; background: #B3C0D1;font-weight: bold;border: 1px solid #fff;text-align:center;'
                }
            },


        },
        mounted() {

        }
    }

</script>

<style scoped>
  .main-background {
    background-size: cover;
    background-color: rgba(255, 35, 39, 0.33);
    /*background-repeat: no-repeat;*/
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }

  .head_B{
    position:absolute;
    top:35px;
    left:600px;
  }
  /*注册按钮*/
  .login {
    position: absolute;
    top: 30px;
    right: 110px;
  }

  /*头部区域*/
  .heada {
    width: 99%;
    height: 80px;
    background-color: white;
    position: absolute;
    top: 0px;
  }

  /*头部面包屑*/
  .el-breadcrumb {
    position: absolute;
    top: 40px;
    left: 600px;
  }

  /*招聘公告*/
  .recruitment{
    width: 60%;
    height: 800px;
    position: absolute;
    top: 400px;
    left: 300px;
    background-color: #f5f7fa;
    background-size: cover;
    color: black;
    border-top:  40px solid #b3c0d1;
  }
  /*招聘公告内容*/
  .xtext{
    text-align: left;
    position: absolute;
    left: 200px;
  }
  /*招聘公告左侧图标*/
  .textrr {
    position: absolute;
    top: 370px;
    left: 100px;
    color: rgba(68, 26, 87, 0.6);
    border-bottom:  2px solid rgba(112, 112, 112, 0.87);

  }
  /*岗位详情的左侧图标*/
  .textr {
    position: absolute;
    top: 1240px;
    left: 100px;
    color: rgba(68, 26, 87, 0.6);
    border-bottom:  2px solid rgba(112, 112, 112, 0.87);

  }
  /*岗位详情*/
  .commenta {
    width: 78%;
    height: 400px;
    position: absolute;
    top: 1280px;
    left: 300px;
    background-color: rgba(175, 172, 167, 0.22);
    background-size: cover;
    text-align: left;
    color: black;
    border-top:  40px solid #b3c0d1;
  }
  /*显示卡片*/
  .card {
    position: absolute;
    top: 2530px;
    left: 300px;
    border-top:  40px solid #b3c0d1;
  }

  /*岗位职责Card*/
  .textq {
    position: absolute;
    top: 2490px;
    left: 100px;
    color: rgba(68, 26, 87, 0.6);
    border-bottom:  2px solid rgba(112, 112, 112, 0.87);
  }

  /*联系我们*/
  .textw {
    position: absolute;
    top: 10px;
    left: 100px;
    color: rgba(68, 26, 87, 0.6);
    border-bottom:  2px solid rgba(112, 112, 112, 0.87);
    margin: 0 20px 0 0;
  }
  /*联系我们的内容*/
  .texte {
    position: absolute;
    top: 50px;
    left: 320px;
    color: rgba(13, 33, 11, 0.94);
    text-align: left;
  }

  /*底部信息*/
  .bottoma {
    width: 100%;
    height: 200px;
    position: absolute;
    top: 2870px;
    left: 0px;
    background-color: rgba(175, 172, 167, 0.22);
    background-size: cover;
    border-top:   1px  solid rgba(93, 132, 170, 0.55);

  }

  .hRight {
    float: right;
    width: 50%;
    height: 100%;
  }

  .el-header {
    background-color: rgba(255, 33, 60, 0.56);
    position: absolute;
    width: 100%;
    top: 105px;
  }

  /*input文字属性*/
  .p-text {
    color: black;
    position: absolute; /* 相对于浏览器窗口定位 */
    left: 420px; /* 距离浏览器左边100px */
    top: 8px; /* 距离浏览器上边200px */
    font-family: "华文楷体";
    font-size: 15px;
  }
  /*图片的属性*/
  .imga {
    position: absolute;;
    left: 200px;
    top: 0px;
    width: 300px;
  }
  /* 图片的轮播CSS*/
  .slide {
    position: absolute;
    top: 80px;
    left: 0px;
    margin: auto;
    width: 100%;
    height: 300px;
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

  }
  .el-carousel__item:nth-child(n) {

    background: url("https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1621898765,1264374756&fm=26&gp=0.jpg");
    background-size: 100% 300px;

  }
  .el-carousel__item:nth-child(2n+1) {

    background: url("https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4164285118,3145559918&fm=26&gp=0.jpg");
    background-size: 100% 100%; /*让背景图片铺满整个区域，自适应*/

    /*color: #3BD9FF;*/
  }

  .text {
    font-size: 14px;
  }
  .item {
    margin-bottom: 18px;
    text-align: left;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .box-card {
    width: 480px;
  }


</style>
