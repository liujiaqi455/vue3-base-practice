<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="name" label="商品名称" width="180" />
    <el-table-column prop="thumbnail" label="头图">
      <template #default="{ row: { name, thumbnail } }">
        <div class="product-thumbnail">
          <img :src="thumbnail" :alt="name" />
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="price" label="商品价格" width="180">
      <template
        #default="{
          row: {
            price: { original, currency },
          },
        }"
      >
        <span>{{ `${original}(${currency})` }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作" width="100">
      <el-button size="small">查看</el-button>
    </el-table-column>
  </el-table>
</template>
<script lang="ts" setup>
import { getGoodsList, type GoodType } from '@/api/goods'
let tableData: GoodType[] = []

const res = await getGoodsList()
tableData = res.data
</script>

<style lang="scss" scoped>
.product-thumbnail {
  width: 80px;
  height: 80px;
  img {
    display: inline-flex;
    width: 100%;
    height: 100%;
  }
}
</style>
