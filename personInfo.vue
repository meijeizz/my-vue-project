<script src="../../js/city.data-3.js"></script>
<style src="@/css/elements.css?v=1" scoped></style>
<template>
  <div class="main-background">
<!--顶部的logo图片-->
    <div class="imaget">

      <p><img
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598674961293&di=e5084b1ea2d5ad4178f0386686680dc3&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fbaike%2Fpic%2Fitem%2F1899a23e776de0b7828b1383.jpg"
        width="200px" height="100px"></p>
    </div>
    <!--左侧的文字-->
    <div class="top-text">
      <p>|公开招聘系统</p>
    </div>
    <!--顶部的header-->
    <div class="top-menu">
      <el-container>
       <el-header height="45px">

       </el-header>

      </el-container>
    </div>
    <!--布局左侧的导航 都在人员基本信息的框下面-->
    <div class="person-background">
      <el-aside width="185px" style="background-color:rgba(255,214,162,0); height: 600px" >
        <el-menu style="text-align: left">

          <el-menu-item index="1">
            <i class="el-icon-user-solid">
            </i>
            <span slot="title">
            <a v-bind:class="{'a-hover':active ==1}" @click="manuClick(1)">人员基本信息 </a>
          </span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-tickets">
            </i>
            <span slot="title"> <a v-bind:class="{'a-hover':active==2}" @click="manuClick(2)">学历信息</a> </span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-trophy-1">
            </i>
            <span slot="title"> <a v-bind:class="{'a-hover':active==3}" @click="manuClick(3)">奖励信息</a></span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-reading"></i>
            <span slot="title"> <a v-bind:class="{'a-hover':active==4}" @click="manuClick(4)">获得证书</a></span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-s-home"></i>
            <span slot="title"> <a v-bind:class="{'a-hover':active==5}" @click="manuClick(5)">家庭信息</a></span>
          </el-menu-item>
          <el-menu-item index="6">
            <i class="el-icon-s-opportunity"></i>
            <span slot="title"> <a v-bind:class="{'a-hover':active==6}" @click="manuClick(6)">紧急联系人</a></span>
          </el-menu-item>
          <el-menu-item index="7">
            <i class="el-icon-document"></i>
            <span slot="title"> <a v-bind:class="{'a-hover':active==7}" @click="manuClick(7)">实习项目经验</a></span>
          </el-menu-item>
          <el-menu-item index="8">
            <i class="el-icon-bangzhu"></i>
            <span slot="title"> <a v-bind:class="{'a-hover':active==8}" @click="manuClick(8)">招聘岗位</a></span>
          </el-menu-item>

        </el-menu>
      </el-aside>
      <!--右边-->

      <!--人员基本信息-->
      <div class="person_content" v-if="active==1">
        <div class="content-left">

          <ul>
            <li class="li">
              <label class="w4">出生日期</label>
              <!-- 规定日期的格式-->
              <el-date-picker
                v-model="birthdate"
                type="date"
                value-format="yyyy-MM-dd"
                placeholder="选择日期"
                @change="startTimeChange"
                :format="'yyyy-MM-dd'"
                :picker-options="pickerOptions0">
              </el-date-picker><!--日期选择从上到下设置日期的格式，选择开始的日期 -->
            </li>
            <li class="li">
              <label class="w2">性别</label>
              <el-select v-model="sex" placeholder="请选择性别" @change="styleChange"><!--v-model实现数据的双向绑定-->
                <el-option v-for="item in sexData" :key="item.value" :label="item.label" :value="item.value"/>
              </el-select>
            </li>

            <li class="li">
              <label class="w4">政治面貌</label>
              <!--<input class="account-input" v-model="polity" type="text" />-->
              <el-select v-model="polity" placeholder="请选择政治面貌" @change="polityChange">
                <el-option v-for="(item,index) in polityList" :key="index" :label="item.name" :value="item.name"/>
              </el-select>
            </li>
            <li class="li">
              <label class="w6">入党(团)日期</label>
              <!--<input class="account-input" v-model="personJoinDate" type="text" />-->
              <el-date-picker
                v-model="personJoinDate"
                type="date"
                value-format="yyyy-MM-dd"
                placeholder="选择日期"
                @change="personJoinDateChange"
                :format="'yyyy-MM-dd'"
                :picker-options="pickerOptions0">
              </el-date-picker>
            </li>
            <!--在 v-for 使用的时候，如果只是两个选择类似于性别，婚姻状况之类的，就用item in xxData 如果有多个选择的话则使用（ itme index)作为选择-->
            <li class="li">
              <label class="w2">民族</label>
              <el-select v-model="nationality" placeholder="请选择民族" @change="nationChange">
                <el-option v-for="(item,index) in nationList" :key="index" :label="item.name" :value="item.name"/>
              </el-select>

            </li>
            <li class="li">
              <label class="w4">婚姻状况</label>
              <el-select v-model="marital" placeholder="请选择婚姻状况" @change="maritalchange">
                <el-option v-for="item in maritalData" :key="item.value" :label="item.label" :value="item.value"/>
              </el-select>
            </li>
            <li class="li">
              <label class="w2">籍贯</label>
              <el-select style="width: 22%;" v-model="provinceValue" placeholder="请选择省" @change="chooseProvince">
                <el-option
                  v-for="item in provinceData" :key="item.code" :label="item.name" :value="item.name">
                </el-option>
              </el-select>

              <el-select style="width: 22%;" v-model="cityValue" placeholder="请选择市" @change="chooseCity">
                <el-option v-for="item in cityData" :key="item.code" :label="item.name" :value="item.name">
                </el-option>
              </el-select>

              <el-select style="width: 28%;" v-model="areaValue" @change="chooseArea" placeholder="请选择区、县">
                <el-option v-for="item in areaData" :key="item.code" :label="item.name" :value="item.name">
                </el-option>
              </el-select>
              <!-- <input class="account-input" v-model="nativeplace" type="text" />-->
            </li>
            <li class="li">
              <label class="w3">手机号</label>
              <el-input class="account-input" v-model="mobile" type="text"/>
            </li>
            <li class="li">
              <label class="w4">邮政编码</label>
              <el-input class="account-input" v-model="postalcode" type="text"/>
            </li>
            <li class="li">
              <label class="w4">服从调剂</label>
              <input class="account-input" type="checkbox" style="zoom:150%;"/>
            </li>

          </ul>

        </div>
        <div class="content-right">
          <ul>
            <li class="li" style="height: 30%">
              <button class="file-button" @click="getPic()">照片</button>
              <input type="file" ref="filElem" id="picFile" style="display: none"/>
            </li>
            <li class="li">
              <label class="w4">健康状况</label>
              <el-select style="width: 50%;" v-model="health" placeholder="请选择健康状况" @change="healthchange">
                <el-option v-for="item in healthData" :key="item.value" :label="item.label" :value="item.value"/>
              </el-select>
            </li>
            <li class="li">
              <label class="w8">结/离婚日期</label>

              <el-date-picker style="width: 50%;"
                              v-model="personMarryDate"
                              type="date"
                              value-format="yyyy-MM-dd"
                              placeholder="选择日期"
                              @change="personMarryDateChange"
                              :format="'yyyy-MM-dd'"
                              :picker-options="pickerOptions0">
              </el-date-picker>
            </li>
            <li class="li">
              <label class="w2">邮箱</label>
              <el-input class="account-input" v-model="email" type="text"/>
            </li>
            <li class="li">
              <label class="w4">家庭地址</label>
              <el-input class="account-input" v-model=" personAddress" type="text"/>
            </li>
          </ul>
        </div>

        <div style="clear: both"></div>
        <div class="content-button1">
          <button class="regist-button">修改</button>
          <button class="regist-button">保存</button>
          <button class="regist-button">取消</button>
          <button class="regist-button">上传照片</button>
        </div>
      </div><!--v-if 是为了实现展示多个场景 点击这个场景的时候该场景内的内容才会显示出来否则将隐藏-->

      <!--学历信息-->
      <div class="person_content" v-if="active==2">
        <div class="table-wrapper">

      <el-table :data="eduTableData" :border="true" :height="tableH" :row-cell-style="tableRowStyle"
                :header-cell-style="tableHeaderColor">

        <el-table-column label="入学日期" width="100">
          <template slot-scope="scope">
            {{scope.row.edudatain}}
          </template>
        </el-table-column>
        <el-table-column label="毕业日期" width="100">
          <template slot-scope="scope">
            {{scope.row.edudataout}}
          </template>
        </el-table-column>
        <el-table-column label="学历" width="100">
          <template slot-scope="scope">
            {{scope.row.eduepx}}
          </template>
        </el-table-column>
        <el-table-column label="学位" width="100">
          <template slot-scope="scope">
            {{scope.row.eduw}}
          </template>
        </el-table-column>
        <el-table-column label="学校" width="110">
          <template slot-scope="scope">
            {{scope.row.eduname}}
          </template>
        </el-table-column>
        <el-table-column label="学校类型" width="100">
          <template slot-scope="scope">
            {{scope.row.edutype}}
          </template>
        </el-table-column>
        <el-table-column label="学历专业类型" width="110">
          <template slot-scope="scope">
            {{scope.row.eduptype}}
          </template>
        </el-table-column>
        <el-table-column label="专业" width="100">
          <template slot-scope="scope">
            {{scope.row.per}}
          </template>
        </el-table-column>
        <el-table-column label="学习方式">
          <template slot-scope="scope">
            {{scope.row.study}}
          </template>
        </el-table-column>
        <el-table-column label="学制">
          <template slot-scope="scope">
            {{scope.row.studyType}}
          </template>
        </el-table-column>
        <el-table-column label="学位授予日期" width="120">
          <template slot-scope="scope">
            {{scope.row.num}}
          </template>
        </el-table-column>
        <el-table-column label="学位授予单位" width="120">
          <template slot-scope="scope">
            {{scope.row.num}}
          </template>
        </el-table-column>
        <el-table-column label="学历证书编号" width="120">
          <template slot-scope="scope">
            {{scope.row.num}}
          </template>
        </el-table-column>
        <el-table-column label="学位证书编号" width="120">
          <template slot-scope="scope">
            {{scope.row.num}}
          </template>
        </el-table-column>
        <el-table-column label="是否最高学历" width="120">
          <template slot-scope="scope">
            {{scope.row.num1}}
          </template>
        </el-table-column>
        <el-table-column label="是否最高学位" width="120">
          <template slot-scope="scope">
            {{scope.row.num1}}
          </template>
        </el-table-column>
        <el-table-column label="是否第一学历" width="120">
          <template slot-scope="scope">
            {{scope.row.num1}}
          </template>
        </el-table-column>
        <el-table-column label="是否第一学位" width="120">
          <template slot-scope="scope">
            {{scope.row.num1}}
          </template>
        </el-table-column>
      </el-table>

    </div>


      <div style="clear: both"></div>
      <div class="content-button">
        <button class="regist-button" @click="eduAddInfo()">新增</button>
        <button class="regist-button">保存</button>
        <button class="regist-button">修改</button>
        <button class="regist-button">删除</button>
        <button class="regist-button">取消</button>
      </div>
    </div>

      <!--奖励信息-->
      <div class="person_content" v-if="active==3">
        <div class="table-wrapper">

          <el-table :data="awardTableData" :border="true" :height="tableH" :row-style="tableRowStyle"
                    :header-cell-style="tableHeaderColor">

            <el-table-column label="年度">
              <template slot-scope="scope">
                {{scope.row.awardYear}}
              </template>
            </el-table-column>
            <el-table-column label="奖励事由">
              <template slot-scope="scope">
                {{scope.row.awardInfo}}
              </template>
            </el-table-column>
            <el-table-column label="奖励组织">
              <template slot-scope="scope">
                {{scope.row.awardOrg}}
              </template>
            </el-table-column>

          </el-table>

        </div>
        <div style="clear: both"></div>
        <div class="content-button">
          <button class="regist-button" @click="awardAddInfo()">新增</button>
          <button class="regist-button">修改</button>
          <button class="regist-button">保存</button>
          <button class="regist-button">删除</button>
          <button class="regist-button">取消</button>
        </div>
      </div>

      <!--获得证书-->
      <div class="person_content" v-if="active==4">
        <div class="table-wrapper">

          <el-table :data="certificateTableData" :border="true" :height="tableH" :row-style="tableRowStyle"
                    :header-cell-style="tableHeaderColor">

            <el-table-column label="证书授予日期">
              <template slot-scope="scope">
                {{scope.row.certificateDate}}
              </template>
            </el-table-column>
            <el-table-column label="证书名称">
              <template slot-scope="scope">
                {{scope.row.certificateName}}
              </template>
            </el-table-column>
            <el-table-column label="证书编号">
              <template slot-scope="scope">
                {{scope.row.certificateCode}}
              </template>
            </el-table-column>

          </el-table>

        </div>
        <div style="clear: both"></div>
        <div class="content-button">
          <button class="regist-button" @click="certificateAddInfo()">新增</button>
          <button class="regist-button">修改</button>
          <button class="regist-button">保存</button>
          <button class="regist-button">删除</button>
          <button class="regist-button">取消</button>
        </div>

      </div>

      <!--家庭信息-->
      <div class="person_content" v-if="active==5">

        <div class="table-wrapper">

          <el-table :data="famillyTableData" :border="true" :height="tableH" :row-style="tableRowStyle"
                    :header-cell-style="tableHeaderColor">

            <el-table-column label="与本人关系">
              <template slot-scope="scope">
                {{scope.row.mem_relation}}
              </template>
            </el-table-column>
            <el-table-column label="家庭成员姓名">
              <template slot-scope="scope">
                {{scope.row.mem_name}}
              </template>
            </el-table-column>
            <el-table-column label="出生日期">
              <template slot-scope="scope">
                {{scope.row.mem_birthday}}
              </template>
            </el-table-column>
            <el-table-column label="工作单位">
              <template slot-scope="scope">
                {{scope.row.mem_corp}}
              </template>
            </el-table-column>
            <el-table-column label="联系电话">
              <template slot-scope="scope">
                {{scope.row.relaphone}}
              </template>
            </el-table-column>
            <el-table-column label="政治面貌">
              <template slot-scope="scope">
                {{scope.row.politics}}
              </template>
            </el-table-column>

          </el-table>

        </div>
        <div style="clear: both"></div>
        <div class="content-button">
          <button class="regist-button" @click="famillyAddInfo()">新增</button>
          <button class="regist-button">修改</button>
          <button class="regist-button">保存</button>
          <button class="regist-button">删除</button>
          <button class="regist-button">取消</button>
        </div>

      </div>

      <!--紧急联系人-->
      <div class="person_content" v-if="active==6">

        <div class="table-wrapper">

          <el-table :data="linkmanTableData" :border="true" :height="tableH"
                    :header-cell-style="tableHeaderColor">

            <el-table-column label="联系人">
              <template slot-scope="scope">
                {{scope.row.linkman}}
              </template>
            </el-table-column>
            <el-table-column label="与联系人关系">
              <template slot-scope="scope">
                {{scope.row.relation}}
              </template>
            </el-table-column>
            <el-table-column label="主要联系人">
              <template slot-scope="scope">
                {{scope.row.ismain}}
              </template>
            </el-table-column>
            <el-table-column label="联系地址">
              <template slot-scope="scope">
                {{scope.row.linkaddr}}
              </template>
            </el-table-column>
            <el-table-column label="邮政编码">
              <template slot-scope="scope">
                {{scope.row.postalcode}}
              </template>
            </el-table-column>
            <el-table-column label="办公电话">
              <template slot-scope="scope">
                {{scope.row.officephone}}
              </template>
            </el-table-column>
            <el-table-column label="家庭电话">
              <template slot-scope="scope">
                {{scope.row.homephone}}
              </template>
            </el-table-column>
            <el-table-column label="手机">
              <template slot-scope="scope">
                {{scope.row.mobile}}
              </template>
            </el-table-column>

          </el-table>

        </div>
        <div style="clear: both"></div>
        <div class="content-button">
          <button class="regist-button" @click="linkmanAddInfo()">新增</button>
          <button class="regist-button">修改</button> <!--添加新的弹窗-->
          <button class="regist-button">保存</button>
          <button class="regist-button">删除</button>
          <button class="regist-button">取消</button>
        </div>
      </div>

      <!--项目/实习经验-->
      <div class="person_content" v-if="active==7">
        <div class="table-wrapper">

          <el-table :data="projectTableData" :border="true" :height="tableH"
                    :header-cell-style="tableHeaderColor">

            <el-table-column label="开始时间">
              <template slot-scope="scope">
                {{scope.row.startDate}}
              </template>
            </el-table-column>
            <el-table-column label="结束时间">
              <template slot-scope="scope">
                {{scope.row.endDate}}
              </template>
            </el-table-column>
            <el-table-column label="项目/实习事件">
              <template slot-scope="scope">
                {{scope.row.project}}
              </template>
            </el-table-column>
            <el-table-column label="职责">
              <template slot-scope="scope">
                {{scope.row.duty}}
              </template>
            </el-table-column>
            <el-table-column label="收获总结">
              <template slot-scope="scope">
                {{scope.row.summary}}
              </template>
            </el-table-column>
          </el-table>

        </div>
        <div style="clear: both"></div>
        <div class="content-button">
          <button class="regist-button" @click="projectAddInfo()">新增</button>
          <button class="regist-button">修改</button>
          <button class="regist-button">保存</button>
          <button class="regist-button">删除</button>
          <button class="regist-button">取消</button>
        </div>
      </div>

      <!--应聘岗位-->
      <div class="person_content" v-if="active==8">
        <!-- <h2>招聘岗位</h2>
        <div class="table-wrapper">
          <el-table :data="tableData" :border="true"  style="width: 100%" :height="tableH"
                    :header-cell-style="tableHeaderColor">

            &lt;!&ndash; <el-table-column prop="id" v-if="false"></el-table-column>&ndash;&gt;
            <el-table-column label="岗位">
              <template slot-scope="scope">
                {{scope.row.name}}
              </template>
            </el-table-column>
            <el-table-column label="组织">
              <template slot-scope="scope">
                {{scope.row.organ}}
              </template>
            </el-table-column>
            <el-table-column label="招聘人数">
              <template slot-scope="scope">
                {{scope.row.num}}
              </template>
            </el-table-column>
            <el-table-column label="部门">
              <template slot-scope="scope">
                {{scope.row.depart}}
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">

                <a href="javascript:;">申请</a>&nbsp;&nbsp; &nbsp;
                &lt;!&ndash;                  <a href="javascript:;">取消</a>&ndash;&gt;
                <a href="javascript:;" @click="detail(scope.row.name,scope.row.id)">详情</a>

              </template>
            </el-table-column>

          </el-table>
          &lt;!&ndash;  <el-pagination small style="margin-top:405px;text-align:center; "
                           background
                           @current-change="handleCurrentChange"
                           :current-page.sync="page"
                           :page-size="size"
                           layout="total, prev, pager, next"
                           :total="total">
            </el-pagination>&ndash;&gt;
        </div>-->
        <div class="tableG"  v-if="showPrise">
          <table border="1px">

            <tr style="background-color: #B3C0D1">
              <th width="200px" > 年度</th>
              <th width="90%">招聘公告</th>
            </tr>
            <tr>
              <td > 2020年度</td>
              <td><el-button type="text" @click="dialogVisible = true">关于开展2020年长江报业集团公开招聘的公告</el-button></td>
            </tr>
            <tr>
              <td> 2019年度</td>
              <td><el-button type="text" @click="dialogVisible = true">关于开展2019年长江报业集团公开招聘的公告</el-button></td>
            </tr>
            <tr>
              <td> 2018年度</td>
              <td><el-button type="text" @click="dialogVisible = true">关于开展2018年长江报业集团公开招聘的公告</el-button></td>
            </tr>

          </table>

        </div>
