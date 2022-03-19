import { StyleSheet, Dimensions } from "react-native";

var witdh = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
  },
  Header: {
    width: "100%",
    height: 240,
    backgroundColor: "#ffffff",
    elevation: 6,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
  },
  CompSearch: {
    width: "90%",
    height: 50,
    // borderWidth: 1,
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    elevation: 5,
    backgroundColor: "#ffffff",
  },
  TouchSearch: {
    width: "25%",
    height: 50,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  InputSearch: {
    width: "75%",
    height: 40,
    fontWeight: "bold",
  },
  Content1: {
    width: "85%",
    height: 60,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  Greeting: {
    fontSize: 25,
    fontWeight: "bold",
  },
  Member: {
    fontSize: 15,
    fontWeight: "bold",
  },
  TouchOrder: {
    color: "red",
    fontWeight: "bold",
  },
  ContentSaldo: {
    width: "90%",
    height: 70,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  // Saldo Moocu
  SaldoMoocu: {
    width: "50%",
    height: 70,
    backgroundColor: "#f3f4f5",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  SaldoMoocu2: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 3,
  },
  ContentLogo1: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
  },
  IconSaldoMoocu: {
    width: 30,
    height: 30,
    top: 5,
  },
  IconSaldoShadow: {
    width: 25,
    height: 20,
    bottom: 5,
  },
  ContentLogo2: {
    width: 80,
    height: 40,
    justifyContent: "center",
  },
  IconTitleMoocu: {
    width: 55,
    height: 15,
  },
  RupiahMoocu: {
    fontSize: 12,
    fontWeight: "bold",
  },

  // Saldo Dana
  SaldoDana: {
    width: "50%",
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  IconDana: {
    width: 40,
    height: 40,
  },
  ContentLogo: {
    width: 80,
    height: 40,
    justifyContent: "center",
    marginLeft: 5,
  },
  RupiahDana: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#108ee9",
  },

  // Content 2
  Content2: {
    width: "90%",
    height: 60,
    backgroundColor: "#0f2240",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  Content2Icon: {
    width: 50,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  TouchContent2: {
    width: 52,
    height: 40,
    // backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  txtContent2: {
    fontSize: 10,
    fontWeight: "bold",
    color: "white",
    marginTop: 4,
  },
  IconContent2: {
    width: 22,
    height: 22,
    tintColor: "#ffffff",
  },

  // Content 3
  Content3: {
    width: "90%",
    maxWidth: "85%",
    // backgroundColor: "red",
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-between",
    flexWrap: "wrap",
  },
  ContentType: {
    width: "20%",
    height: 60,
    margin: 7,
    // backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  Circle: {
    width: 40,
    height: 40,
    backgroundColor: "#ededed",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  ImgCircle: {
    width: 30,
    height: 30,
    tintColor: "#ec1d25",
  },
  txtCircle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#ea1c24",
  },
  Circle2: {
    width: 40,
    height: 40,
    backgroundColor: "#646464",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  ImgCircle2: {
    width: 25,
    height: 25,
    tintColor: "#ededed",
    resizeMode: "contain",
  },
  txtCircle2: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#656565",
  },

  // Content 4
  Content4: {
    width: "90%",
    //   backgroundColor: 'red',
    marginTop: 20,
  },
  txtContent4: {
    fontSize: 14,
    fontWeight: "bold",
  },
  banner: {
    width: 180,
    height: 110,
    resizeMode: "contain",
  },

  // Content 5
  Content5: {
    width: "90%",
    // backgroundColor: "red",
    marginTop: 15,
  },
  txtContent5: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "gray",
  },
  Company: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
  },
  LogoCompany: {
    width: 75,
    height: 30,
    // backgroundColor: "red",
    marginTop: 15,
    marginRight: 10,
  },
});
