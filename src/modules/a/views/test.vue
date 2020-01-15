<template>
  <div>
    <h2>HTTP-Request</h2>
    <button @click="sendGet()">GET</button>
    <span>&emsp;&emsp;</span>
    <button @click="sendPost()">POST</button>
    <span>&emsp;&emsp;</span>
    <button @click="sendPut()">PUT</button>
    <span>&emsp;&emsp;</span>
    <button @click="sendDelete()">DELETE</button>
    <hr />
  </div>
</template>

<script>
export default {
  name: "testPage",
  data() {
    return {};
  },
  methods: {
    sendGet: function() {
      this.$http
        .get("/api/test/get", {
          params: {
            param1: "get字符串",
            param2: 13131
          }
        })
        .then(res => {
          console.log(res);
        });
    },
    sendPost: function() {
      this.$http
        .post("/api/test/post", {
          param1: "post字符串",
          param2: 13131
        })
        .then(res => {
          console.log(res);
        });
    },
    sendPut: function() {
      this.$http
        .put("/api/test/put", {
          param1: "put字符串",
          param2: 13131
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    sendDelete: function() {
      this.$http
        .delete("/api/test/delete", {
          data: {
            param1: "delete字符串",
            param2: 13131
          }
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>