<!--        岗位详情-->
        <div  v-show="showRentPrise">
          <el-table
            :data="tableHHData"
            :span-method="objectSpanMethod"
            border
            :height="tableT"
            :header-cell-style="tableHeaderColor"
            style="width: 100%">
            <el-table-column
              prop="date"
              label="招聘岗位"
              width="100">
            </el-table-column>
            <el-table-column
              prop="name"
              label="报名基本条件"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="岗位能力要求"
            width="900">
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
      </div>
<!--      协议弹窗-->
      <div class="diacolor">
      <el-dialog title="应聘须知" :visible.sync="dialogVisible" width="60%" :before-close="handleClose">
        <div style="height:300px" >
        <div class="textx">
          <h5 id="h5--"><a name="请详细阅读以下通知，点击确定表示认同此通知且满足要求" class="reference-link"></a><span class="header-link octicon octicon-link"></span>请详细阅读以下通知，点击确定表示认同此通知且满足要求</h5><p><strong>1</strong>.政治立场坚定，热爱党的新闻事业。</p> <p><strong>2</strong>.具有较高政策水平，对社会洞察深刻，在业界具有较高的知名度和影响力。</p> <p><strong>3</strong>.具有全日制硕士研究生及以上学历。</p> <p><strong>4</strong>.年龄在35周岁以内。</p> <p><strong>5</strong>.具有主创的省新闻奖以上的作品或公认相当水平的作品。</p> <p><strong>6</strong>.身体健康，具有较强的抗压能力。</p> <p><strong>7</strong>.特别优秀者，条件可适当放宽。</p>

        </div>
        </div>
          <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="showToggle()" >我已详细阅读 </el-button>
  </span>
      </el-dialog>
      </div>

