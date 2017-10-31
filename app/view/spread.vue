<template>
    <div>
        <div class="search-bar">
            <div class="block">
                <el-input v-model="user.mobile" size="small" placeholder="请输入手机号"></el-input>
                <el-input v-model="user.name" size="small" placeholder="请输入用户姓名"></el-input>
                <el-date-picker
                        v-model="currentTimeData"
                        size="small"
                        type="datetimerange"
                        :picker-options="timeData"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        @change="handleChange"
                        align="right">
                </el-date-picker>
                <el-button class="search" type="primary" size="small" icon="el-icon-search">搜索</el-button>
            </div>
        </div>
        <el-table
                v-loading="loading"
                :data="data"
                style="width: 100%"
                border
                size="small"
                highlight-current-row
                :height="componentHeight"
                max-height="600px">
            <el-table-column
                    fixed
                    prop="name"
                    label="姓名"
                    width="200">
            </el-table-column>
            <el-table-column
                    prop="date"
                    label="填写时间">
            </el-table-column>
            <el-table-column
                    prop="phone"
                    label="联系方式"
                    width="400">
            </el-table-column>
            <el-table-column
                    prop="wechat"
                    label="微信号"
                    width="200">
            </el-table-column>
        </el-table>
        <div class="pagination-block">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="4000">
            </el-pagination>
        </div>
    </div>
</template>

<script type="text/babel">
    import ElInput from "../../node_modules/element-ui/packages/input/src/input.vue";
    import ajax from '../src/util/ajax'

    export default {
        components: {ElInput},
        props: ['height'],
        data() {
            return {
                user: {
                    mobile: '',
                    name: ''
                },
                componentHeight: '',
                currentTimeData: '',
                timeData: {
                    shortcuts: [{
                        text: '最近一天',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                data: [{
                    name: '王小虎',
                    date: '2016-05-03',
                    phone: '18814884095',
                    wechat: 'ljhshitiancai'
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-08',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-06',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-07',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }],
                currentPage: 4,
                loading: true
            }
        },
        created: function () {
            this.handleAjax();
        },
        updated: function () {
            this.componentHeight = this.height - 85;
        },
        methods: {
            handleSizeChange(val) {
                console.log(this.height);
                console.log(`每页 ${val} 条`);
                this.handleAjax();
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.handleAjax();
            },
            handleChange: function (value) {
                console.log(value);
                this.handleAjax();
            },
            handleAjax: function () {
                var that = this;
                that.loading = true;
                ajax.get({
                    url: '/wap/domain/get.do',
                    data: {
                        name: 'lijiahao'
                    }
                }, function (res) {
                    console.log(res);
                    that.loading = false;
                }, function (e) {
                    console.log(e);
                    that.$message.error(e.data.msg);
                    that.loading = false;
                });
            }
        },
    }
</script>

<style lang="scss" type="text/scss" scoped="">
    .search {
        position: relative;
        top: -1px;
    }

    .block {
        margin: 15px 0;
    }

    .el-input {
        min-width: 120px;
        max-width: 220px;
    }

    .pagination-block {
        text-align: right;
        margin-top: 15px;
    }
</style>