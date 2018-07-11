import state from "./state";
const getters = {
  showNav: state => {
    return state.showNav;
  },
  showFooter: state => {
    return state.showFooter;
  },
  loading: state => {
    return state.loading;
  }
};
export default getters;
