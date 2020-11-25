<template>
  <div id="transition-vue">
    <div class="transition-vue__first">
      <button @click="show = !show">click me</button>
      <transition name="fale">
        <p v-if="show">hello</p>
      </transition>
      <p>这是我在分支上的测试</p>
      <p :class="['color','font',flag?'bgc':'']">我在尝试vscode上的git使用</p>
      <hr />
      <p :class="['color','font',{'bgc':true}]">我在尝试vscode上的git使用</p>
      <hr />
      <p :class="[obj , obj2]">我在尝试vscode上的git使用</p>
      <hr />
      <input type="text" @keyup.enter="myFun">
      <p>{{name | format}}</p>
      <hr />
      <button @click="toggle">切换显示</button>
      <transition name="one" appear>
        <div class="box" v-show="isShow"></div>
      </transition>
    </div>
    <template>
      <el-select v-model="value" placeholder="请选择" @change='change'>
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="[item.value,item.label]">
        </el-option>
      </el-select>
    </template>
  </div>
</template>
<script>
export default {
  name: 'transition-vue',
  data() {
    return {
      show: true,
      flag: false,
      isShow: true,
      name: '桥栏明月蓝',
      obj: {
        color: true,
        font: false
      },
      obj2: {
        bgc: false
      },
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: ''
    };
  },
  computed: {},
  filters: {
    format(value) {
      const a = Date.now();
      value = value + '倚天辛';
      return value;
    }
  },
  //自定义指令
  directives: {},
  methods: {
    myFun() {
      alert('hi');
    },
    toggle() {
      this.isShow = !this.isShow;
    },
    change(value) {
      console.log(value);
    }
  }
};
</script>
<style lang="less" scoped>
.one-enter {
  opacity: 0;
  transform: translateX(20px);
}
.one-enter-active {
  transition: all 0.9s;
}
.one-enter-to {
  opacity: 1;
}
.one-leave {
  opacity: 1;
}
.one-leave-active {
  transform: translateX(20px);
  transition: all 0.3s;
}
.one-leave-to {
  opacity: 0;
}
.box {
  width: 100px;
  height: 100px;
  background-color: blue;
}
.fale-enter-active {
  transition: all 0.4s ease;
}
.fale-leave-active {
  transform: translate(20px);
  transition: all 0.4s ease;
}
.fale-enter,
.fale-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
.font {
  font-size: 30px;
}
.color {
  color: palevioletred;
}
.bgc {
  background-color: aquamarine;
}
</style>