import * as types from "./types";
import state from "./state";
const mutations = {
  /********
   * 带参数
  [types.INCREMENT](state，params){
    state.count+=params;
  }
   * ************** */
  [types.SHOWNAV](state) {
    state.showNav = true;
  },
  [types.HIDENAV](state) {
    state.showNav = false;
  },
  [types.SHOWFOOTER](state) {
    state.showFooter = true;
  },
  [types.HIDEFOOTER](state) {
    state.showFooter = false;
  },
  [types.SHOWLOADING](state) {
    state.loading = true;
  },
  [types.HIDELOADING](state) {
    state.loading = false;
  }
};
export default mutations;
