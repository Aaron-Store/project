<template>
  <el-row type="flex" justify="space-around" class="my-footer-link">
    <el-col :span="4">
      <dl @click="showLink">
        <dt>用户帮助</dt>
        <dd>申请退款</dd>
        <dd>常见问题</dd>
        <dd>用户协议</dd>
        <dd>隐私政策</dd>
        <dd>反诈骗公告</dd>
        <dd>消费者权益保障</dd>
      </dl>
      <dl @click="showLink">
        <dt>美团服务</dt>
        <dd>美团外卖</dd>
        <dd>美团酒店</dd>
        <dd>猫眼电影</dd>
        <dd>美团配送</dd>
        <dd>美团云</dd>
        <dd>大众点评</dd>
        <dd>美团民宿</dd>
        <dd>无人配送</dd>
      </dl>
    </el-col>
    <el-col :span="4">
      <dl @click="showLink">
        <dt>商家合作</dt>
        <dd>美食商家入驻(非外卖)</dd>
        <dd>美团外卖开店申请</dd>
        <dd>美团收银官网</dd>
        <dd>美团配送合作申请</dd>
        <dd>美团餐饮学院</dd>
        <dd>酒店商家入驻</dd>
        <dd>境内度假商家入驻</dd>
        <dd>综合商家入驻</dd>
        <dd>美团民宿房东商家入驻</dd>
        <dd>商家开票申请</dd>
        <dd>美团智能收银机</dd>
        <dd>美团餐饮开放平台</dd>
        <dd>美团收单</dd>
        <dd>免费使用美团排队</dd>
        <dd>快驴进货商家合作</dd>
        <dd>美团闪购商家入驻</dd>
      </dl>
    </el-col>
    <el-col :span="5">
      <dl @click="showLink">
        <dt>合作商招募</dt>
        <dd>美团外卖合作商招募</dd>
        <dd>到店餐饮合作商招募</dd>
        <dd>到店综合业务合作商招募</dd>
        <dd>美团联盟</dd>
        <dd>美团收银招募线上分销商</dd>
        <dd>美团收银合作商招募</dd>
        <dd>美团收单合作商招募</dd>
        <dd>美团充电宝合作商招募</dd>
      </dl>
      <dl @click="showLink">
        <dt>美团规则</dt>
        <dd>规则中心</dd>
        <dd>规则目录</dd>
        <dd>规则评议院</dd>
      </dl>
    </el-col>
    <el-col :span="4">
      <dl @click="showLink">
        <dt>关注美团</dt>
        <dd>美团新浪微博</dd>
      </dl>
      <dl @click="showLink">
        <dt>公司信息</dt>
        <dd>关于我们</dd>
        <dd>投资者关系</dd>
        <dd>加入我们</dd>
        <dd>商户诚信公约及管理办法</dd>
        <dd>保险经纪资质</dd>
      </dl>
      <dl @click="showLink">
        <dt>廉正举报</dt>
        <dd>廉正举报平台</dd>
      </dl>
      <dl @click="showLink">
        <dt>知识产权</dt>
        <dd>知识产权维权平台</dd>
      </dl>
    </el-col>
    <el-col :span="5">
      <dl @click="showLink">
        <dt>消费者服务热线</dt>
        <dd>外卖消费者：10109777</dd>
        <dd>猫眼消费者：10105335</dd>
        <dd>其他消费者：10107888</dd>
      </dl>
      <dl @click="showLink">
        <dt>商家服务热线</dt>
        <dd>外卖&餐饮商家：10105557</dd>
        <dd>休闲娱乐、丽人、ktv、教育、结婚、亲子、家装等商家：10100107</dd>
      </dl>

      <dl @click="showLink">
        <dt>投诉举报专区</dt>
        <dd>违法和不良信息举报电话：4006018900</dd>
        <dd>举报邮箱：tousujubao@meituan.com</dd>
        <dd>网上有害信息举报</dd>
      </dl>
      <dl @click="showLink">
        <dt>商家自助入驻美团入口</dt>
      </dl>
      <dl @click="showLink">
        <dt>供应商注册入口</dt>
      </dl>
    </el-col>
  </el-row>
</template>

<script>
export default {
  methods: {
    showLink(e) {
      let target = e.target;
      if (target.tagName !== "DD") return;
      this.$message({
        showClose: true,
        type:"success",
        message: "功能正在开发中",
      });
    },
  },
};
</script>