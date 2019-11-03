<template>
    <!-- Left side column. contains the sidebar -->
    <aside class="main-sidebar">
        <!-- sidebar: style can be found in sidebar.less -->
        <section class="sidebar">
            <!-- Sidebar user panel -->
            <div class="user-panel">
                <div class="pull-left image">
                    <img src="images/admin-avatar-512-512.png" class="img-circle">
                </div>
                <div class="pull-left info">
                    <p>###username</p>
                    <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
                </div>
            </div>
            <!-- sidebar menu: : style can be found in sidebar.less -->
            <ul class="sidebar-menu" data-widget="tree">
                <li class="header">MAIN NAVIGATION</li>
                <li>
                    <a href="#">
                        <span>Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>Users</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>Projects</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>OT</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>Vacation</span>
                    </a>
                </li>
            </ul>
        </section>
        <!-- /.sidebar -->
    </aside>
</template>

<script>
export default {
  name: 'Sidebar',

}
</script>