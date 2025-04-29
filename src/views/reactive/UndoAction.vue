<template>
  <div class="container">
    <h2 class="form-title">产品服务申请表</h2>
    <el-form label-width="auto" style="max-width: 600px">
      <el-form-item label="申请人姓名">
        <el-input
          :model-value="state.applicantName"
          @input="(value: State['applicantName']) => handleUpdate(value, 'applicantName')"
          placeholder="请填写申请人的全名"
        />
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input
          :model-value="state.contactPhone"
          @input="(value: State['contactPhone']) => handleUpdate(value, 'contactPhone')"
          placeholder="请填写可联系的手机号码"
        />
      </el-form-item>
      <el-form-item label="公司名称">
        <el-input
          :model-value="state.companyName"
          @input="(value: State['companyName']) => handleUpdate(value, 'companyName')"
          placeholder="请填写所在公司的全称"
        />
      </el-form-item>
      <el-form-item label="产品类别">
        <el-select
          :model-value="state.productCategory"
          @change="(value: State['productCategory']) => handleUpdate(value, 'productCategory')"
          placeholder="请选择需要申请的产品类型"
        >
          <el-option
            v-for="{ label, value } in productCategoryOptions"
            :key="label"
            :label="label"
            :value="value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="是否需要发票">
        <el-switch
          :model-value="state.invoiceRequired"
          @change="(value: State['invoiceRequired']) => handleUpdate(value, 'invoiceRequired')"
        />
      </el-form-item>
      <el-form-item label="附加服务">
        <el-checkbox-group
          :model-value="state.additionalServices"
          @change="
            (value: State['additionalServices']) => handleUpdate(value, 'additionalServices')
          "
        >
          <el-checkbox
            v-for="{ label, value } in additionalServicesOptions"
            :key="label"
            :value="value"
            name="additionalServices"
            >{{ label }}</el-checkbox
          >
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="支付方式">
        <el-radio-group
          :model-value="state.paymentMethod"
          @change="(value: State['paymentMethod']) => handleUpdate(value, 'paymentMethod')"
        >
          <el-radio v-for="{ label, value } in paymentMethodOptions" :key="value" :value="value">
            {{ label }}</el-radio
          >
        </el-radio-group>
      </el-form-item>
      <el-form-item label="特殊需求">
        <el-input
          :model-value="state.specialRequests"
          @input="(value: State['specialRequests']) => handleUpdate(value, 'specialRequests')"
          type="textarea"
          placeholder="请在此详细说明特殊需求或备注信息"
        />
      </el-form-item>
      <el-form-item>
        <div class="form-action">
          <el-button type="primary">保存</el-button>
          <el-button :disabled="!isUndoAvailable" @click="undo">撤销</el-button>
          <el-button @click="redo" type="danger">重置</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { useImmer } from './useImmer'

const productCategoryOptions = [
  { label: '基础版', value: 'Basic' },
  { label: '专业版', value: 'Professional' },
  { label: '企业版', value: 'Enterprise' },
  { label: '定制版', value: 'Custom' },
]

const additionalServicesOptions = [
  { label: '技术支持', value: 'TechnicalSupport' },
  { label: '培训服务', value: 'TrainingService' },
  { label: '数据迁移', value: 'DataMigration' },
  { label: '7×24小时运维', value: '724Operations' },
]

const paymentMethodOptions = [
  { label: '支付宝', value: 'Alipay' },
  { label: '银行转账', value: 'BankTransfer' },
  { label: '信用卡', value: 'CreditCard' },
  { label: '对公账户', value: 'CorporateAccount' },
]

interface State {
  applicantName: string
  contactPhone: string
  companyName: string
  productCategory: string
  invoiceRequired: boolean
  additionalServices: string[]
  paymentMethod: string
  specialRequests: string
}

const { state, updateState, undo, isUndoAvailable, redo } = useImmer<State>({
  applicantName: '',
  contactPhone: '',
  companyName: '',
  productCategory: '',
  invoiceRequired: false,
  additionalServices: [],
  paymentMethod: '',
  specialRequests: '',
})

function handleUpdate<K extends keyof State>(value: State[K], field: K) {
  updateState((draft) => {
    ;(draft[field] as State[K]) = value
  })
}
</script>
<style lang="scss" scoped>
.container {
  padding: 15px 30px;
  .form-title {
    margin-bottom: 20px;
    font-size: 20px;
  }
  .form-action {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>
