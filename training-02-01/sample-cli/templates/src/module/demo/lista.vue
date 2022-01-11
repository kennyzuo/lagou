<template>
  <rt-view>
    <rt-header>
      <rt-list-header>
        <rt-list-dropdown
          :menu-list="menuList"
          :drop-index="3"
          icon="rt-base-contact"
        />
        <!-- <rt-header-title title="客户档案" /> -->
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
          <rt-button type="primary" style="margin-left: 10px">主要</rt-button>
        </template>
        <rt-search slot="search" v-model="queryValue" />
      </rt-list-header>
      <rt-list-filter slot="extra">
        <rt-form :model="editForm">
          <rt-row :gutter="15">
            <rt-col :span="6">
              <rt-form-item label="仓库名称">
                <rt-input v-model="editForm.type" />
              </rt-form-item>
            </rt-col>
            <rt-col :span="6">
              <rt-form-item label="仓库编码">
                <rt-input v-model="editForm.weixin" />
              </rt-form-item>
            </rt-col>
            <rt-col :span="6">
              <rt-form-item label="配件名称">
                <rt-input v-model="editForm.fax" />
              </rt-form-item>
            </rt-col>
            <rt-col :span="6">
              <rt-form-item label="配件编码">
                <rt-input v-model="editForm.website" />
              </rt-form-item>
            </rt-col>
          </rt-row>
          <rt-row :gutter="15">
            <rt-col :span="6">
              <rt-form-item label="预警状态">
                <rt-input v-model="editForm.email" />
              </rt-form-item>
            </rt-col>
            <rt-col :span="9">
              <rt-form-item label="省市县">
                <rt-address
                  v-model="editForm.address"
                  :props="props"
                  clearable
                />
              </rt-form-item>
            </rt-col>
          </rt-row>
        </rt-form>
        <template slot="btns">
          <rt-button @click="reset">重置</rt-button>
          <rt-button :plain="false" type="primary">确定</rt-button>
        </template>
      </rt-list-filter>
    </rt-header>
    <rt-content>
      <rt-table
        ref="table"
        :fetch="fetch"
        @current-change="handleCurrentChange"
      >
        <rt-table-column sortable prop="date" label="日期" width="180" />
        <rt-table-column sortable prop="name" label="姓名" width="180" />
        <rt-table-column sortable prop="address" label="地址" />
      </rt-table>
    </rt-content>
  </rt-view>
</template>
<script>
const Mock = require('mockjs');

export default {
  data() {
    return {
      queryValue: '',
      editForm: {
        type: '',
        weixin: '',
        fax: '',
        website: '',
        email: '',
        tel1: '',
        address: [
          '3ce90205-712f-e911-80c6-000c2997f699',
          '965e1eb2-712f-e911-80c6-000c2997f699',
          '79958234-722f-e911-80c6-000c2997f699'
        ],
        address1: []
      },
      props: { value: 'id', label: 'name' },
      menuList: [
        {
          name: '菜单一'
        },
        {
          name: '菜单二'
        },
        {
          name: '菜单三'
        },
        {
          name: '菜单四'
        }
      ],
      tabList: [
        {
          label: 'tab1',
          name: '1'
        },
        {
          label: 'tab2',
          name: '2'
        },
        {
          label: 'tab3',
          name: '3'
        },
        {
          label: 'tab4',
          name: '4'
        }
      ],
      tabIndex: '2',
      activeName: 'second'
    };
  },
  mounted() {},
  methods: {
    handleCommand(command) {
      alert(command);
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
    },
    handleCurrentChange() {
      debugger;
    },
    reset() {},
    test() {
      this.$refs.table.clearSelection();
    }
  }
};
</script>
