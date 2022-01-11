<template>
  <rt-view>
    <rt-form ref="form1" :model="editForm" :rules="rules">
      <rt-header>
        <rt-detail-header>
          <rt-header-icon slot="icon" icon="rt-base-account" />
          <rt-header-title
            title="客户档案"
            sub-title="苏州瑞泰信息技术有限公司"
          >
            <rt-tag icon="rt-base-account-number">CS00000098</rt-tag>
            <rt-tag icon="rt-base-account-star" color-type="normal"
              >重要客户</rt-tag
            >
          </rt-header-title>
          <template slot="btn">
            <rt-header-button-group>
              <rt-button :plain="false" icon-name="rt-base-close">
                预警
              </rt-button>
              <rt-button icon-name="rt-base-close">预警</rt-button>
              <rt-button icon-name="rt-base-close">预警</rt-button>
              <rt-button :plain="false" icon-name="rt-base-close">
                预警
              </rt-button>
            </rt-header-button-group>
            <rt-button type="primary" style="margin-left: 10px" @click="save">
              测试表单验证
            </rt-button>
          </template>
        </rt-detail-header>
      </rt-header>
      <rt-content>
        <rt-row :gutter="16">
          <rt-col :span="18">
            <rt-card>
              <rt-section>
                <div class="rt-form-wrapper">
                  <rt-row :gutter="32">
                    <rt-col :span="8">
                      <rt-form-item label="客户名称">
                        <rt-lookup
                          v-model="editForm.account"
                          :display-fields="[
                            {
                              prop: 'name',
                              label: '姓名',
                              width: 100
                            },
                            {
                              prop: 'age',
                              label: '年龄',
                              width: 100
                            },
                            {
                              prop: 'address',
                              label: '地址'
                            }
                          ]"
                          multiple
                        />
                      </rt-form-item>
                    </rt-col>
                    <rt-col :span="8">
                      <rt-form-item label="主要电话">
                        <rt-input v-model="editForm.tel">
                          <rt-icon
                            slot="prefix"
                            name="rt-portal-account-star"
                          />
                        </rt-input>
                      </rt-form-item>
                    </rt-col>
                    <rt-col :span="8">
                      <rt-form-item label="生日" prop="number" required>
                        <rt-date-picker v-model="editForm.number" type="date" />
                      </rt-form-item>
                    </rt-col>
                  </rt-row>
                  <rt-row :gutter="32">
                    <rt-col :span="8">
                      <rt-form-item label="客户分类">
                        <rt-picklist
                          v-model="editForm.type"
                          :fetch="fetchPicklist"
                        />
                      </rt-form-item>
                    </rt-col>
                    <rt-col :span="8">
                      <rt-form-item label="微信ID">
                        <rt-input v-model="editForm.weixin" />
                      </rt-form-item>
                    </rt-col>
                    <rt-col :span="8">
                      <rt-form-item label="传真">
                        <rt-input v-model="editForm.fax" />
                      </rt-form-item>
                    </rt-col>
                  </rt-row>
                  <rt-row :gutter="32">
                    <rt-col :span="8">
                      <rt-form-item label="网站">
                        <rt-input v-model="editForm.website" />
                      </rt-form-item>
                    </rt-col>
                    <rt-col :span="8">
                      <rt-form-item label="邮件" required prop="email">
                        <rt-input v-model="editForm.email" />
                      </rt-form-item>
                    </rt-col>
                    <rt-col :span="8">
                      <rt-form-item label="其它电话">
                        <rt-input v-model="editForm.tel1" />
                      </rt-form-item>
                    </rt-col>
                  </rt-row>
                  <rt-row :gutter="32">
                    <rt-col :span="24">
                      <rt-form-item label="备注">
                        <rt-input
                          v-model="editForm.website"
                          label="备注"
                          type="textarea"
                          autosize
                        />
                      </rt-form-item>
                    </rt-col>
                  </rt-row>
                </div>
              </rt-section>
            </rt-card>
            <rt-card>
              <rt-section icon="rt-base-account" title="高级表格">
                <rt-button-group slot="btn">
                  <rt-button icon-name="rt-base-edit" @click="click(4)" />
                  <template slot="more">
                    <rt-button>新增</rt-button>
                    <rt-button>删除</rt-button>
                  </template>
                </rt-button-group>
                <rt-advance-table-group
                  v-model="tableValue"
                  :col="2"
                  @input="tableInput"
                >
                  <rt-advance-table-item
                    v-for="(item, index) in labelList"
                    :label="item.value"
                    :key="index"
                    ><p>{{ item.name }}</p>
                    <rt-row v-for="(item, index) in labelList" :key="index">
                      <rt-attr :label="item.name + '：'" :text="item.name" />
                    </rt-row>
                  </rt-advance-table-item>
                </rt-advance-table-group>
              </rt-section>
            </rt-card>
            <rt-card>
              <rt-section icon="rt-base-account" title="高级表格">
                <rt-sub-section title="三级标题">
                  <rt-table
                    ref="table"
                    :fetch="fetch"
                    @current-change="handleCurrentChange"
                  >
                    <rt-table-column
                      sortable
                      prop="date"
                      label="日期"
                      width="180"
                    />
                    <rt-table-column
                      sortable
                      prop="name"
                      label="姓名"
                      width="180"
                    />
                    <rt-table-column sortable prop="address" label="地址" />
                  </rt-table>
                </rt-sub-section>

                <rt-sub-section title="三级标题">
                  <rt-table
                    ref="table"
                    :fetch="fetch"
                    :show-pagination="false"
                    @current-change="handleCurrentChange"
                  >
                    <rt-table-column
                      sortable
                      prop="date"
                      label="日期"
                      width="180"
                    />
                    <rt-table-column
                      sortable
                      prop="name"
                      label="姓名"
                      width="180"
                    />
                    <rt-table-column sortable prop="address" label="地址" />
                  </rt-table>
                </rt-sub-section>
              </rt-section>
            </rt-card>
          </rt-col>
          <rt-col :span="6">
            <rt-card>
              <rt-section icon="rt-base-account" title="高级表格">
                <rt-advance-table-group
                  v-model="tableValue"
                  :label-list="labelList"
                  vertical
                  show-check-all
                  show-collapse
                  @input="tableInput"
                  @pack-up="packUpItems"
                  @roll-up="rollUpItems"
                >
                  <rt-advance-table-item
                    v-for="(item, index) in labelList"
                    :label="item.value"
                    :key="index"
                    ><p>{{ item.name }}</p>
                    <rt-row v-for="(item, index) in labelList" :key="index">
                      <rt-attr :label="item.name + '：'" :text="item.name" />
                    </rt-row>
                  </rt-advance-table-item>
                </rt-advance-table-group>
              </rt-section>
            </rt-card>
            <rt-card>
              <rt-section icon="rt-base-account" title="高级表格">
                <rt-table
                  ref="table"
                  :fetch="fetch"
                  :pager-count="5"
                  :page-background="false"
                  page-layout="prev, pager, next"
                  class="rt-table-aside"
                  @current-change="handleCurrentChange"
                >
                  <rt-table-column
                    sortable
                    prop="date"
                    label="日期"
                    width="120"
                  />
                  <rt-table-column sortable prop="name" label="姓名" />
                </rt-table>
              </rt-section>
            </rt-card>
          </rt-col>
        </rt-row>
      </rt-content>
    </rt-form>
    <el-dialog :visible.sync="dialogVisible" title="提示" width="30%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </rt-view>
