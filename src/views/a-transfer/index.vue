<template>
  <div>
    <tree-transfer :from_data='fromData' :to_data='toData' :defaultProps="{label:'label'}" :mode='mode' height='540px' openAll>
    </tree-transfer>
    <a-button type="primary">primary</a-button>
  </div>
</template>

<script>
import treeTransfer from 'el-tree-transfer'; // 引入
export default {
  data() {
    return {
      mode: 'transfer',
      fromData: [
        {
          id: '1',
          pid: 0,
          label: '一级 1',
          children: [
            {
              id: '1-1',
              pid: '1',
              label: '二级 1-1',
              children: []
            },
            {
              id: '1-2',
              pid: '1',
              label: '二级 1-2',
              children: [
                {
                  id: '1-2-1',
                  pid: '1-2',
                  children: [],
                  label: '二级 1-2-1'
                },
                {
                  id: '1-2-2',
                  pid: '1-2',
                  children: [],
                  label: '二级 1-2-2'
                }
              ]
            }
          ]
        }
      ],
      toData: []
    };
  },
  components: { treeTransfer }, // 注册
  created() {
    this.add();
  },
  methods: {
    add() {
      new Promise(function (resolve, reject) {
        var a = 0;
        var b = 1;
        if (b == 0) reject('no operate');
        else resolve(a / b);
      })
        .then(function (value) {
          console.log('a / b =' + value);
        })
        .catch(function (err) {
          console.log(err);
        })
        .finally(function () {
          console.log('end');
        });
    }
  }
};
</script>

<style lang="less" scoped>
</style>