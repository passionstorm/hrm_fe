<template>
    <div>
        <div class="box">
            <div class="box-body">
                <div class="row">
                    <div class="col-xs-8">
                        <table class="table table-bordered statistic">
                            <thead>
                                <tr>
                                    <th class="c-bg-1">Role</th>
                                    <th class="c-bg-2 t-white">Active</th>
                                    <th class="c-bg-2 t-white">Leave</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Admin</td>
                                    <td>100*</td>
                                    <td>100*</td>
                                </tr>
                                <tr>
                                    <td>Staff</td>
                                    <td>100*</td>
                                    <td>100*</td>
                                </tr>
                                <tr>
                                    <td>Member</td>
                                    <td>100*</td>
                                    <td>100*</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="col-xs-4">
                        <div class="clearfix"></div>
                        <div>
                            <a href="#" class="btn btn-primary" style="float: right">NEW USER</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="box">
            <div class="box-body">
                <div class="nav-pill-c-1">
                    <a class="pill w-per-50 active" data-toggle="pill" href="#home">Manager</a>
                    <a class="pill w-per-50" data-toggle="pill" href="#menu1">Member</a>
                </div>
                <div class="tab-content">
                    <div id="home" class="tab-pane fade in active">
                        <table class="table table-bordered statistic m-t-20">
                            <thead>
                                <tr>
                                    <th class="c-bg-1 w-80"></th>
                                    <th class="c-bg-1">Role</th>
                                    <th class="c-bg-1 w-200">Office</th>
                                    <th class="c-bg-1 w-200">Experience</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="v-c"><img src="images/member-avartar-128-128.png" width="50" height="50" alt="user image"></td>
                                    <td class="v-c">Admin</td>
                                    <td class="v-c">100*</td>
                                    <td class="v-c">100*</td>
                                </tr>
                                <tr>
                                    <td class="v-c"><img src="images/member-avartar-128-128.png" width="50" height="50" alt="user image"></td>
                                    <td class="v-c">Staff1</td>
                                    <td class="v-c">100*</td>
                                    <td class="v-c">100*</td>
                                </tr>
                                <tr>
                                    <td class="v-c"><img src="images/member-avartar-128-128.png" width="50" height="50" alt="user image"></td>
                                    <td class="v-c">Staff2</td>
                                    <td class="v-c">100*</td>
                                    <td class="v-c">100*</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div id="menu1" class="tab-pane fade">
                        <table class="table table-bordered statistic m-t-20">
                            <thead>
                                <tr>
                                    <th class="c-bg-1 w-80"></th>
                                    <th class="c-bg-1">Role</th>
                                    <th class="c-bg-1 w-200">Office</th>
                                    <th class="c-bg-1 w-200">Experience</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="v-c"><img src="images/member-avartar-128-128.png" width="50" height="50" alt="user image"></td>
                                    <td class="v-c">Member</td>
                                    <td class="v-c">100*</td>
                                    <td class="v-c">100*</td>
                                </tr>
                                <tr>
                                    <td class="v-c"><img src="images/member-avartar-128-128.png" width="50" height="50" alt="user image"></td>
                                    <td class="v-c">Member</td>
                                    <td class="v-c">100*</td>
                                    <td class="v-c">100*</td>
                                </tr>
                                <tr>
                                    <td class="v-c"><img src="images/member-avartar-128-128.png" width="50" height="50" alt="user image"></td>
                                    <td class="v-c">Member</td>
                                    <td class="v-c">100*</td>
                                    <td class="v-c">100*</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'UsersList',

}
</script>


<style scoped>
    .c-bg-1{
        background-color: #eeeeee
    }
    .c-bg-2{
        background-color: rgb(153, 153, 153);
    }
    .center-vertical{
        display: flex;
        align-items: center;
    }
    .cst1{
        width: 100%;
        height: 100%;
    }
    .v-c{
        vertical-align: middle;
    }
</style>