import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Collapsible from "react-native-collapsible";

const HistoricListItem = (props) => {
  const { historicItem } = props;
  const { title, gender, rate, description, img } = historicItem;
  const [isExpanded, setIsExpanded] = useState(true);

  detail = () => {
    return (
      <Collapsible collapsed={isExpanded}>
        <View style={styles.detail}>
          <Text style={styles.lineText1}>{description}</Text>
        </View>
      </Collapsible>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.line}>
        <Image
          source={{ uri: img }}
          style={styles.equipament}
          aspectRatio={1}
          resizeMode="contain"
        />
        <View style={styles.colum}>
          <Text style={styles.lineText1}>{title}</Text>
          <Text style={styles.lineText2}>{gender}</Text>
          <Text style={styles.lineText3}>{"R$:" + rate}</Text>
        </View>
      </View>
      {this.detail()}
      <TouchableOpacity
        onPress={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        <View style={{ alignSelf: "flex-end", marginRight: 20 }}>
          <Text style={styles.lineText4}>
            {isExpanded ? "Detalhes [+]" : "Detalhes [-]"}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HistoricListItem;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: "#bbb",
  },
  detail: {
    flex: 1,
    marginLeft: 20,
  },
  line: {
    height: 100,

    alignItems: "center",
    flexDirection: "row",
  },
  colum: {
    flexDirection: "column",
    flex: 4,
    padding: 10,
  },
  status: {
    fontSize: 15,
    fontFamily: "Rivalia",
    flexDirection: "row",
  },
  lineText1: {
    fontSize: 20,
    fontFamily: "Revalia",
    fontWeight: "bold",
  },
  lineText2: {
    fontSize: 17,
    fontFamily: "Revalia",
    fontWeight: "bold",
  },
  lineText3: {
    fontSize: 15,
    fontFamily: "Revalia",
    fontWeight: "bold",
  },
  lineText4: {
    fontSize: 16,
    fontFamily: "Revalia",
    fontWeight: "bold",
  },
  equipament: {
    aspectRatio: 1,
    flex: 1,
    marginLeft: 15,
    borderRadius: 5,
  },
  collapsed: {
    maxHeight: 60,
  },
  expanded: {
    flex: 1,
  },
});