<!--     弹出 详情-->
      <div style="clear: both"></div>
<!--岗位要则-->
      <el-dialog :title="title" :visible.sync="showDetail" style="font-size: 16px;" width="800px;">

        <div style="text-align: left">
          <div>
            岗位职责：
            <div style="margin-left: 20px" v-html="detailData.name">

            </div>
          </div>
          <div style="margin-top: 30px;">
            联系方式：
            <div style="margin-left: 20px">
              {{detailData.tel}}
            </div>
          </div>
          <div style="margin-top: 30px;">
            公司地址：
            <div style="margin-left: 20px">{{detailData.address}}</div>
          </div>

        </div>
      </el-dialog>
      <!--学历新增！-->
      <el-dialog :visible.sync="eduAdd" :title="eduAddTitle" class="myShowDialogClass" style="font-size: 16px;"
                 width="1150px">

        <div style="height: 400px; ">
          <div class="content-edu-left">
            <ul>
              <li class="li">

                <label class="w7">入学日期</label>
                <el-date-picker style="width: 40%;font-size: 12px;" v-model="eduDate" type="date"
                                value-format="yyyy-MM-dd"
                                placeholder="选择日期"
                                @change="eduDateChange"
                                :format="'yyyy-MM-dd'"
                                :picker-options="pickerOptions0">
                </el-date-picker>

              </li>
              <li class="li">
                <label class="w2">学位</label>&nbsp;
                <el-select style="width: 40%;" v-model="degree" placeholder="请选择学历" @change="degreeChange">
                  <el-option v-for="item in degreeData" :key="item.value" :label="item.label" :value="item.value"/>
                  <!--clear item.value or item.label  item in degreeData-->
                </el-select>
              </li>
              <li class="li">
                <label class="w6-edu">学历专业类型</label>&nbsp;
                <el-input class="account-edu-input" v-model="majorType" type="text"/>
              </li>
              <li class="li">
                <label class="w6-edu">学位授予单位</label>&nbsp;
                <el-input class="account-edu-input" v-model="degreeCompany" type="text"/>
              </li>
              <li class="li">
                <label class="w6-edu">是否最高学历</label>
                <input class="account-edu-input" type="checkbox" style="zoom:150%;"/>
              </li>
              <li class="li">
                <label class="w6-edu">是否第一学位</label>
                <input class="account-edu-input" type="checkbox" style="zoom:150%;"/>
              </li>


            </ul>
          </div>
          <div class="content-edu-left">
            <ul>
              <li class="li">
                <label class="w4">毕业日期</label>&nbsp;
                <el-date-picker style="width: 40%;font-size: 12px;"
                                v-model="graduationDate"
                                type="date"
                                value-format="yyyy-MM-dd"
                                placeholder="选择日期"
                                @change="graduationDateChange"
                                :format="'yyyy-MM-dd'"
                                :picker-options="pickerOptions0">
                </el-date-picker>
              </li>
              <li class="li">
                <label class="w2">学校</label>&nbsp;
                <el-input class="account-edu-input" v-model="school" type="text"/>
              </li>
              <li class="li">
                <label class="w2">专业</label>&nbsp;
                <el-input class="account-edu-input" v-model="major" type="text"/>
              </li>
              <li class="li">
                <label class="w6-edu">学历证书编号</label>&nbsp;

                <el-input class="account-edu-input" v-model="eduLicense" type="text"/>
              </li>

              <li class="li">
                <label class="w6-edu">是否最高学位</label>
                <input class="account-edu-input" type="checkbox" style="zoom:150%;"/>
              </li>
              <li class="li">
                <lable class="w6-edu">是 否 毕 业</lable>&nbsp; &nbsp;&nbsp;
                <input class="account-edu-input" type="checkbox" style="zoom:150%"/>

              </li>

            </ul>
          </div>
          <div class="content-edu-right">
            <ul>
              <li class="li">
                <label class="w2">学历</label>&nbsp;
                <el-select style="width: 40%;" v-model="education" placeholder="请选择学历" @change="educationChange">
                  <el-option v-for="item in educationData" :key="item.value" :label="item.label" :value="item.value"/>
                </el-select>
              </li>
              <li class="li">
                <label class="w4">学校类型</label>&nbsp;
                <el-input class="account-edu-input" v-model="schoolType" type="text"/>
              </li>
              <li class="li">
                <label class="w6-edu">学位授予日期</label>&nbsp;
                <el-date-picker style="width: 40%;font-size: 12px;"
                                v-model="degreeDate"
                                type="date"
                                value-format="yyyy-MM-dd"
                                placeholder="选择日期"
                                @change="degreeDateChange"
                                :format="'yyyy-MM-dd'"
                                :picker-options="pickerOptions0">
                </el-date-picker>
              </li>
              <li class="li">
                <label class="w6-edu">学位证书编号</label>&nbsp;
                <el-input class="account-edu-input" v-model="degreeLicense" type="text"/>
              </li>

              <li class="li">
                <label class="w6-edu">是否第一学历</label>
                <input class="account-edu-input" type="checkbox" style="zoom:150%;"/>
              </li>
            </ul>
          </div>
          <div style="clear: both;"></div>
          <div style="text-align: center;">
            <button class="regist-button">确定</button>
            <button class="regist-button" type="primary" @click="eduAdd=false">取消</button>
          </div>

        </div>
      </el-dialog>

      <!--奖励信息新增弹框-->
      <el-dialog :visible.sync="awardAdd" :title="awardAddTitle" class="myShowDialogClass" style="font-size: 16px;"
                 width="800px;">

        <div style="height: 300px;">
          <div class="boxx">
            <ul>
              <li class="li">
                <label class="w2">年度</label>&nbsp;
                <el-input class="account-edu-input" v-model="awardYear" type="text"/>
              </li>
              <li class="li">
                <label class="w4">奖励事由</label>&nbsp;
                <el-input class="account-edu-input" v-model="rewardInfo" type="text"/>
              </li>
              <li class="li">
                <label class="w4">奖励组织</label>&nbsp;
                <el-input class="account-edu-input" v-model="rewardOrg" type="text"/>
              </li>

            </ul>
          </div>


          <div style="clear: both;"></div>
          <div style="text-align: center;margin-top:30px;">
            <button class="regist-button">确定</button>
            <button class="regist-button" type="primary" @click="awardAdd=false">取消</button>
          </div>

        </div>
      </el-dialog>

      <!--证书信息新增弹框-->
      <el-dialog :visible.sync="certificateAdd" :title="certificateAddTitile" class="myShowDialogClass"
                 style="font-size: 16px;" width="600px;">
        <div style="height: 300px;">
          <div class="boxx">
            <ul>
              <li class="li">
                <label class="w6">证书授予日期</label>&nbsp;
                <el-date-picker class="account-edu-input" v-model=" certificateDate" type="date"/>
              </li>
              <li class="li">
                <label class="w4">证书名称</label>&nbsp;
                <el-input class="account-edu-input" v-model="certificateName" type="text"/>
              </li>
              <li class="li">
                <label class="w4">证书编号</label>&nbsp;
                <el-input class="account-edu-input" v-model="certificateCode" type="text"/>
              </li>
            </ul>
          </div>
          <div style="clear: both;"></div>
          <div style="text-align: center;margin-top:30px; ">
            <button class="regist-button">确定</button>
            <button class="regist-button" type="primary" @click="certificateAdd=false">取消</button>
          </div>

        </div>
      </el-dialog>

      <!--家庭信息新增弹框-->
      <el-dialog :visible.sync="famillyAdd" :title="famillyAddTitile" class="myShowDialogClass" style="font-size: 16px;"
                 width="800px;">
        <div style="height: 300px;">
          <div style="float: left;width:55%;">
            <ul>
              <li class="li">
                <label class="w5">与本人关系</label>&nbsp;
                <el-input class="account-edu-input" v-model="mem_relation" type="text"/>
              </li>
              <li class="li">
                <label class="w6">家庭成员姓名</label>&nbsp;
                <el-input class="account-edu-input" v-model="mem_name" type="text"/>
              </li>
              <li class="li">
                <label class="w4">出生日期</label>&nbsp;
                <el-date-picker class="account-edu-input" v-model="mem_birthday" placeholder="选择日期" type="date"/>
              </li>

            </ul>
          </div>
          <div style="float: left;width:45%;">
            <ul>

              <li class="li">
                <label class="w4">工作单位</label>&nbsp;
                <el-input class="account-edu-input" v-model="mem_corp" type="text"/>
              </li>
              <li class="li">
                <label class="w4">联系电话</label>&nbsp;
                <el-input class="account-edu-input" v-model="relaphone" type="text"/>
              </li>
              <li class="li">
                <label class="w4">政治面貌</label>&nbsp;
                <el-input class="account-edu-input" v-model="politics" type="text"/>
              </li>

            </ul>
          </div>


          <div style="clear: both;"></div>
          <div style="text-align: center;margin-top:30px;">
            <button class="regist-button">确定</button>
            <button class="regist-button" type="primary" @click="famillyAdd=false">取消</button>
          </div>

        </div>
      </el-dialog>


      <!--紧急联系人新增弹框-->
      <el-dialog :visible.sync="linlinkmanAdd" :title="linlinkmanAddTitile" class="myShowDialogClass"
                 style="font-size: 16px;" width="800px;">

        <div style="height: 350px;">
          <div style="float: left;width:45%;">
            <ul>
              <li class="li">
                <label class="w3">联系人</label>&nbsp;
                <el-input class="account-edu-input" v-model="linkman" type="text"/>
              </li>
              <li class="li">
                <label class="w6">与联系人关系</label>&nbsp;
                <el-input class="account-edu-input" v-model="relation" type="text"/>
              </li>
              <li class="li">
                <label class="w5">主要联系人</label>&nbsp;
                <el-input class="account-edu-input" v-model="ismain" type="text"/>
              </li>
              <li class="li">
                <label class="w4">联系地址</label>&nbsp;
                <el-input class="account-edu-input" v-model="linkaddr" type="text"/>
              </li>
            </ul>
          </div>
          <div style="float: left;width:45%;">
            <ul>
              <li class="li">
                <label class="w4">邮政编码</label>&nbsp;
                <el-input class="account-edu-input" v-model="linkPostalcode" type="text"/>
              </li>
              <li class="li">
                <label class="w4">办公电话</label>&nbsp;
                <el-input class="account-edu-input" v-model="officephone" type="text"/>
              </li>
              <li class="li">
                <label class="w4">家庭电话</label>&nbsp;
                <el-input class="account-edu-input" v-model="homePhone " type="text"/>
              </li>
              <li class="li">
                <label class="w2">手机</label>&nbsp;
                <el-input class="account-edu-input" v-model="mobil" type="text"/>
              </li>
            </ul>
          </div>
          <div style="clear: both;"></div>
          <div style="text-align: center;margin-top:30px;">
            <button class="regist-button">确定</button>
            <button class="regist-button" type="primary" @click="linlinkmanAdd=false">取消</button>
          </div>

        </div>
      </el-dialog>

      <!--项目/实习经验新增弹框-->
      <el-dialog :visible.sync="projectAdd" :title="projectAddTitile" class="myShowDialogClass" style="font-size: 16px;"
                 width="600px;">

        <div style="height: 400px;">
          <div class="boxx">
            <div style="float: left;width:90%;">
              <ul>
                <li class="li">
                  <label class="w4">开始时间</label>&nbsp;
                  <el-date-picker class="account-edu-input" v-model="startDate" placeholder="选择日期" type="date"/>
                </li>
                <li class="li">
                  <label class="w4">结束时间</label>&nbsp;
                  <el-date-picker class="account-edu-input" v-model="endDate" placeholder="选择日期" type="date"/>
                </li>
                <li class="li">
                  <label class="w6-edu">项目/实习事件</label>&nbsp;
                  <el-input class="account-edu-input" v-model="project" type="text"/>
                </li>
                <li class="li">
                  <label class="w2">职责</label>&nbsp;
                  <el-input class="account-edu-input" v-model="duty" type="text"/>
                </li>

                <li class="li">
                  <label class="w4">收获总结</label>&nbsp;
                  <el-input class="account-edu-input" v-model="summary" type="text"/>
                </li>

              </ul>
            </div>
          </div>
          <div style="clear: both;"></div>
          <div style="text-align:center;margin-top:30px;">
            <button class="regist-button">确定</button>
            <button class="regist-button" type="primary" @click="projectAdd=false">取消</button>
          </div>

        </div>
      </el-dialog>
    </div>


    <!--页面底部的基础信息-->
    <div class="bottom ">
      <!--将底部的连接信息放在footer-->
      <el-container>
        <el-footer>
 <span class="text">
	    	<a href="https://epaper.hubeidaily.net"> 湖北日报 </a>|
	    	<a href="https://ctdsbepaper.hubeidaily.net"> 楚天都市报 </a>|
	    	<a href="https://ncxbepaper.hubeidaily.net"> 农村新报 </a>|
		    <a href="https://sxwbepaper.hubeidaily.net"> 三峡晚报 </a>|
		    <a href="https://ctkbepaper.hubeidaily.net"> 楚天快报 </a>|
	    	<a href="http://news.hubeidaily.net/download.html">客户端</a>|
	    	<a href="http://news.hubeidaily.net">网站</a>|
	    	<a href="http://www.hubeidaily.net/">集团简介</a>
		</span>
        </el-footer>
      </el-container>
    </div>
  </div>
