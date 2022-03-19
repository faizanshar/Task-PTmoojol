import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "./style/style";

// icons expo
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

export default function HomeScreen() {
  const data = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/falovi/image/upload/v1647718779/moojol/icons/motor_snwapz.png",
      title: "Mootor",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/falovi/image/upload/v1647718456/moojol/icons/car_oyky5d.png",
      title: "Moobil",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/falovi/image/upload/v1647718523/moojol/icons/gift-box_t6xdha.png",
      title: "Moo Paket",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/falovi/image/upload/v1647718486/moojol/icons/cutlery_lu2rkf.png",
      title: "Moo Food",
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/falovi/image/upload/v1647718474/moojol/icons/cartt_btmczq.png",
      title: "Moo Mart",
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/falovi/image/upload/v1647718440/moojol/icons/buus-removebg-preview_qriusr.png",
      title: "Moo Bus",
    },
    {
      id: 7,
      image:
        "https://res.cloudinary.com/falovi/image/upload/v1647718874/moojol/icons/trainn_utt5fz.png",
      title: "Moo Train",
    },
    {
      id: 8,
      image:
        "https://res.cloudinary.com/falovi/image/upload/v1647718802/moojol/icons/planee_slduy2.png",
      title: "Moo Fly",
    },
  ];

  return (
    <View style={styles.Container}>
      <StatusBar hidden={true} />

      <View style={styles.Header}>
        <View style={styles.CompSearch}>
          <TouchableOpacity style={styles.TouchSearch}>
            <Ionicons name="ios-search-sharp" color={"gray"} size={30} />
          </TouchableOpacity>
          <TextInput
            style={styles.InputSearch}
            placeholder="Search"
            placeholderTextColor={"gray"}
          />
        </View>

        <View style={styles.Content1}>
          <View>
            <Text style={styles.Greeting}>Hi, Hafizh!</Text>
            <Text style={styles.Member}>Silver Member</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.TouchOrder}>Orders</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.ContentSaldo}>
          {/* Saldo Moocu */}
          <View style={styles.SaldoMoocu}>
            <View style={styles.SaldoMoocu2}>
              <View style={styles.ContentLogo1}>
                <Image
                  style={styles.IconSaldoMoocu}
                  source={{
                    uri: "https://res.cloudinary.com/falovi/image/upload/v1647718709/moojol/icons/logomooku_jeaqd4.png",
                  }}
                />
                <Image
                  style={styles.IconSaldoShadow}
                  source={{
                    uri: "https://res.cloudinary.com/falovi/image/upload/v1647718836/moojol/icons/shadow_ubaw0v.png",
                  }}
                />
              </View>
              <View style={styles.ContentLogo2}>
                <Image
                  style={styles.IconTitleMoocu}
                  source={{
                    uri: "https://res.cloudinary.com/falovi/image/upload/v1647718757/moojol/icons/moocu_w5nurg.png",
                  }}
                />
                <Text style={styles.RupiahMoocu}>Rp. 100.000</Text>
              </View>
            </View>
          </View>
          {/* Saldo Dana */}
          <View style={styles.SaldoDana}>
            <Image
              source={{
                uri: "https://res.cloudinary.com/falovi/image/upload/v1647718497/moojol/icons/dana_mtmtmz.png",
              }}
              style={styles.IconDana}
            />
            <View style={styles.ContentLogo}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/falovi/image/upload/v1647718855/moojol/icons/titledana_l673uu.png",
                }}
                style={styles.IconTitleMoocu}
              />
              <Text style={styles.RupiahDana}>Rp.100.000</Text>
            </View>
          </View>
        </View>

        <View style={styles.Content2}>
          <TouchableOpacity style={styles.TouchContent2}>
            <View style={styles.Content2Icon}>
              <MaterialCommunityIcons
                name="qrcode-scan"
                size={24}
                color="white"
              />
            </View>
            <Text style={styles.txtContent2}>Scan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.TouchContent2}>
            <View style={styles.Content2Icon}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/falovi/image/upload/v1647718900/moojol/icons/transfer_mco057.png",
                }}
                style={styles.IconContent2}
              />
            </View>
            <Text style={styles.txtContent2}>Transfer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.TouchContent2}>
            <View style={styles.Content2Icon}>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/falovi/image/upload/v1647718302/moojol/icons/arrowdown_irkqow.png",
                }}
                style={styles.IconContent2}
              />
            </View>
            <Text style={styles.txtContent2}>Tarik Tunai</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.TouchContent2}>
            <View style={styles.Content2Icon}>
              <MaterialIcons name="history" size={25} color="white" />
            </View>
            <Text style={styles.txtContent2}>Riwayat</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.Content3}>
        {data.map((item, index) => {
          if (item.id <= 3) {
            return (
              <TouchableOpacity style={styles.ContentType} key={index}>
                <View style={styles.Circle}>
                  <Image
                    source={{ uri: item.image }}
                    style={styles.ImgCircle}
                  />
                </View>
                <Text style={styles.txtCircle}>{item.title}</Text>
              </TouchableOpacity>
            );
          } else {
            return (
              <TouchableOpacity style={styles.ContentType} key={index}>
                <View style={styles.Circle2}>
                  <Image
                    source={{ uri: item.image }}
                    style={styles.ImgCircle2}
                  />
                </View>
                <Text style={styles.txtCircle2}>{item.title}</Text>
              </TouchableOpacity>
            );
          }
        })}
      </View>

      <View style={styles.Content4}>
        <Text style={styles.txtContent4}>Ada Yang Special Buat Kamu!</Text>
        <ScrollView horizontal={true}>
          <Image
            source={{
              uri: "https://res.cloudinary.com/falovi/image/upload/v1647718937/moojol/images/banner_qsohti.png",
            }}
            style={styles.banner}
          />
          <Image
            source={{
              uri: "https://res.cloudinary.com/falovi/image/upload/v1647718982/moojol/images/telkom_tz2ofb.jpg",
            }}
            style={styles.banner}
          />
        </ScrollView>
      </View>

      <View style={styles.Content5}>
        <Text style={styles.txtContent5}>Didukung oleh</Text>
        <View style={styles.Company}>
          <Image
            source={{
              uri: "https://res.cloudinary.com/falovi/image/upload/v1647718580/moojol/icons/Logodana_tnlwzf.png",
            }}
            style={styles.LogoCompany}
          />
          <Image
            source={{
              uri: "https://res.cloudinary.com/falovi/image/upload/v1647718391/moojol/icons/bca_n3tpf1.png",
            }}
            style={styles.LogoCompany}
          />
          <Image
            source={{
              uri: "https://res.cloudinary.com/falovi/image/upload/v1647718788/moojol/icons/oris_rf6xsb.png",
            }}
            style={styles.LogoCompany}
          />
          <Image
            source={{
              uri: "https://res.cloudinary.com/falovi/image/upload/v1647718560/moojol/icons/linkaja_kipqaa.png",
            }}
            style={styles.LogoCompany}
          />
        </View>
      </View>
    </View>
  );
}
