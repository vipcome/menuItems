<template>
  <div class="recordCenter-main">
    <div class="content-title">长者档案中心</div>
    <div class="content">
      <div class="search-label">
        <div class="label-content" v-show="show_search">
          <div class="label-main" v-for="(item,index) in base_info" :key="index">
            <div class="label">{{item.prop_name}}</div>
            <div class="content">
              <el-checkbox style="margin-top:20px" v-model="ite.checked" v-for="(ite,idx) in item.childrens" :key="idx">{{ite.text}}</el-checkbox>
            </div>
          </div>
          <div class="search-label-btn">
            <el-button type="info" size="mini" @click="reset()">重置</el-button>
            <el-button type="danger" size="mini" @click="search_label()">筛选</el-button>
          </div>
        </div>
        <el-divider v-if="show_search" class="hr" @click="show_search=!show_search"><i class="el-icon-arrow-up"></i></el-divider>
        <el-divider v-if="!show_search" class="hr" @click="show_search=!show_search"><i class="el-icon-arrow-down"></i></el-divider>
        <el-input placeholder="请输入内容" v-model="keyWord" class="input-with-select" style="width:400px" @keyup.13.native="search()">
          <el-button slot="append" icon="el-icon-search" @click="search()"></el-button>
        </el-input>
        <div class="table-content">
          <el-table
            :data="tableData.dataList"
            border
            element-loading-text="Loading"
            fit
            highlight-current-row
            v-loading="tableLoading"
          >
            <el-table-column
              align="center"
              label="老人姓名"
              min-width="100"
            >
              <template slot-scope="scope">
                <el-link
                  :underline="false"
                  @click="goDetail(scope.row)"
                  type="primary"
                >{{ scope.row.user_name }}</el-link>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              label="性别"
              min-width="50"
            >
              <template slot-scope="scope">{{ scope.row.user_sex }}</template>
            </el-table-column>
            <el-table-column
              align="center"
              label="年龄"
              min-width="50"
            >
              <template slot-scope="scope">
                <span>{{ scope.row.user_age }}</span>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              label="手机号码"
              min-width="150"
            >
              <template slot-scope="scope">{{ scope.row.user_phone }}</template>
            </el-table-column>
            <el-table-column
              align="center"
              label="身份证号"
              min-width="200"
            >
              <template slot-scope="scope">{{ scope.row.user_idcard }}</template>
            </el-table-column>
            <el-table-column
              align="center"
              label="能力等级"
              min-width="100"
            >
              <template slot-scope="scope">
                <span>{{ scope.row.self_care_ability }}</span>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              label="所属区域"
              min-width="200"
            >
              <template slot-scope="scope">
                <span>{{ scope.row.org_store_name }}</span>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              label="余额"
              min-width="100"
            >
              <template slot-scope="scope">
                <span>{{ scope.row.money }}</span>
              </template>
            </el-table-column>
          </el-table>
          <div class="page">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="tableParams.currentPage"
              :page-sizes="[10, 20, 30]"
              :page-size="tableParams.limit"
              layout="total, sizes, prev, pager, next, jumper"
              :total="tableParams.total">
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      base_info:{},
      show_search:true,
      keyWord:'',
      tableData:[],
      tableParams:{
        currentPage:1,
        limit:10,
        total:0
      },
      searchJSON:[],
      tableLoading:false
    }
  },
  mounted(){
    this.getSearch()
    this.getData({
      currentPage: this.tableParams.currentPage,
      limit: this.tableParams.limit,
      searchJSON: this.searchJSON,
      keyword: this.keyWord,
      access_token:'94316AFF0DCB987371ED7B6F59751B76'
    })
  },
  methods:{
    getSearch(){
      let that = this
      this.http
        .post('/elderlyrecordscentre/advanced_filter', {
          access_token: '94316AFF0DCB987371ED7B6F59751B76'
        })
        .then((res) => {
          if (res.code === 0) {
            that.base_info=res.data.base_info.data
            that.base_info.forEach(v => {
              v.childrens.forEach(o=>{
                this.$set(o,"checked",false)
              })
            });
            console.log("res:",that.base_info)
          }
        })
    },
    getData(params){
      this.tableLoading = true
      this.http
        .post('/elderlyrecordscentre/list', params)
        .then(({ data, code, msg }) => {
          if (code === 0) {
            this.tableData = data
            this.tableParams.limit = data.limit
            this.tableParams.total = data.total
            this.tableParams.currentPage = data.currentPage
            console.log("data:",this.tableData)
          } else {
            this.$notify.error({
              title: '错误',
              message: `查询失败，原因：${msg}`
            })
          }
        })
        .finally(() => {
          this.tableLoading = false
        })
    },
    handleSizeChange(val) {
      this.tableParams.currentPage = 1
      this.tableParams.limit = val
      this.getData({
        currentPage: this.tableParams.currentPage,
        limit: this.tableParams.limit,
        searchJSON: this.searchJSON,
        keyword: this.keyWord,
        access_token:'94316AFF0DCB987371ED7B6F59751B76'
      })
    },
    handleCurrentChange(val) {
      this.tableParams.currentPage = val
      this.getData({
        currentPage: this.tableParams.currentPage,
        limit: this.tableParams.limit,
        searchJSON: this.searchJSON,
        keyword: this.keyWord,
        access_token:'94316AFF0DCB987371ED7B6F59751B76'
      })
    },
    search(){
      this.tableParams.currentPage = 1
      this.getData({
        currentPage: this.tableParams.currentPage,
        limit: this.tableParams.limit,
        searchJSON: this.searchJSON,
        keyword: this.keyWord,
        access_token:'94316AFF0DCB987371ED7B6F59751B76'
      })
    },
    search_label(){
      console.log(this.base_info)
      this.tableParams.currentPage = 1
      this.searchJSON = []
      this.base_info.forEach(v=>{
        let value = []
        v.childrens.forEach(o=>{
          if(o.checked && v.field_name === 'store_ids'){
            value.push(o.value)
          } else if(o.checked && v.field_name !== 'store_ids'){
            value.push(o.text)
          }
        })
        let item = {
          field_name:v.field_name,
          name:v.prop_name,
          value:value.join(';')
        }
        if(item.value){
          this.searchJSON.push(item)
        }
      })
      this.getData({
        currentPage: this.tableParams.currentPage,
        limit: this.tableParams.limit,
        searchJSON: this.searchJSON,
        keyword: this.keyWord,
        access_token:'94316AFF0DCB987371ED7B6F59751B76'
      })
    },
    reset(){
      this.base_info.forEach(v=>{
        v.childrens.forEach(o=>{
          o.checked = false
        })
      })
      this.searchJSON = []
    },
    goDetail(row){
      this.$router.push({path:'/recordCenter/details',query: {id:row.id}})
    }
  }
}
</script>

<style lang="scss" scope>
.el-table__header th{
  background-color: #eff1f7;
  color: #000;
}
.recordCenter-main{
  width: 100%;
  height: auto;
  overflow: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  .content-title{
    color: gray;
    margin: 20px 0px 20px 20px;
  }
  .content{
    background-color: #fff;
    margin-left: 20px;
    margin-right: 10px;
    .search-label{
      padding: 20px;
      display: flex;
      flex-direction: column;
      .hr{
        cursor: pointer;
      }
      .label-content{
        .label-main{
          display: flex;
          flex-direction: row;
          .label{
            margin-top: 20px;
            width: 90px;
            text-align: end;
            font-weight: bold;
          }
          .content{
            flex:1;
            display: flex;
            flex-wrap: wrap;
          }
        }
        .search-label-btn{
          display: flex;
          justify-content: flex-end;
        }
      }
      .table-content{
        margin-top: 20px;
        .page{
          margin-top: 10px;
          margin-bottom: 20px;
          display: flex;
          justify-content: flex-end;
        }
      }
    }
  }
}
</style>