</template>

<script> import cityData3 from "@/js/city.data-3.js"
import VueMarkdown from 'vue-markdown'
//import nations from "@/js/nations.js"

export default {
    name: "personnelInfo",
    data() {
        return {
            showPrise:true,//设置显示
            showRentPrise:false,//设置隐藏
            dialogVisible: false,
            activeIndex: '1',
            activeIndex2: '1',
            birthdate: "",//出生日期
            sex: "",//性别
            province: "",//省
            city: "",//市
            nativeplace: "",//籍贯
            nationality: "",//民族
            polity: "",//政治面貌
            personJoinDate: "",//入党日期
            marital: "",//婚姻状况
            mobile: "",//手机号
            postalcode: "",//邮政编码
            personAdjust: true,//服从调剂
            health: "",//健康状况
            personMarryDate: "",//结离婚日期
            email: "",//邮箱
            personAddress: "",//家庭地址

            /*学历信息变量*/
            eduDate: "",//入学日期
            education: "",//学历
            educationData: [{
                value: '0',
                label: '本科'
            }, {
                value: '1',
                label: '硕士'
            }, {
                value: '2',
                label: '博士'
            }],
            degree: "",//学位
            degreeData: [{
                value: '0',
                label: '学士学位'
            }, {
                value: '1',
                label: '硕士学位'
            }, {
                value: '2',
                label: '博士学位'
            }],
            graduationDate: "",//毕业日期
            school: "",//学校
            schoolType: "",//学校类型
            majorType: "",//学历专业类型
            major: "",//专业
            degreeDate: "",//学位授予日期
            nation: "",//民族
            eduLicense: "",//学历证书编号
            degreeLicense: "",//学位证书编号
            degreeCompany: "",//学位授予单位
            lasteducation: false,//是否最高学历
            lasteDegree: false,//是否最高学位
            firstEdu: false,//是否第一学历
            firstDegree: false,//是否第一学位
            /*奖励信息变量*/
            awardYear: "",//年度
            rewardInfo: "",//奖励原由
            rewardOrg: "",//奖励组织

            /*获得证书变量*/
            certificateDate: "",// 证书授予日期
            certificateName: "",//证书名称
            certificateCode: "",//证书编号

            /*家庭信息变量*/
            mem_relation: "",//与本人关系
            mem_name: "",//家庭成员姓名
            mem_birthday: "",//出生日期
            mem_corp: "",//工作单位
            relaphone: "",//联系电话
            politics: "",//政治面貌

            /*紧急联系人*/
            linkman: "",//联系人
            relation: "",//与联系人关系
            ismain: "",//主要联系人
            linkaddr: "",//联系地址
            linkPostalcode: "",//邮政编码
            officephone: "",//办公电话
            homePhone: "",//家庭电话
            mobil: "",//手机

            /*项目实习经验*/
            startDate: "",//开始时间
            endDate: "",//结束时间
            project: "",//项目/实习事件
            duty: "",//职责
            summary: "",//收获总结


            active: 1,//控制菜单点击
            showDetail: false,//展示细节
            currentYear: '',
            yearData: ["2018", "2019", "2020"],
            title: "",
            // tableLoadding: true,
            tableData: [{name: "2019年度", organ: "技术开发部", depart: "开发部", num: 10, id:3},
                {name: "2020年度", organ: "销售部", depart: "销售部", num: 20, id:4}],
            // total: 0,
            // page: 1,
            // size: 20,
            detailData: {},
            /*学历信息表格数据*/
            eduTableData: [{
                edudatain: "2017-9-3",
                edudataout: "2021-6-3",
                eduepx: "本科",
                eduw: "学士学位",
                eduname: "中南民族大学",
                edutype: "全日制本科",
                eduptype: "工学",
                per: "软件工程",
                depart: "开发部",
                study: "全日制",
                studyType: "4年",
                num: 10,
                id: 1,
                num1: "是"
            }],//学历信息表格data
            /*奖励信息表格数据*/
            awardTableData: [{awardYear: "2020-01-01", awardInfo: "见义勇为", awardOrg: "湖北共青团"}],
            /*证书信息表格数据*/
            certificateTableData: [{
                certificateDate: "2020-01-01",
                certificateName: "大学生计算机二级",
                certificateCode: "061201899722020"
            }],
            /*家庭信息表格数据*/
            famillyTableData: [{
                mem_relation: "父子",
                mem_name: "张三",
                mem_birthday: "2010-01-01",
                mem_corp: "湖北用友网络",
                relaphone: "12345678901",
                politics: "党员"
            }],
            /*紧急联系人表格数据*/
            linkmanTableData: [{
                linkman: "李四",
                relation: "父子",
                ismain: "否",
                linkaddr: "长城汇",
                postalcode: "430050",
                officephone: "1234567",
                homephone: "12345678910",
                mobile: "12345678911"
            }],
            /*项目实习经验*/
            projectTableData: [{
                startDate: "2020-01-01",
                endDate: "2020-07-15",
                project: "支教",
                duty: "担任支教老师",
                summary: "通过了这一次的支教活动自己学到了很多的东西。。。"
            }],
            tableH: 500,
            tableT:600,

            eduAdd: false,//学历信息新增弹框
            awardAdd: false,//奖励信息新增弹框
            certificateAdd: false,//新增证书信息弹框
            famillyAdd: false,//新增家庭信息弹框
            linlinkmanAdd: false,//新增紧急联系人弹框
            projectAdd: false,//项目实习经验弹框


            awardAddTitle: "新增奖励信息",
            certificateAddTitile: "新增证书信息",
            eduAddTitle: "新增学历信息",
            famillyAddTitile: "新增家庭信息",
            linlinkmanAddTitile: "新增紧急联系人",
            projectAddTitile: "新增项目/实习经验",



            pickerOptions0: {
                disabledDate(time) {
                    return time.getTime() >= Date.now();
                }
            },
            sexData: [{
                value: '0',
                label: '男'
            }, {
                value: '1',
                label: '女'
            }],
            maritalData: [{
                value: '0',
                label: '已婚'
            }, {
                value: '1',
                label: '未婚'
            }],
            healthData: [{
                value: '0',
                label: '正常'
            }, {
                value: '1',
                label: '异常'
            }],

            provinceValue: '',
            cityValue: '',
            areaValue: '',
            provinceData: [],
            cityData: [],
            areaData: [],
            nationList: [{name: "汉族"}, {name: "蒙古族"}, {name: "回族"}, {name: "藏族"}, {name: "维吾尔族"}, {name: "苗族"}, {name: "彝族"}, {name: "壮族"},
                {name: "布依族"}, {name: "朝鲜族"}, {name: "满族"}, {name: "侗族"}, {name: "瑶族"}, {name: "白族"}, {name: "土家族"},
                {name: "哈尼族"}, {name: "哈萨克族"}, {name: "傣族"}, {name: "黎族"}, {name: "傈僳族"}, {name: "佤族"}, {name: "畲族"}, {name: "高山族"}, {name: "拉祜族"},
                {name: "水族"}, {name: "东乡族"}, {name: "纳西族"}, {name: "景颇族"}, {name: "柯尔克孜族"},
                {name: "土族"}, {name: "达斡尔族"}, {name: "仫佬族"}, {name: "羌族"}, {name: "布朗族"}, {name: "撒拉族"}, {name: "毛南族"}, {name: "仡佬族"}, {name: "锡伯族"},
                {name: "阿昌族"}, {name: "普米族"}, {name: "塔吉克族"}, {name: "怒族"}, {name: "乌孜别克族"},
                {name: "俄罗斯族"}, {name: "鄂温克族"}, {name: "德昂族"}, {name: "保安族"}, {name: "裕固族"}, {name: "京族"},
                {name: "塔塔尔族"}, {name: "独龙族"}, {name: "鄂伦春族"}, {name: "赫哲族"}, {name: "门巴族"}, {name: "珞巴族"}, {name: "基诺族"}],
            polityList: [{name: "党员"}, {name: "团员"}, {name: "普通群众"}],
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
    created() {
        this.provinceData = cityData3;
        console.log(this.provinceData)
    },
    methods: {
        jump(){
            this.$router.push({
                path:'welcome',
                query:{}
            });
        },
        manuClick(num) {
            this.active = num;
            // if (num == 8) {
            //     this.tableLoadding = false;
            //     this.total = 2;
            // }
        },
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        /*岗位详情点击*/
        detail(title, id) {
            this.title = title;
            this.showDetail = true;
            console.log("岗位id:" + id)
            /*根据id请求接口拿动态数据*/
            this.detailData = {
                name: "1、负责所在团队软件产品的销售及推广；<br/>2、根据市场营销计划，完成部门销售指标；<br/>3、开拓新市场,发展新客户,增加产品销售范围；<br/>4、负责客户信息的采集、跟踪与销售推进，完成销售任务",
                tel: "12345678901",
                address: "长城汇"
            }

        },
        getPic() {
            this.$refs.filElem.dispatchEvent(new MouseEvent('click'))

        },
        handleCurrentChange(val) {
            console.log("handleCurrentChange" + val);
            this.page = val;

        },
        /*elementUI表格样式自定义*/
        cellStyle(row, cloumn, rowindex, columnIndex) {
            return "border:3px sold red;"
        },
        rowClass() {
            return "border:3px solid red;"
        },
        // 修改table tr行的背景色
        tableRowStyle({row, rowIndex}) {
            return 'background-color: red ;'
        },
        // 修改table header的背景色
        tableHeaderColor({row, column, rowIndex, columnIndex}) {
            if (rowIndex === 0) {
                return ' height: 36px;color: #fff; background: #B3C0D1;font-weight: bold;border: 1px solid #fff;text-align:center;'
            }
        },
        eduAddInfo() {
            this.eduAdd = true;
        },

        awardAddInfo() {
            this.awardAdd = true;

        },
        certificateAddInfo() {
            this.certificateAdd = true;
        },
        famillyAddInfo() {
            this.famillyAdd = true;
        },
        linkmanAddInfo() {
            this.linlinkmanAdd = true;
        },
        projectAddInfo() {
            this.projectAdd = true;
        },

        startTimeChange(val) {
            this.birthdate = val
        },
        personJoinDateChange(val) {
            this.personJoinDate = val;
        },
        personMarryDateChange(val) {
            this.personMarryDate = val;
        },
        styleChange(val) {
            this.sex = val;
        },
        maritalchange(val) {
            this.marital = val;
        },
        nationChange(val) {
            this.nationality = val;
        },
        polityChange(val) {
            this.polity = val;
        },
        healthchange(val) {
            this.health = val
        },
        eduDateChange(val) {
            this.eduDate = val;
        },
        graduationDateChange(val) {
            this.graduationDate = val;
        },
        degreeDateChange(val) {
            this.degreeDate = val;
        },
        educationChange(val) {
            this.educationChange = val;
        },
        degreeChange(val) {
            this.degree = val;
        },

        chooseProvince(value) {
            this.cityValue = '';
            this.areaValue = '';
            this.cityData = [];
            this.areaData = [];
            this.provinceData.map(e => {//遍历数据
                if (value == e.name) {
                    this.cityData = e.cityList;
                    this.province = value;
                    return;
                }
            })
        },
        chooseCity(value) {
            this.areaValue = '';
            this.cityData.map(e => {//遍历数据
                if (value == e.name) {
                    this.areaData = e.areaList;
                    this.city = value;
                    return;
                }
            })
        },
        chooseArea(val) {
            this.nativeplace = val;

        },
        handleClose(done) {
            this.$confirm('请仔细阅读上述内容！')
                .then(_ => {
                    done();
                })
                .catch(_ => {});
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
        showToggle(){

                this.showPrise = false;
                this.showRentPrise=true;
                this.dialogVisible = false
                },



        // 调用
        mounted() {

        }
    }
}
</script>

<style scoped>
  /*背景*/
  .main-background {
    background-repeat: no-repeat;
    color: black;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    height: 100%;

  }

/*左侧导航栏*/
.el-aside{
  position: relative;
  top:115px;
  left: 0px;

}
  /*人员基本信息的背景设置*/
  .person-background {
    background-size: 100%;
    background-repeat: no-repeat;
    text-align: center;
    margin: 0 auto;
  }

  /*弹出框的格式为了解决弹出框中按钮位置不合适*/
  .boxx {
    width: 90%;
    padding: 10px 130px 10px; /*上 右 下 左*/
  }


  /*设置LOGO图片的位置*/
  .imaget {
    position: absolute;
    top: -5px;
    left: 0px;
  }
  /*顶部的menu*/
  .top-menu {
    position: relative;
    top: -130px;
  }
  /*顶部招聘系统文字*/
  .top-text {
    position: absolute;
    top: -20px;
    left: 200px;
    /*font-family: 华文宋体;*/
    font-size: 250%;
  }

  /*右边人员的基本信息的位置大小 边框*/
  .person_content {
    position: absolute;
    top: 155px;
    left: 170px;
    margin-left: 0%;
    width: 87%;
    height: 630px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding-top: 0px;
  }

  /*头部轮播展示栏的位置大小*/

  /*在person-content 中的左右部分的布局划分*/
  .content-left {
    width: 60%;
    float: left;
  }

  .content-right {
    width: 40%;
    float: left;
  }

  /*学历新增框的左右布局*/
  .content-edu-left {
    width: 30%;
    float: left;
  }

  .content-edu-right {
    width: 30%;
    float: left;
  }

  /*在第一个人员基本信息的中按钮的位置*/
  .content-button1 {
    margin-bottom: 1px;
    text-align: center;
    /*margin-top: 20px;*/
    position: relative;
    left: -130px;
    top: 70px;

  }

  /*除了第一个之外所有的按钮位置*/
  .content-button {

   position: relative;
    left:-110px;
    /*margin-top: 20px;*/

  }

  /*所有的按钮属性*/
  .regist-button {
    margin-left: 5%;
    font-size: 14px;
    font-family: 宋体;
    width: 90px;
    height: 28px;
    /*line-height: 28px;*/
    text-align: center;
    color: white;
    background-color: #67c23ad6;
    border-radius: 6px;
    border: 0;
  }

  /*所有的输入框的属性*/
  .account-input {
    width: 60%;
    margin-top: 5px;
    line-height: 25px;
    font-size: 16px;
    font-family: 楷书;
    border-radius: 3px;
  }

  /*选择框的间距*/
  .el-select {
    margin-top: 5px;
    border-radius: 3px;
  }

  /*  日期选择框的间距*/
  .el-date-picker {
    margin-top: 5px;
    border-radius: 3px;
  }

  /*教育 输入框*/
  .account-edu-input {
    width: 40%;
    margin-top: 10px;
    line-height: 15px;
    font-size: 16px;
    font-family: 华文宋体;
    border-radius: 3px;
  }

  ul {
    list-style: none;
  }

  .li {
    margin-top: 10px;
    text-align: left;
  }

  /*设置输入框与文字的间距*/
  .w2 {
    letter-spacing: 2.1em;
    margin-right: -0.3em;
  }

  .w3 {
    letter-spacing: 1.3em;
    margin-right: -1em;
  }

  .w4 {
    letter-spacing: 0.5em;
    margin-right: -0em;
  }

  .w5 {
    letter-spacing: 0.2em;
    margin-right: -0em;
  }

  .w6 {
    letter-spacing: 0.05em;
    margin-right: -0em;
  }

  .w7 {
    letter-spacing: 0.5em;
    margin-right: 0em;
  }

  .w8 {
    letter-spacing: 0em;
    margin-right: 0.6em;
  }

  .w6-edu {
    letter-spacing: 0.03em;
    margin-right: -0.3em;
  }

  /*文件上传（照片上传）的属性*/
  .file-button {
    margin-left: 30%;
    box-shadow: 1px 1px 1px 1px #ccc;
    height: 100%;
    padding: 60px 60px;
    border-radius: 10px;
  }

  /*导航栏 子元素被点击的颜色*/
  .a-hover {

    color: #ffd04b;
  }

  a {
    cursor: pointer;
  }

  /*学历表格*/
  .edu-table {

    width: calc(100% - 32px);
    margin: 20px auto;
    border-collapse: collapse;
  }

  .edu-tr {
    height: 36px;
    color: #fff;
    background: rgb(93, 255, 136);
    font-weight: bold;
  }

  .edu-tr-second {
    height: 36px;
    color: #fff;
    /*background: rgb(0,153,255);*/
    font-weight: bold;
  }
  /*教育弹出框列*/
  .edu-td {
    border: 1px solid #ccc;
    width: 5%;
    height: 100px;
  }
  /*教育弹出框行*/
  .edu-td-second {
    border: 1px solid #ccc;
    width: 5%;
    color: #ee8eff;
    height: 50px;
  }
  /*表格格式*/
  .table-wrapper {
    height: calc(100% - 60px);
  }

  /*输入框的格式设置 大小 长度 高度*/
  .el-input__inner {
    padding: 0 5px !important;
  }

  /deep/ .el-input__inner {

    height: 30px;
  }
  /*输入框的长度宽度*/
  .wind >>> .el-input__inner {
    height: 30px;
    width: 150px;
  }

  /*实现页面首部的图片轮播*/

  /*页面底部元素*/
  .el-footer {
    background-color: #383a40;
    color: #333;
    width: 100%;
    text-align: center;
    line-height: 60px;
  }

  /*底部元素的文字属性*/
  .text a {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    text-decoration: none;
    color: #67c23a8a;
    text-align: center;
  }

  /*头部的导航header信息*/
  .el-header {
    background-color:#383a40 ;
    text-align: center;
    line-height: 60px;
    width: 100%;
    position: absolute;
    top: 180px;
    left: -8px;

  }
  /*底部信息*/
  .bottom {
    width: 100%;
    position: relative;
    top: 170px;
    left: -8px;
  }
  /*menu的表头*/
  .el-menu-item, .el-submenu__title {
    height: 70px;
    line-height: 56px;
    position: relative;
    -webkit-box-sizing: border-box;
    white-space: nowrap;
    list-style: none;
  }
  /* 列表  导航列表*/
  .el-menu {
    border-right: solid 1px #e6e6e6;
    list-style: none;
    position: relative;
    left: -20px;
    margin: 0;
    padding-left: 0;
    background-color: #FFF;
    height: 45px;
    width: 100%;
  }
  /* */
  .el-menu--horizontal > .el-menu-item {
    float: left;
    height: 45px;
    /* line-height: 60px; */
    /* margin: 0; */
    /* border-bottom: 2px solid transparent; */
    /* color: #909399; */
  }
  /*招聘公告表格设置*/
  td{
    border: 1px solid #ebeef5;
    text-align: center;
    padding: 10px 0;
   color: black;
  }
  th{
    border: 1px solid #ebeef5;
    text-align: center;
    padding: 10px 0;
  }
  /*表格颜色*/
  .tableG{
    color:white;

  }
/*新增弹窗确定文字*/
.textx{
  font-size: 17px;
  text-align: left;
  margin-left: 190px;
  color: rgba(44, 62, 80, 0.79);
  /*line-height:40px;*/
}


</style>
<style>
  .myShowDialogClass .el-dialog__body {
    padding: 0;
  }
  .el-dialog__header{
    background-color: rgba(93, 175, 52, 0.54);
    color: #f56c6cb8;
    font-size: 25px;
  }
</style>
