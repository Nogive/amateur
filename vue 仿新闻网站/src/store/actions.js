import * as types from "./types";
const actions = {
  /*******
   * 带参数写法
  [types.INCREMENT]: ({ commit },params) => {
    commit(types.INCREMENT,params);
  }
   *********** */
  [types.SHOWNAV]: ({ commit }) => {
    commit(types.SHOWNAV);
  },
  [types.SHOWFOOTER]: ({ commit }) => {
    commit(types.SHOWFOOTER);
  },
  [types.SHOWLOADING]: ({ commit }) => {
    commit(types.SHOWLOADING);
  },
  [types.HIDENAV]: ({ commit }) => {
    commit(types.HIDENAV);
  },
  [types.HIDEFOOTER]: ({ commit }) => {
    commit(types.HIDEFOOTER);
  },
  [types.HIDELOADING]: ({ commit }) => {
    commit(types.HIDELOADING);
  }
};
export default actions;
