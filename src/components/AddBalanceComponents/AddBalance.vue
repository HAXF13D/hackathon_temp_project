<template>
  <CustomHeader title="Пополнить баланс пользователя" class="pt-0 my-4" />
  <div id="rating" class="container-fluid justify-content-center my-4">
    <div class="user-wallets mx-1 pb-1">
      <div class="row user-wallets mx-1">
        <UserSearch/>
      </div>
      <div class="pt-2">
        <table class="table table-hover my-3 pb-1">
          <thead>
            <tr>
              <th 
                scope="col" 
                class="ps-3 disabled header-text pb-1 rating-text sort-choosedt"
                @click="sortUserName()"><p class="mb-0 rating-text">Пользователь</p>
              </th>

              <th 
                scope="col" 
                class="pe-3 disabled header-text pb-1 rating-text sort-choosedt text-end" 
                @click="sortBalance()"><p class="mb-0 rating-text">Баланс</p>
              </th>
            </tr>
          </thead>
          <UserCard 
              v-for="user in usersArray"
              v-bind:key="user.id"
              v-bind:user="user"
          ></UserCard>
        </table>        
      </div>
    </div>
    
    <div class=".d-block .d-sm-none" style="margin-bottom: 100px;"></div>
  </div>
</template>

<script>

  import CustomHeader from '@/components/CustomHeader.vue';
  import UserSearch from '@/components/AddBalanceComponents/UserSearch.vue';
  import UserCard from '@/components/AddBalanceComponents/UserCard.vue';
  import axios from 'axios';

  export default {
    name: 'rating',
    data: () => ({
      usersArray: [],
      userNameSort: "NO",
      userBalanceSort: "INCREASE",
      baseUrl: 'http://127.0.0.1:5000'
    }),
    components: {
      CustomHeader,
      UserSearch,
      UserCard
    },
    methods: {
      async getDataFromServer(){
        try{
          let params = {
            userBalanceSort: this.userBalanceSort,
            userNameSort: this.userNameSort
          };
          console.log(this.userBalanceSort);
          console.log(this.userNameSort);
          await axios.post(this.baseUrl + '/api/rating', params).then(response => (this.usersArray = response.data.resp));
          console.log(this.usersArray)
        }
        catch(error){
          console.log(error);
        }
      }
    },
    created:
      async function(){
        this.getDataFromServer();
      }
  }
</script>

<style scoped>
  @media screen and (min-width: 576px) {
      #rating {
          padding-right: 3rem;
          padding-left: 5rem;
      }
  }

  @media screen and (min-width: 768px) {
      #rating {
          padding-right: 7rem;
          padding-left: 7rem;
      }
  }

  @media screen and (min-width: 1200px) {
      #rating {
          padding-right: .5rem;
          padding-left: 1rem;
          width: 1100px;
      }
  }
  .line{
    border-bottom: 1px;
    border-style: solid;
    border-color: black;
  }
  .rating-text{
    font-size: 1rem;
  }
</style>

<style>
  .user-wallets{
    background-color: white;
    border-radius: 16px;
  }
</style>