import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CallListItem = (props) => {
  const { callItem, onPressItem } = props;
  const { client, date, time, address, status } = callItem;
  return (
    <TouchableOpacity
      onPress={() => {
        onPressItem({ callItem });
      }}
    >
      <View style={styles.line}>
        <View style={styles.colum}>
          <View style={styles.row}>
            <Text style={styles.lineTextLabel}>Cliente: </Text>
            <Text style={styles.lineText}>{client}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.lineTextLabel}>Data: </Text>
            <Text style={styles.lineText}>{date}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.lineTextLabel}>Hora: </Text>
            <Text style={styles.lineText}>{time}</Text>
          </View>
          <Text style={styles.lineTextLabel}>Local: </Text>
          <Text style={styles.lineText}>{address}</Text>
          <View
            style={{
              alignSelf: "flex-end",
              marginRight: 20,
              paddingBottom: 20,
            }}
          >
            <View style={styles.row}>
              <Text style={styles.lineTextLabel}> Status: </Text>
              {status === "Agendada" ? (
                <Text style={styles.lineTextAgendada}>{status}</Text>
              ) : (
                <Text style={styles.lineTextConcluida}>{status}</Text>
              )}
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "#bbb",
    flexDirection: "row",
  },
  colum: {
    flexDirection: "column",
    flex: 4,
    padding: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  lineTextLabel: {
    fontSize: 20,
    fontFamily: "Revalia",
    fontWeight: "bold",
  },
  lineText: {
    fontSize: 15,
    fontFamily: "Revalia",
  },
  lineTextConcluida: {
    color: "#00C213",
    fontSize: 15,
    fontFamily: "Revalia",
  },
  lineTextAgendada: {
    color: "#FFB400",
    fontSize: 15,
    fontFamily: "Revalia",
  },
});

export default CallListItem;
