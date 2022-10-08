<template>
    <CustomHeader title="История транзакций" class="pt-0 my-4"/>
    <div id="history" class="container-fluid justify-content-center my-4">
        <table class="table table-hover table-background my-3">
          <thead>
            <tr>
            <th
                scope="col-1" 
                class="pt-3 ps-3">
                    <p class="mb-0 rating-text user-name-text">ID</p>
              </th>
              <th
                scope="col-2" 
                class="pt-2">
                    <p class="mb-0 rating-text user-name-text">От кого</p>
              </th>
              <th
                scope="col-2" 
                class="pt-2">
                    <p class="mb-0 rating-text user-name-text">Кому</p>
              </th>
              <th
                scope="col-2" 
                class="pt-2">
                    <p class="mb-0 rating-text user-name-text">Количество</p>
              </th>
              <th
                scope="col-2" 
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

    export default{
        name: 'ProfileMainComponent',
        components: {
            CustomHeader,
            TransactionCard
        },
        data: () => ({
            history: [
            {
                "blockNumber": 1,
                "timeStamp": 0,
                "contractAddress": "string",
                "from": "0x5820431b9B5625aaa8F453515b72FED24941750A",
                "to": "0x15Cc4abzz27647ec9fE70D892E55586074263dF0",
                "value": 125,
                "tokenName": "Wrapped Matic",
                "tokenSymbol": "DRUB",
                "gasUsed": 12026,
                "confirmations": 4910439
            },
            {
                "blockNumber": 2,
                "timeStamp": 0,
                "contractAddress": "string",
                "from": "0x5820431b9B5625aaa8F453515b72FED24941750A",
                "to": "0x15Cc4abzz27647ec9fE70D892E55586074263dF0",
                "value": 500,
                "tokenName": "Wrapped Matic",
                "tokenSymbol": "DRUB",
                "gasUsed": 120026,
                "confirmations": 4932439
            },
            {
                "blockNumber": 3,
                "timeStamp": 0,
                "contractAddress": "string",
                "from": "0x15Cc4abzz27647ec9fE70D892E55586074263dF0",
                "to": "0x5820431b9B5625aaa8F453515b72FED24941750A",
                "value": 200,
                "tokenName": "Matic",
                "tokenSymbol": "MATIC",
                "gasUsed": 126,
                "confirmations": 4920456
            }
        ]
        }),
        methods: {
        },
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