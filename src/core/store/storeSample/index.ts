import { Commit } from "vuex";
import { GET_SAMPLE_DATA, SAMPLE_DATA, SET_SAMPLE_DATA } from "./type";


interface IState {
  stateData : string
}

const state = {
  stateData:'AAAAAA'
};
const getters = {
  [GET_SAMPLE_DATA]:(state: IState): string => {
    return state.stateData;
  },

};
const mutations = {
  [SET_SAMPLE_DATA]:(state: IState,payload:string): void => {
    state.stateData = payload;
  },
}
const actions = {
  [SAMPLE_DATA]:({ commit }: { commit: Commit },payload:string): void => {
    commit(SET_SAMPLE_DATA,payload)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};