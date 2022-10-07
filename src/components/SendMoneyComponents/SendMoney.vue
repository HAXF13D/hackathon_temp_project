<template>
  <CustomHeader title="Наградить пользователя" class="pt-0 my-4" />
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
                v-if="userNameSort === 'INCRESE' " 
                scope="col" 
                class="ps-3 pb-1" 
                @click="sortUserName()"><p class="mb-0 rating-text sort-choosed">Пользователь<i class="bi bi-sort-up ps-1"></i></p>
              </th>
              <th 
                v-else-if="userNameSort === 'DECRESE' " 
                scope="col" 
                class="ps-3 disabled header-text pb-1 rating-text sort-choosed" 
                @click="sortUserName()"><p class="mb-0 rating-text sort-choosed">Пользователь<i class="bi bi-sort-down ps-1"></i></p>
              </th>
              <th 
                v-else scope="col" 
                class="ps-3 disabled header-text pb-1 rating-text sort-choosedt"
                @click="sortUserName()"><p class="mb-0 rating-text">Пользователь</p>
              </th>

              <th 
                v-if="userBalanceSort === 'INCRESE' " 
                scope="col" 
                class="pe-3 disabled header-text pb-1 rating-text sort-choosed text-end" 
                @click="sortBalance()"><p class="mb-0 rating-text sort-choosed">Баланс<i class="bi bi-sort-up ps-1"></i></p>
              </th>
              <th 
                v-else-if="userBalanceSort === 'DECRESE' " 
                scope="col" 
                class="pe-3 disabled header-text pb-1 rating-text sort-choosed text-end" 
                @click="sortBalance()"><p class="mb-0 rating-text sort-choosed">Баланс<i class="bi bi-sort-down ps-1"></i></p>
              </th>
              <th 
                v-else scope="col" 
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
  import UserSearch from '@/components/SendMoneyComponents/UserSearch.vue';
  import UserCard from '@/components/SendMoneyComponents/UserCard.vue';

  export default {
    name: 'rating',
    data: () => ({
      usersArray: [
        {
          firstName: 'John', 
          lastName: 'Doe', 
          middleName:"Eduardovich", 
          shortenWalletAdress: '9HtLA...J6JZP',
          walletAdress: '9HtLARfdrcnSzeipRUe2GQTRLBhe62SQkMF6FTJ6JZP', 
          id: '1', moneyAmount: '123', 
          profilePicture: '',
          about: 'Информация о пользователе'
        },
        {
          firstName: 'Test', 
          lastName: 'User', 
          middleName: "", 
          shortenWalletAdress: 'UHtLA...J6JZP',
          walletAdress: '9HtLARfdrcnSzeipRUe2GQTRLBhe62SQkMF6FTJ6JZP',
          id: '2', 
          moneyAmount: '13475823', 
          profilePicture: '',
          about: 'Информация о пользователе'
        },
        {
          firstName: 'Владимир', 
          lastName: 'Шальнев', 
          middleName: "Сергеевич", 
          shortenWalletAdress: 'AHtLA...J6JZP',
          walletAdress: '9HtLARfdrcnSzeipRUe2GQTRLBhe62SQkMF6FTJ6JZP',
          id: '3', 
          moneyAmount: '13475', 
          profilePicture: '',
          about: 'Информация о пользователе'
        }
      ],
      userNameSort: "NO",
      userBalanceSort: "INCRESE",
    }),
    components: {
      CustomHeader,
      UserSearch,
      UserCard
    },
    methods: {
      sortBalance(){
        if (this.userBalanceSort === "INCRESE") {
            this.userBalanceSort = "DECRESE";
        }
        else if (this.userBalanceSort === "DECRESE") {
            this.userBalanceSort = "INCRESE";
        }
        else{
            this.userBalanceSort = "DECRESE";
            this.userNameSort = "NO";
        }
      },
      sortUserName(){
        if (this.userNameSort === "INCRESE") {
            this.userNameSort = "DECRESE";
        }
        else if (this.userNameSort === "DECRESE") {
            this.userNameSort = "INCRESE";
        }
        else{
            this.userNameSort = "DECRESE";
            this.userBalanceSort = "NO";
        }
      },
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