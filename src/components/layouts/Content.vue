<template>
    <div class="content-wrapper p-lr-10">
      <h3>{{headingTitle}}</h3>
      <UsersList></UsersList>
    </div>
</template>

<script>
import UsersList from '../users/List';
export default {
  name: 'Content',
    components: {
      UsersList,  
  },
  data: function(){
    return{
      headingTitle: 'Users'
    }
  }
}
</script>