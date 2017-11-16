<template>
    <div>
        <div class="search-bar">
            <div class="block">
                <el-row :gutter="10">
                    <el-col :xs="24" :sm="24" :md="4">
                        <el-input v-model="user.phone_like" size="small" placeholder="请输入手机号"></el-input>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="4">
                        <el-input v-model="user.name_like" size="small" placeholder="请输入用户姓名"></el-input>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="8">
                        <el-date-picker
                                v-model="currentTimeData"
                                size="small"
                                type="datetimerange"
                                :picker-options="timeData"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期"
                                @change="handleChange"
                                value-format="yyyy-MM-dd HH:mm:ss"
                                align="right">
                        </el-date-picker>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="8" class="tr">
                        <el-button class="search" type="primary" size="small" icon="el-icon-search" @click="search()">搜索
                        </el-button>
                        <el-button class="download" size="small" icon="el-icon-download" @click="downLoad()">下载
                        </el-button>
                        <el-button class="download-list" size="small" @click="downLoadList()">下载列表
                        </el-button>
                    </el-col>
                </el-row>
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
                    prop="userName"
                    label="姓名"
                    width="200">
            </el-table-column>
            <el-table-column
                    prop="gmtCreated"
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
                    :current-page="pageInfo.currentPage"
                    :page-sizes="pageInfo.pageSizes"
                    :page-size="pageInfo.pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="pageInfo.total">
            </el-pagination>
        </div>

        <div class="dialog">
            <el-dialog title="下载列表" :visible.sync="dialogTableVisible" center>
                <el-table :data="downloadData" border height="400">
                    <el-table-column fixed property="fileName" label="文件名称" width="150"></el-table-column>
                    <el-table-column property="gmtCreate" label="生成时间"></el-table-column>
                    <el-table-column label="操作" width="100">
                        <template slot-scope="scope">
                            <el-button size="small" icon="el-icon-download" @click="downLoadFile(scope.row.fileLink)">下载</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="pagination-block">
                    <el-pagination
                            @size-change="handleDownLoadSizeChange"
                            @current-change="handleDownLoadCurrentChange"
                            :current-page="pageInfo.downLoadCurrentPage"
                            :page-sizes="pageInfo.downLoadPageSizes"
                            :page-size="pageInfo.downLoadPageSize"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="pageInfo.downLoadTotal">
                    </el-pagination>
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script type="text/babel">
    import ElInput from "../../node_modules/element-ui/packages/input/src/input.vue";
    import ajax from '../src/util/http'
    import ElButton from "../../node_modules/element-ui/packages/button/src/button.vue";
    import ElRow from "element-ui/packages/row/src/row";
    import ElDialog from "../../node_modules/element-ui/packages/dialog/src/component.vue";

    export default {
        components: {
            ElDialog,
            ElRow,
            ElButton,
            ElInput
        },
        props: ['height'],
        data() {
            return {
                user: {
                    phone_like: '',
                    name_like: '',
                    start_time: '',
                    end_time: '',
                },
                pageInfo: {
                    total: 20,
                    pageSize: 20,
                    pageSizes: [1, 20, 100, 200, 300, 400],
                    currentPage: 1,
                    downLoadTotal: 20,
                    downLoadPageSize: 20,
                    downLoadPageSizes: [1, 20, 100, 200, 300, 400],
                    downLoadCurrentPage: 1,
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
                data: [],
                downloadData: [],
                dialogTableVisible: false,
                loading: true
            }
        },
        created: function () {
            this.handleAjax();
        },
        updated: function () {
            this.componentHeight = this.height - 125;
        },
        methods: {
            search: function () {
                this.handleAjax();
            },
            downLoad: function () {
                let that = this;
                ajax.post({
                    url: 'api/export_user',
                    data: {
                        phone_like: that.user.phone_like,
                        name_like: that.user.name_like,
                        start_time: that.user.start_time,
                        end_time: that.user.end_time
                    },
                    router: that.$router,
                    message: that.$message
                }, function (res) {
                    if (res.status === 200) {
                        that.$message.success('正在导出中，请在导出完成后，进入下载列表下载~');
                    }
                }, function (e) {
                    that.$message.error(e.response.data.message)
                })
            },
            downLoadList: function () {
                let that = this;
                ajax.get({
                    url: 'api/export_list',
                    data: {
                        page_size: that.pageInfo.downLoadPageSize,
                        page: that.pageInfo.downLoadCurrentPage
                    },
                    router: that.$router,
                    message: that.$message
                }, function (res) {
                    that.dialogTableVisible = true;
                    that.downloadData = res.data.data;
                    that.pageInfo.downLoadTotal = res.data.totalCount;
                }, function (e) {
                    that.$message.error(e.response.data.message)
                })
            },
            downLoadFile: function (link) {
                window.open(link);
            },
            handleDownLoadSizeChange(val) {
                this.pageInfo.downLoadPageSize = val;
                this.downLoadList();
            },
            handleDownLoadCurrentChange(val) {
                this.pageInfo.downLoadCurrentPage = val;
                this.downLoadList();
            },
            handleSizeChange(val) {
                this.pageInfo.pageSize = val;
                this.handleAjax();
            },
            handleCurrentChange(val) {
                this.pageInfo.currentPage = val;
                this.handleAjax();
            },
            /**
             * 日期选择
             */
            handleChange: function (value) {
                this.currentTimeData = value;
                this.user.start_time = value[0];
                this.user.end_time = value[1];
            },
            /**
             * 页面列表请求
             */
            handleAjax: function () {
                var that = this;
                that.loading = true;
                ajax.get({
                    url: 'api/query_user',
                    data: {
                        page_size: that.pageInfo.pageSize,
                        page: that.pageInfo.currentPage,
                        phone_like: that.user.phone_like,
                        name_like: that.user.name_like,
                        start_time: that.user.start_time,
                        end_time: that.user.end_time
                    },
                    router: that.$router,
                    message: that.$message
                }, function (res) {
                    that.data = res.data.data;
                    that.pageInfo.total = res.data.totalCount;
                    that.loading = false;
                }, function (e) {
                    that.$message.error(e.response.data.message);
                    that.loading = false;
                });
            }
        },
    }
</script>

<style lang="scss" type="text/scss" scoped="">
    @import "../style/common/global";

    .el-col {
        margin-bottom: 10px;
    }

    .search-bar {
        .search, .download {
            position: relative;
            top: -1px;
        }
    }

    .block {
        margin: 15px 0;
    }

    .pagination-block {
        text-align: right;
        margin-top: 15px;
    }
</style>