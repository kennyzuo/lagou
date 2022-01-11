<template>
  <rt-view>
    <rt-header>
      <rt-detail-header>
        <rt-header-icon slot="icon" icon="rt-base-account" />
        <rt-header-title
          title="弹窗示例"
          sub-title="苏州瑞泰信息技术有限公司"
        />
      </rt-detail-header>
    </rt-header>
    <rt-content>
      <rt-card>
        <rt-section icon="rt-base-account" title="弹窗示例">
          <div class="dialog-wrapper">
            <rt-button type="plain" @click="click('large')">弹窗大</rt-button>
            <rt-button type="plain" @click="click('normal')">弹窗中</rt-button>
            <rt-button type="plain" @click="click('small')">弹窗小</rt-button>
          </div>
        </rt-section>
      </rt-card>
      <rt-card>
        <rt-section icon="rt-base-account" title="提示">
          <div class="dialog-wrapper">
            <rt-button type="plain" @click="showInfo">信息提示</rt-button>
          </div>
        </rt-section>
      </rt-card>
    </rt-content>
    <rt-dialog v-model="dialogVisible" :size="size" title="弹框大" />
  </rt-view>
</template>
<script>
export default {
  data() {
    return {
      dialogVisible: false,
      size: 'normal',
      percentage: 0
    };
  },
  methods: {
    download() {
      this.percentage += 10;
      if (this.percentage === 100) {
        setTimeout(() => {
          this.percentage = 0;
        }, 1000);
      }
    },
    click(size) {
      console.log(size);
      this.size = size;
      this.$nextTick(() => {
        this.dialogVisible = true;
      });
    },
    showInfo() {
      rt.showErrorToast('hahah');
    },
    showError() {
      rt.showSuccessToast('hahah');
    },
    loading() {
      rt.showLoadingToast('dd');
      // setTimeout(() => {
      //   rt.hideLoadingToast();
      // }, 2000);
    }
  }
};
</script>
<style>
.dialog-wrapper {
  padding-bottom: 16px;
}
</style>
