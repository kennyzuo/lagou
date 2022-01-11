<template>
  <rt-view>
    <rt-header>
      <rt-detail-header>
        <rt-header-icon slot="icon" icon="rt-base-account" />
        <rt-header-title
          title="按钮示例"
          sub-title="苏州瑞泰信息技术有限公司"
        />
      </rt-detail-header>
    </rt-header>
    <rt-content>
      <rt-card>
        <rt-section icon="rt-base-account" title="基础按钮">
          <rt-row :gutter="0">
            <rt-col :span="4">
              <p class="title">默认</p>
              <div style="margin-bottom: 5px">
                <rt-button>默认</rt-button>
                <rt-button type="primary">主要</rt-button>
                <rt-button type="plain">通用</rt-button>
              </div>
            </rt-col>
            <rt-col :span="4">
              <p class="title">成功</p>
              <rt-button color-type="success">默认</rt-button>
              <rt-button color-type="success" type="primary">主要</rt-button>
              <rt-button color-type="success" type="plain">通用</rt-button>
            </rt-col>
            <rt-col :span="4">
              <p class="title">警告</p>
              <rt-button color-type="warning">默认</rt-button>
              <rt-button color-type="warning" type="primary">主要</rt-button>
              <rt-button color-type="warning" type="plain">通用</rt-button>
            </rt-col>
            <rt-col :span="4">
              <p class="title">危险</p>
              <rt-button color-type="danger">默认</rt-button>
              <rt-button color-type="danger" type="primary">主要</rt-button>
              <rt-button color-type="danger" type="plain">通用</rt-button>
            </rt-col>
            <rt-col :span="4">
              <p class="title">信息</p>
              <rt-button color-type="info">默认</rt-button>
              <rt-button color-type="info" type="primary">主要</rt-button>
              <rt-button color-type="info" type="plain">通用</rt-button>
            </rt-col>
          </rt-row>

          <rt-row :gutter="0">
            <rt-col :span="4">
              <rt-button disabled>默认</rt-button>
              <rt-button disabled type="primary">主要</rt-button>
              <rt-button disabled type="plain">通用</rt-button>
            </rt-col>
            <rt-col :span="4">
              <rt-button disabled color-type="success">默认</rt-button>
              <rt-button disabled color-type="success" type="primary">
                主要
              </rt-button>
              <rt-button disabled color-type="success" type="plain">
                通用
              </rt-button>
            </rt-col>
            <rt-col :span="4">
              <rt-button disabled color-type="warning">默认</rt-button>
              <rt-button disabled color-type="warning" type="primary">
                主要
              </rt-button>
              <rt-button disabled color-type="warning" type="plain">
                通用
              </rt-button>
            </rt-col>
            <rt-col :span="4">
              <rt-button disabled color-type="danger">默认</rt-button>
              <rt-button disabled color-type="danger" type="primary">
                主要
              </rt-button>
              <rt-button disabled color-type="danger" type="plain">
                通用
              </rt-button>
            </rt-col>
            <rt-col :span="4">
              <rt-button disabled color-type="info">默认</rt-button>
              <rt-button disabled color-type="info" type="primary">
                主要
              </rt-button>
              <rt-button disabled color-type="info" type="plain">
                通用
              </rt-button>
            </rt-col>
          </rt-row>
        </rt-section>
      </rt-card>
      <rt-card>
        <rt-section icon="rt-base-account" title="图标按钮">
          <rt-row :gutter="0">
            <rt-col :span="6">
              <p class="title">默认-文字左边带图标</p>
              <div class="button-wrapper">
                <rt-button icon-name="rt-base-edit">保存</rt-button>
                <rt-button icon-name="rt-base-edit" type="primary"
                  >主要</rt-button
                >
                <rt-button icon-name="rt-base-edit" type="plain"
                  >通用</rt-button
                >
              </div>
            </rt-col>
            <rt-col :span="6">
              <p class="title">成功-文字右边带图标</p>
              <div class="button-wrapper">
                <rt-button suffix-icon="rt-base-edit" color-type="success"
                  >默认</rt-button
                >
                <rt-button
                  suffix-icon="rt-base-edit"
                  color-type="success"
                  type="primary"
                  >主要</rt-button
                >
                <rt-button
                  suffix-icon="rt-base-edit"
                  color-type="success"
                  type="plain"
                  >通用</rt-button
                >
              </div>
            </rt-col>

            <rt-col :span="4">
              <p class="title">危险-带边框图标</p>
              <div class="button-wrapper">
                <rt-button suffix-icon="rt-base-edit" color-type="danger" />
                <rt-button suffix-icon="rt-base-edit" color-type="success" />
                <rt-button suffix-icon="rt-base-edit" color-type="danger" />
                <rt-button
                  suffix-icon="rt-base-edit"
                  color-type="danger"
                  type="plain"
                />
              </div>
            </rt-col>

            <rt-col :span="4">
              <p class="title">文字 + 图标</p>
              <div class="button-wrapper">
                <rt-button text>默认</rt-button>
                <rt-button type="plain" text>默认</rt-button>
                <rt-button suffix-icon="rt-base-edit" text>默认</rt-button>
              </div>
            </rt-col>
            <rt-col :span="4">
              <p class="title">纯图标</p>
              <div style="display: flex; align-items: center">
                <rt-button icon-name="rt-base-edit" text />
                <rt-button
                  icon-name="rt-base-delete"
                  color-type="success"
                  type="plain"
                  text
                />
              </div>
            </rt-col>
          </rt-row>

          <rt-row :gutter="0">
            <rt-col :span="6">
              <div class="button-wrapper">
                <rt-button icon-name="rt-base-save" disabled>保存</rt-button>
                <rt-button icon-name="rt-base-edit" disabled type="primary"
                  >主要</rt-button
                >
                <rt-button icon-name="rt-base-edit" disabled type="plain"
                  >通用</rt-button
                >
              </div>
            </rt-col>
            <rt-col :span="6">
              <div class="button-wrapper">
                <rt-button
                  suffix-icon="rt-base-edit"
                  disabled
                  color-type="success"
                  >默认</rt-button
                >
                <rt-button
                  suffix-icon="rt-base-edit"
                  disabled
                  color-type="success"
                  type="primary"
                >
                  主要
                </rt-button>
                <rt-button
                  suffix-icon="rt-base-edit"
                  disabled
                  color-type="success"
                  type="plain"
                >
                  通用
                </rt-button>
              </div>
            </rt-col>
            <rt-col :span="4">
              <div class="button-wrapper">
                <rt-button disabled suffix-icon="rt-base-edit" />
                <rt-button
                  disabled
                  suffix-icon="rt-base-edit"
                  color-type="success"
                />
                <rt-button
                  disabled
                  suffix-icon="rt-base-edit"
                  color-type="danger"
                />
                <rt-button
                  disabled
                  suffix-icon="rt-base-edit"
                  color-type="danger"
                  type="plain"
                />
              </div>
            </rt-col>
            <rt-col :span="4">
              <div class="button-wrapper">
                <rt-button disabled text>默认</rt-button>
                <rt-button disabled type="plain" text>默认</rt-button>
                <rt-button disabled icon-name="rt-base-edit" text
                  >默认</rt-button
                >
              </div>
            </rt-col>
            <rt-col :span="4">
              <div style="display: flex; align-items: center">
                <rt-button
                  disabled
                  icon-name="rt-base-edit"
                  color-type="success"
                  text
                />
                <rt-button
                  disabled
                  icon-name="rt-base-edit"
                  color-type="success"
                  type="plain"
                  text
                />
              </div>
            </rt-col>
          </rt-row>
        </rt-section>
      </rt-card>

      <rt-card>
        <rt-section icon="rt-base-account" title="按钮组">
          <rt-row :gutter="0">
            <rt-col :span="6">
              <p>头部按钮组</p>
              <rt-header-button-group :max-btns="3">
                <rt-button icon-name="rt-base-save">
                  保存
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
            </rt-col>

            <rt-col :span="6">
              <p>表头按钮组</p>
              <rt-button-group>
                <rt-button icon-name="rt-base-edit" />
                <rt-button icon-name="rt-base-delete" />
                <rt-button icon-name="rt-base-plus_bold" />
              </rt-button-group>
            </rt-col>
          </rt-row>
        </rt-section>
      </rt-card>
      <rt-card>
        <rt-section icon="rt-base-account" title="其它">
          <rt-row :gutter="40">
            <rt-col :span="16">
              <rt-detail-button prefix-icon="rt-base-edit">
                添加下一行
              </rt-detail-button>
            </rt-col>
            <rt-col :span="8">
              <rt-detail-button prefix-icon="rt-base-edit">
                添加下一行
              </rt-detail-button>
            </rt-col>
          </rt-row>
          <rt-row :gutter="40">
            <rt-col :span="16">
              <rt-detail-button disabled prefix-icon="rt-base-edit">
                添加下一行
              </rt-detail-button>
            </rt-col>
            <rt-col :span="8">
              <rt-detail-button disabled prefix-icon="rt-base-edit">
                添加下一行
              </rt-detail-button>
            </rt-col>
          </rt-row>
        </rt-section>
      </rt-card>
      <rt-card>
        <rt-section icon="rt-base-account" title="搜索组件">
          <rt-row :gutter="40">
            <rt-col :span="6">
              <rt-search v-model="search1" :more="false" />
            </rt-col>
            <rt-col :span="6">
              <rt-search v-model="search2" />
            </rt-col>
            <rt-col :span="12">
              <rt-query v-model="search1" />
            </rt-col>
          </rt-row>
        </rt-section>
      </rt-card>
    </rt-content>
  </rt-view>
</template>
<script>
export default {
  data() {
    return {
      search1: '',
      search2: ''
    };
  }
};
</script>
<style lang="scss">
p.title {
  padding: 10px 0;
}
.button-wrapper {
  display: flex;
  align-items: center;
  .rt-button {
    margin-right: 4px;
  }
}
.el-row {
  margin-bottom: 4px;
}
</style>
