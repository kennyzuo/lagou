<template>
  <rt-view>
    <rt-header class="cus-header">
      <rt-list-header>
        <rt-list-dropdown
          :menu-list="menuList"
          :drop-index="3"
          icon="rt-base-contact"
        />
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
          <rt-button type="primary">主要</rt-button>
        </template>

        <rt-search slot="search" v-model="queryValue" />
      </rt-list-header>
    </rt-header>
    <rt-header class="cus-header">
      <rt-detail-header>
        <rt-header-icon slot="icon" icon="rt-base-account" />
        <rt-header-title title="客户档案" sub-title="苏州瑞泰信息技术有限公司">
          <rt-tag icon="rt-base-account-number">CS00000098</rt-tag>
          <rt-tag icon="rt-base-account-star" color-type="normal"
            >重要客户</rt-tag
          >
        </rt-header-title>
        <template slot="btn">
          <rt-header-button-group :max-btns="3">
            <rt-button icon-name="rt-base-save">
              下载图片咯
            </rt-button>
            <rt-button icon-name="rt-base-save">
              保存
            </rt-button>
            <rt-button icon-name="rt-base-save">
              保存
            </rt-button>
            <rt-button
              :plain="false"
              icon-name="rt-base-disable"
              type="primary"
            >
              停用
            </rt-button>
          </rt-header-button-group>
          <rt-button type="primary">主要</rt-button>
        </template>
      </rt-detail-header>
    </rt-header>
    <rt-header>
      <rt-list-header>
        <rt-list-dropdown
          :menu-list="menuList"
          :drop-index="3"
          icon="rt-base-contact"
        />
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
          <rt-button type="primary">主要</rt-button>
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
          </rt-row>
        </rt-form>
        <template slot="btns">
          <rt-button>重置</rt-button>
          <rt-button :plain="false" type="primary">确定</rt-button>
        </template>
      </rt-list-filter>
    </rt-header>
    <rt-content-tabs v-model="tabIndex" class="cus-header">
      <rt-tab-pane>
        <rt-badge slot="label" is-dot>默认带点</rt-badge>
      </rt-tab-pane>
      <rt-tab-pane>
        <rt-badge slot="label" is-dot type="success">成功带点</rt-badge>
      </rt-tab-pane>
      <rt-tab-pane>
        <rt-badge slot="label" value="9">默认数字</rt-badge>
      </rt-tab-pane>
      <rt-tab-pane>
        <rt-badge slot="label" value="99" type="success">成功数字</rt-badge>
      </rt-tab-pane>
    </rt-content-tabs>
    <rt-content>
      <div class="wrapper">
        <rt-table-dropdown
          :menu-list="[
            { name: '菜单一' },
            { name: '菜单二' },
            { name: '菜单三' }
          ]"
          icon="rt-base-account"
        />
      </div>
      <div class="wrapper">
        <rt-section icon="rt-base-account" title="标签样式">
          标签样式
        </rt-section>
      </div>
      <div class="wrapper" style="width: 75%">
        <rt-section icon="rt-base-account" title="标签样式">
          标签样式
        </rt-section>
      </div>
      <div class="wrapper" style="width: 33.33%">
        <rt-section icon="rt-base-account" title="标签样式">
          标签样式
        </rt-section>
      </div>
      <div class="wrapper sub-wrapper">
        <rt-sub-section title="三级节点哦哦哦啊啊" />
      </div>
      <div class="wrapper sub-wrapper" style="width: 75%">
        <rt-sub-section title="三级节点哦哦哦啊啊" />
      </div>
      <div class="wrapper sub-wrapper" style="width: 33.33%">
        <rt-sub-section title="三级节点哦哦哦啊啊" />
      </div>

      <div class="wrapper">
        <rt-content-tabs v-model="tabIndex" size="small">
          <rt-tab-pane>
            <rt-badge slot="label" is-dot>默认带点</rt-badge>
          </rt-tab-pane>
          <rt-tab-pane>
            <rt-badge slot="label" is-dot type="success">成功带点</rt-badge>
          </rt-tab-pane>
          <rt-tab-pane>
            <rt-badge slot="label" value="9">默认数字</rt-badge>
          </rt-tab-pane>
          <rt-tab-pane>
            <rt-badge slot="label" value="99" type="success">成功数字</rt-badge>
          </rt-tab-pane>
        </rt-content-tabs>
      </div>
      <div class="wrapper" style="width: 75%">
        <rt-content-tabs v-model="tabIndex">
          <rt-tab-pane>
            <rt-badge slot="label" is-dot>默认带点</rt-badge>
          </rt-tab-pane>
          <rt-tab-pane>
            <rt-badge slot="label" is-dot type="success">成功带点</rt-badge>
          </rt-tab-pane>
          <rt-tab-pane>
            <rt-badge slot="label" value="9">默认数字</rt-badge>
          </rt-tab-pane>
          <rt-tab-pane>
            <rt-badge slot="label" value="99" type="success">成功数字</rt-badge>
          </rt-tab-pane>
        </rt-content-tabs>
      </div>
    </rt-content>
  </rt-view>
</template>
<script>
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
  }
};
</script>
<style lang="less" scoped>
.rt-view-wrapper {
  height: 100%;
}
.wrapper {
  margin: 10px 0;
  background: #fff;
}
.rt-section .section-body {
  padding: 0;
}

.cus-header {
  margin-bottom: 16px;
}
</style>