</template>
<script>
import Mock from 'mockjs';
export default {
  data() {
    return {
      editForm: {
        email: ''
      },
      rules: {
        email: [
          {
            required: true,
            message: '请填写邮箱地址',
            trigger: 'blur'
          }
        ],
        number: [
          {
            required: true,
            message: '请填写生日',
            trigger: 'blur'
          }
        ]
      },
      tableValue: [1],
      labelList: [
        {
          name: '标签一',
          value: 1
        },
        {
          name: '标签二',
          value: 2
        },
        {
          name: '标签三',
          value: 3
        },
        {
          name: '标签四',
          value: 4
        }
      ],

      dialogVisible: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.editForm.tel = 110;
    }, 4000);
  },
  methods: {
    save() {
      this.$refs.form1.validate(valid => {
        debugger;
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    fetchPicklist() {
      return new Promise(resolve => {
        let options = [
          {
            Value: 0,
            Text: '客户'
          },
          {
            Value: 1,
            Text: '联系人'
          },
          {
            Value: 2,
            Text: '外部用户'
          }
        ];
        resolve(options);
      });
    },
    handleCurrentChange() {
      debugger;
    },

    tableInput(val) {
      console.log(val);
    },
    packUpItems() {
      console.log('展开');
    },
    rollUpItems() {
      console.log('收起');
    },
    click(ss) {
      this.$nextTick(() => {
        debugger;
        let aa = this.$refs.form1.validate(valid => {
          console.log(valid);
        });
      });
    },
    fetch(page) {
      return this.getDataList(page.pageIndex, page.pageSize).then(resp => {
        this.pageIndex++;
        return resp.user;
      });
    },
    getDataList(index, size) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(
            Mock.mock({
              [`user|${size}`]: [
                {
                  // 随机生成1到3个数组元素
                  name: '@cname', // 中文名称
                  'age|18-28': 0, // 18至28以内随机整数, 0只是用来确定类型
                  date: '@date("yyyy-MM-dd")', // 日期
                  address: '@city(true)', // 中国城市
                  'brother|1': ['jack', 'jim'], // 随机选取 1 个元素
                  'sister|1': ['xiaodaidai', 'kenny', 'lily'] // array中顺序选取元素作为结果
                }
              ]
            })
          );
        }, 1500);
      });
    }
  }
};
</script>

<style></style>
