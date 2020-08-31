<template>
  <div>
    <div class="box">
      <h1>欢迎登录</h1>
      <input type="text" v-model="user" placeholder="请输入用户名" />
      <br />
      <input type="password" v-model="pass" placeholder="请输入密码" />
      <br />
      <button @click="login">登录</button>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      user: "",
      pass: "",
    };
  },
  methods: {
    login() {
      let data = {
        username: this.user,
        password: this.pass,
      };
      if(this.user!=''&&this.pass!=''){
        this.$http.fetchLogin(data).then((res) => {
        if (res.err == 0) {
          this.$message({
            showClose: true,
            message: "恭喜你登录成功！！！",
            type: "success",
          });
          this.$router.push("/user");
        } else {
          this.$message({
            showClose: true,
            message: "账号或密码错误！！！",
            type: "error",
          });
        }
      });
      }else{
        this.$message({
            showClose: true,
            message: "用户名或密码请填写完整！！！",
            type: "error",
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
body{
    background:skyblue;
}
.box {
  width: 500px;
  height: 350px;
  border-radius: 20px;
  background: white;
  margin: 100px auto;
  text-align: center;
  padding-top: 20px;
  input {
    width: 250px;
    height: 40px;
    border-radius: 5px;
    margin-top: 30px;
    font-size: 20px;
    border: 1px #ccc solid;
  }
  button {
    width: 100px;
    height: 40px;
    font-size: 20px;
    border-radius: 5px;
    margin-top: 40px;
    background: skyblue;
    border: 1px #ccc solid;

  }
}
</style>