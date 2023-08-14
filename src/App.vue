<script setup lang="ts">
import { onLaunch } from "@dcloudio/uni-app";
onLaunch(() => {
  let get_menu = uni.getStorageSync('MenuButton')
  if (!get_menu) {
    const res = uni.getMenuButtonBoundingClientRect()
    uni.setStorageSync('MenuButton', res)
  }
});
</script>
<style></style>
