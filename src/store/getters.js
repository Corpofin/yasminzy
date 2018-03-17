export default {
  portfolio(state) {
    return state.projects.filter((item, index) => index < 3);
  },
  projects(state) {
    return state.projects;
  }
};
