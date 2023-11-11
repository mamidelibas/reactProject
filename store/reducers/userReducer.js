//
//* USER KAYIT İŞLEMLERİ BÖLÜMÜ
//
/**
REDUX PAKETLERİ
        redux npm
        redux persist
        reduxt moment
        YÜKLE
*/

const initialState = {
  user: {
    name: "",
    lastname: "",
    username: "",
  },
};

// STATE GÜMCELLEYCİĞMİZ KISIM. ACTİON GÜNCELLEYECEĞİMİZ DEĞERLER
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: {} };
  }
};

export default userReducer;
