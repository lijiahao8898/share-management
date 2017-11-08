const Add = 'Add';
const addMoney = 'addMoney';

export default {
    [Add](state, n) {
        state.count = state.count + n;
        console.log(state.count);
    },
    [addMoney](state, money) {
        state.money = state.money + money;
        console.log(state.money)
    }
}