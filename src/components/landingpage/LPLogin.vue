<template>
  <div class="modal fade" id="loginModal" role="dialog">
    <div class="modal-dialog modal-custom1">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title text-center text-bold">Login</h4>
        </div>
        <div class="modal-body p-0">
            <form class="form-horizontal" :action="apiServer + apiLogin" method="post">
                <div class="form-group has-feedback m-lr-15">
                    <input type="text" class="form-control" placeholder="username" name="username" autocomplete="off">
                    <span class="fas fa-user  form-control-feedback"></span>
                </div>
                <div class="form-group has-feedback m-lr-15">
                    <input type="text" class="form-control" placeholder="password" name="password" autocomplete="off">
                    <span class="fas fa-lock  form-control-feedback"></span>
                </div>
                <div class="modal-footer p-t-0">
                  <button class="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LPLogin',
  props: ['apiServer', 'apiLogin'],
}
</script>

<style scoped>
    div.modal-custom1{
        width: 450px
    }
    .ctn-custom-1{
        display: flex;
    }
    .box-custom-1{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 30px;
        width: 30px;
        border: 1px solid #b0b2b5;
        border-right: none;
    }
    .custom-color-1{
        color: #b0b2b5;
    }
    .form-control-c-1{
        display: inline-block;
        border: 1px solid #b0b2b5;
        border-left: none;
    }
</style>