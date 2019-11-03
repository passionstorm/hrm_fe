<template>
<header class="main-header">
    <a href="#" class="logo">
        <span class="logo-mini">HRM</span>
        <span class="logo-lg"><b>COMPANY</b>name</span>
    </a>
    <nav class="navbar navbar-static-top">
        <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </a>

        <div class="navbar-custom-menu">
            <ul class="nav navbar-nav">
            <li class="dropdown user user-menu">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <img src="images/admin-avatar-512-512.png" class="user-image" alt="User Image">
                <span class="hidden-xs">#username</span>
                </a>
                <ul class="dropdown-menu">
                <li class="user-header">
                    <img src="images/admin-avatar-512-512.png" class="img-circle" alt="User Image">
                    <p>
                    # - Web Developer
                    <small>Member since #</small>
                    </p>
                </li>
                <li class="user-body">
                    <div class="row">
                        <div class="col-xs-4 text-center">
                            <a href="#">Followers</a>
                        </div>
                        <div class="col-xs-4 text-center">
                            <a href="#">Sales</a>
                        </div>
                        <div class="col-xs-4 text-center">
                            <a href="#">Friends</a>
                        </div>
                    </div>
                </li>
                <li class="user-footer">
                    <div class="pull-left">
                    <a href="users/edit/#" class="btn btn-default btn-flat">Profile</a>
                    </div>
                    <div class="pull-right">
                    <a href="logout" class="btn btn-default btn-flat">Sign out</a>
                    </div>
                </li>
                </ul>
            </li>
            <li>
                <a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
            </li>
            </ul>
        </div>
    </nav>
</header>
</template>

<script>
export default {
  name: 'Header',

}
</script>