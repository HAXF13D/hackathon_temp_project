<template>
    <CustomHeader title="История транзакций" class="pt-0 my-4"/>
    <div id="history" class="container-fluid justify-content-center my-4">
        <table class="table table-hover table-background my-3">
            
          <thead>
            <tr>
            <th
                scope="col" 
                class="pt-3 ps-3">
                    <p class="mb-0 rating-text user-name-text">ID</p>
              </th>
              <th
                scope="col" 
                class="pt-2">
                    <p class="mb-0 rating-text user-name-text">От кого</p>
              </th>
              <th
                scope="col" 
                class="pt-2">
                    <p class="mb-0 rating-text user-name-text">Кому</p>
              </th>
              <th
                scope="col" 
                class="pt-1">
                    <p class="mb-0 rating-text user-name-text">Количество</p>
              </th>
              <th
                scope="col" 
                class="pt-2 pe-3">
                    <p class="mb-0 rating-text user-name-text">Токен</p>
              </th>

            </tr>
          </thead>
          <TransactionCard 
              v-for="transaction in history"
              v-bind:key="transaction.id"
              v-bind:transaction="transaction"
          ></TransactionCard>
        </table>
    </div>
    <div class=".d-block .d-sm-none" style="margin-bottom: 100px;"></div>
</template>

<script>
    import CustomHeader from '@/components/CustomHeader.vue';
    import TransactionCard from '@/components/HistoryComponents/TransactionCard.vue';
    import axios from 'axios';

    export default{
        name: 'ProfileMainComponent',
        components: {
            CustomHeader,
            TransactionCard
        },
        data: () => ({
            public_key: '',
            history: []
        }),
        methods: {
            writeHistory(data){
                let history = data.history;
                let i = 1;
                history.forEach(element => {
                    element.id = i;
                    let temp = element.to;
                    element.to = `${temp.substr(0, 5)}...${temp.substr(temp.length - 5)}`
                    temp = element.from;
                    element.from = `${temp.substr(0, 5)}...${temp.substr(temp.length - 5)}`
                    console.log(element.value);
                    element.value = element.value === undefined ? element.value : String(element.value);
                    i++;
                });
                this.history = data.history;
                console.log(this.history);
            },
        },
        created:
            async function(){
                const public_key = localStorage.getItem('public_key');
                //
                console.log(public_key, "228");
                let url = `https://hackathon.lsp.team/hk/v1/wallets/${public_key}/history`;

                console.log(url);

                try{

                    await axios({
                        method: 'post',
                        url: url,
                        data: {
                            page: 0,
                            offset: 100,
                            sort: 'desc'
                        }
                    }).then(response => (this.writeHistory(response.data)));
                }
                catch(error){
                    console.log(error);
                };
            }
        
    }

</script>

<style scoped>

    @media screen and (min-width: 576px) {
        #history {
            padding-right: 3rem;
            padding-left: 5rem;
        }
    }

    @media screen and (min-width: 768px) {
        #history {
            padding-right: 7rem;
            padding-left: 7rem;
        }
    }

    @media screen and (min-width: 1200px) {
        #history {
            padding-right: .5rem;
            padding-left: 1rem;
            width: 1100px;
        }
    }
    .table-background{
        background-color: white;
        border-radius: 16px;
    }
</style>

<style>

    .table>tbody:last-child{
        border-bottom: 0px !important;
        border-color: transparent !important;
    }

</style>