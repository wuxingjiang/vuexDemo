<template>
  <div id="WeChat" class="WeChat">
    <x-header>直播室</x-header>
    <tab
    :line-width="1"
    custom-bar-width="117px"
    active-color="#ee5050"
    defaultColor="#444"
    bar-active-color="#ee5050"
    v-model="index">
      <tab-item 
      class="vux-center" 
      :selected="defaultSelected === item" 
      v-for="(item, index) in list" 
      @click="defaultSelected = item"
      :key="index">
        {{item}}
      </tab-item>
    </tab>
    <swiper v-model="index" height="100px" :show-dots="false">
      <swiper-item v-for="(item, index) in list" :key="index">
        <div class="tab-swiper vux-center">{{item}} Container</div>
      </swiper-item>
    </swiper>

    <group title="使用icon代替title">
      <x-input title="必须输入2333"  placeholder="I'm placeholder">
        <i slot="label" style="color:red;font-style:normal;">☻</i>
        <flexbox slot="right">
          <flexbox-item>
            <button mini="true">发送</button>
          </flexbox-item>
          <flexbox-item>
            <button  mini="true">+</button>
          </flexbox-item>
        </flexbox>
      </x-input>
     
    </group>
  </div>

</template>
<script>
import {XHeader, Tab, TabItem, Swiper, SwiperItem, XInput, Group, XButton,Flexbox, FlexboxItem} from 'vux'

const list = () => ['直播观点', '互动交流']
export default {
  name: 'WeChat',
  data() {
    return {
      msg: 'this weChat',
      defaultSelected: '直播观点',
      index: 0,
      list: list(),
    };
  },
  methods: {
  },
  components: {
    XHeader,
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    Group,
    XInput,
    XButton,
    Flexbox,
    FlexboxItem
  }
}
</script>
<style lang="less">
  .WeChat {

  }
</style>