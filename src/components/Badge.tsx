import React, { ReactElement } from "react";
import { View } from "react-native";
import { Typography } from "./Typography";

export function Badge({ children }: { children: ReactElement }) {
  return (
    <View>
      {children}
      <View
        style={[
          {
            width: 16,
            height: 16,
            borderRadius: 8,
            backgroundColor: "red",
            alignItems: "center",
            justifyContent: "center",
          },
          {
            position: "absolute",
            right: -5,
            top: -5,
          },
        ]}
      >
        <Typography fontSize={10} color="white" />
      </View>
    </View>
  );
}