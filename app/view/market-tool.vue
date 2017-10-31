<template>
    <div id="marketTool">
        <div class="row-list">
            <ul>
                <li v-for="(item, index) in data" @click="getIndex(index)">
                    <div class="uploader-wrapper">
                        <el-upload class="avatar-uploader" :action="uploaderCfg.action" list-type="picture"
                                   :on-change="handlePictureChange"
                                   :on-preview="handlePicturePreview"
                                   :on-remove="handlePictureRemove"
                                   :before-upload="handlePictureBeforeUploader"
                                   :auto-upload="false" :show-file-list="false">
                            <img v-if="item.image" :src="item.image" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </div>
                    <div class="ope-wrapper">
                        <el-input size="small" v-model="item.name" placeholder="请输入内容"></el-input>
                        <!--<el-dialog v-model="true" size="tiny">-->
                        <!--<img width="100%" :src="" alt="">-->
                        <!--</el-dialog>-->
                        <!--<div class="mask" @click="deleteList(index)">-->
                        <i class="el-icon-delete delete-list" @click="showDialog(index)"></i>
                        <!--</div>-->
                    </div>
                </li>
            </ul>
        </div>
        <div class="add-row">
            <el-button size="small" @click="addRow">添加一行</el-button>
            <el-button type="success" size="small" @click="submit()">保存</el-button>
        </div>
        <div class="dialog">
            <el-dialog
                    title="温馨提醒！"
                    :visible.sync="dialogVisible">
                <span>{{ message }}</span>
                <span slot="footer" class="dialog-footer">
                    <el-button size="small" @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" size="small" @click="deleteItem()">确 定</el-button>
                </span>
            </el-dialog>
        </div>
    </div>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                uploaderCfg: {
                    action: "https://jsonplaceholder.typicode.com/posts"
                },
                currentIndex: '',
                dialogVisible: false,
                data: [],
                message: '',
            }
        },
        methods: {
            addRow: function () {
                let row = {
                    name: "按钮名称",
                    image: "",
                    show: true
                };
                if (this.data.length >= 12) {
                    this.$message.warning('当前暂时只开放12个哦！');
                    return;
                }
                this.data.push(row)
            },
            close: function () {
                console.log('关闭了');
            },
            showDialog: function (index) {
                this.message = '确定要删除该内容吗？';
                this.dialogVisible = true;
//                this.data.splice(index, 1)
            },
            deleteItem: function () {
                this.dialogVisible = false;
                this.data.splice(this.currentIndex, 1)
            },
            submit: function () {
                console.log(this.data);
            },
            getIndex: function (index) {
                this.currentIndex = index;
                console.log("当前指针：" + this.currentIndex);
            },
            //
            handlePictureChange: function (file, fileList) {
                console.log(fileList);
                console.log(fileList.length);
                this.data[this.currentIndex].image = URL.createObjectURL(file.raw);
            },
            handlePictureRemove: function (file, fileList) {
                console.log('removing');
            },
            handlePictureBeforeUploader: function (file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 0.5;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 500KB!');
                }
                return isJPG && isLt2M;
            },
            handlePicturePreview: function (file) {
                console.log(file);
            }
        }
    }
</script>

<style lang="scss" type="text/scss" scoped="">
    $imageHeight: 220px;
    #marketTool {
        padding-bottom: 60px;
        .row-list {
            ul {
                overflow: hidden;
                padding: 10px;
                li {
                    height: 280px;
                    position: relative;
                    float: left;
                    width: 23%;
                    max-width: 220px;
                    min-width: 170px;
                    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
                    margin: 1%;
                    text-align: center;
                    background: rgba(0, 0, 0, 0.1);
                    transition: box-shadow 0.5s;
                    &:hover {
                        box-shadow: 0 0 6px rgba(0, 0, 0, 0.4);
                        .mask {
                            display: flex;
                        }
                    }
                    .uploader-wrapper {
                        margin-bottom: 15px;
                    }
                    .avatar-uploader {
                        width: 100%;
                        background: #fff;
                        height: $imageHeight;
                    }
                    .avatar-uploader .el-upload {
                        border: 1px dashed #d9d9d9;
                        border-radius: 6px;
                        cursor: pointer;
                        position: relative;
                        overflow: hidden;
                    }
                    .avatar-uploader .el-upload:hover {
                        border-color: #20a0ff;
                    }
                    .avatar-uploader-icon {
                        font-size: 18px;
                        color: #8c939d;
                        width: 100%;
                        height: $imageHeight;
                        line-height: $imageHeight;
                        text-align: center;
                    }
                    .avatar {
                        width: 100%;
                        height: $imageHeight;
                        display: block;
                    }
                    .ope-wrapper {
                        overflow: hidden;
                        .el-input {
                            width: 70%;
                            min-width: 120px;
                            float: left;
                            margin-left: 5px;
                            .el-input__inner {
                                border: none;
                            }
                        }
                        i.delete-list {
                            font-size: 18px;
                            cursor: pointer;
                            float: right;
                            height: 30px;
                            line-height: 30px;
                            margin-right: 5px;
                            color: #8c939d;
                        }
                    }
                }
            }
        }
    }

    .add-row {
        position: absolute;
        bottom: 10px;
        left: 10px;
        right: 10px;
        text-align: center;
        button {
            width: 45%;
        }
    }
</style>