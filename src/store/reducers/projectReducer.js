const initState = {
  projects: [
    { id: "1", title: "Some title1", content: "lolLoLlolLol1" },
    { id: "2", title: "Some title2", content: "lolLoLlolLol2" },
    { id: "3", title: "Some title3", content: "lolLoLlolLol3" },
    { id: "4", title: "Some title4", content: "lolLoLlolLol4" },
    { id: "5", title: "Some title5", content: "lolLoLlolLol6" }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("Created project: ", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("Created project error: ", action.err);
      return state;
    default:
      break;
  }
  return state;
};

export default projectReducer;
